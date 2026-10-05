import cv2
import numpy as np

img = cv2.imread('public/assets/upvc-windows-doors/upvc-07.jpg')
h, w, c = img.shape

mask = np.zeros((h, w), dtype=np.uint8)

# 1. Bottom stickers on window rail
# Left sticker: x: 230 to 275, y: 645 to 662
mask[644:663, 230:275] = 255

# Right sticker: x: 545 to 590, y: 645 to 662
mask[644:663, 545:590] = 255

# 2. Center watermark:
# It's located roughly in y: 380 to 455, x: 215 to 370
# Let's inspect the exact difference in this region
roi = img[375:460, 215:375]
gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
bg = cv2.medianBlur(gray, 7)
diff = cv2.subtract(gray, bg)

# Detect the white/translucent text
_, text_mask = cv2.threshold(diff, 6, 255, cv2.THRESH_BINARY)
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
text_mask = cv2.dilate(text_mask, kernel, iterations=1)

mask[375:460, 215:375] = np.maximum(mask[375:460, 215:375], text_mask)

# Save mask for inspection
cv2.imwrite('scratch/upvc-07-mask.jpg', mask)

# Test inpainting
inp_telea = cv2.inpaint(img, mask, inpaintRadius=3, flags=cv2.INPAINT_TELEA)
inp_ns = cv2.inpaint(img, mask, inpaintRadius=3, flags=cv2.INPAINT_NS)

cv2.imwrite('scratch/upvc-07-cleaned-telea.jpg', inp_telea)
cv2.imwrite('scratch/upvc-07-cleaned-ns.jpg', inp_ns)

# Save zoom of center and stickers
cv2.imwrite('scratch/upvc-07-cleaned-center.jpg', inp_telea[360:480, 200:400])
cv2.imwrite('scratch/upvc-07-cleaned-stickers.jpg', inp_telea[630:680, :])

print('Clean test complete.')
