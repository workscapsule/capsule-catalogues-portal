import cv2
import numpy as np
import os

img_path = 'public/assets/upvc-windows-doors/upvc-07.jpg'
img = cv2.imread(img_path)
orig = img.copy()
clean = img.copy()

# 1. Left sticker on window sash bottom rail
patch_l = img[642:655, 142:178]
clean[642:655, 182:218] = patch_l

# 2. Right sticker on window sash bottom rail
patch_r = img[639:655, 512:552]
surrounding = np.hstack([img[639:655, 455:468], img[639:655, 508:521]])
surr_mean = surrounding.mean(axis=(0,1))
adjusted_patch_r = np.clip(patch_r.astype(np.float32) * (surr_mean / patch_r.mean(axis=(0,1))), 0, 255).astype(np.uint8)
clean[639:655, 468:508] = adjusted_patch_r

# 3. Center vertical mullion post (x: 295 to 338, y: 370 to 455)
post_above = img[280:365, 295:338]
h_wm = 85
for i in range(h_wm):
    alpha = 1.0
    if i < 15:
        alpha = i / 15.0
    elif i > h_wm - 15:
        alpha = (h_wm - i) / 15.0
    patch_row = post_above[i]
    clean[370 + i, 295:338] = (patch_row * alpha + img[370 + i, 295:338] * (1 - alpha)).astype(np.uint8)

# 4. Foliage to the left of the post (x: 235 to 295, y: 405 to 450)
foliage = clean[405:450, 235:295]
gray = cv2.cvtColor(foliage, cv2.COLOR_BGR2GRAY)
blur = cv2.GaussianBlur(gray, (5, 5), 0)
diff = cv2.subtract(gray, blur)
_, mask_f = cv2.threshold(diff, 5, 255, cv2.THRESH_BINARY)
inp_foliage = cv2.inpaint(foliage, mask_f, 1, cv2.INPAINT_TELEA)
clean[405:450, 235:295] = inp_foliage

# Save the final cleaned image
cv2.imwrite(img_path, clean, [int(cv2.IMWRITE_JPEG_QUALITY), 95])
print(f'Successfully updated {img_path}')

# Generate zoomed inspection crops for verification
os.makedirs('scratch', exist_ok=True)
cv2.imwrite('scratch/final_zoom_left_sticker.jpg', clean[630:670, 160:240])
cv2.imwrite('scratch/final_zoom_right_sticker.jpg', clean[630:670, 450:530])
cv2.imwrite('scratch/final_zoom_center.jpg', clean[350:470, 220:360])

# Half-size comparison
half_orig = cv2.resize(orig, (0, 0), fx=0.5, fy=0.5)
half_clean = cv2.resize(clean, (0, 0), fx=0.5, fy=0.5)
comparison = np.hstack([half_orig, half_clean])
cv2.imwrite('scratch/upvc_07_before_after.jpg', comparison)
print('Saved inspection artifacts.')
