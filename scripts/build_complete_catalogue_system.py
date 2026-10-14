import os
import shutil
import re
import fitz  # PyMuPDF
from PIL import Image, ImageDraw, ImageFont
import numpy as np

# Official Capsule Company details as requested:
COMPANY_NAME = "CAPSULE COMPANY"
PHONE = "9187924723"
PHONE_DISPLAY = "+91 91879 24723"
WEBSITE = "https://CapsuleCompany.in"
WEBSITE_DISPLAY = "https://CapsuleCompany.in"
EMAIL = "works.capsule@gmail.com"
ADDRESS_LINE_1 = "N/173, 1st and 2nd Floor, SLV Complex, Hebbal Kempapura, Amruth Nagar Road,"
ADDRESS_LINE_2 = "Kariyanna Layout, Bengaluru, Karnataka 560024."
ADDRESS_FULL = f"{ADDRESS_LINE_1} {ADDRESS_LINE_2}"

def prepare_logos():
    """Generates transparent logo assets optimized for dark and light backgrounds."""
    os.makedirs('scratch', exist_ok=True)
    src_logo = 'capsule-logo-transparent.png'
    if not os.path.exists(src_logo):
        src_logo = 'public/logo-transparent.png'
        
    im = Image.open(src_logo).convert('RGBA')
    arr = np.array(im)
    
    # Create dark-background version (letters changed from dark to pure white, copper retained)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    is_dark_letter = (a > 50) & (r < 80) & (g < 80) & (b < 80)
    arr_dark = arr.copy()
    arr_dark[is_dark_letter, 0] = 255
    arr_dark[is_dark_letter, 1] = 255
    arr_dark[is_dark_letter, 2] = 255
    
    dark_logo = Image.fromarray(arr_dark)
    dark_logo_path = 'scratch/logo_white_text_transparent.png'
    dark_logo.save(dark_logo_path)
    
    return src_logo, dark_logo_path

CATALOGUES_DEF = [
    {
        'id': 'brochure',
        'filename': 'Capsule_Company_Official_Brochure.pdf',
        'title': 'Official Corporate Brochure',
        'subtitle': 'Turnkey Design, Engineering & Execution',
        'is_landscape': True,
    },
    {
        'id': 'kitchen',
        'filename': 'Capsule_Interiors_Modular_Kitchen_Catalogue.pdf',
        'title': 'Modular Kitchens',
        'subtitle': 'L-Shaped, Island & Parallel Systems',
        'is_landscape': False,
    },
    {
        'id': 'wardrobe',
        'filename': 'Capsule_Interiors_Wardrobe_Catalogue.pdf',
        'title': 'Wardrobes & Walk-in Closets',
        'subtitle': 'Floor-to-Ceiling Luxury Joinery',
        'is_landscape': False,
    },
    {
        'id': 'tv_unit',
        'filename': 'Capsule_Interiors_TV_Unit_Catalogue.pdf',
        'title': 'TV Units & Media Consoles',
        'subtitle': 'Acoustic Slat Walls & Floating Lounges',
        'is_landscape': False,
    },
    {
        'id': 'kids_bed',
        'filename': 'Capsule_Interiors_Kids_Bed_Catalogue.pdf',
        'title': "Children's Bedrooms & Lofts",
        'subtitle': 'Multi-tier Bunks & Play Suites',
        'is_landscape': False,
    },
    {
        'id': 'bar_counter',
        'filename': 'Capsule_Interiors_Bar_Counter_Catalogue.pdf',
        'title': 'Bar Counters & Wine Lounges',
        'subtitle': 'Illuminated Cellars & Brass Hardware',
        'is_landscape': False,
    },
    {
        'id': 'temple',
        'filename': 'Capsule_Interiors_Temple_Design_Catalogue.pdf',
        'title': 'Mandir & Sacred Sanctuaries',
        'subtitle': 'Teak Carving, Corian & Sacred Brass',
        'is_landscape': False,
    },
    {
        'id': 'pop_ceiling',
        'filename': 'Capsule_Interiors_POP_Design_Catalogue.pdf',
        'title': 'POP Ceilings & Lighting Coves',
        'subtitle': 'Architectural Gypsum & Recessed LEDs',
        'is_landscape': False,
    },
    {
        'id': 'concrete_unit',
        'filename': 'Capsule_Interiors_Concrete_Unit_Catalogue.pdf',
        'title': 'Crockery & Concrete Units',
        'subtitle': 'Fluted Glass Display & Modern Sideboards',
        'is_landscape': False,
    },
    {
        'id': 'wall_panel',
        'filename': 'Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf',
        'title': 'Architectural Wall Panels',
        'subtitle': 'Fluted Wood, Metallic Inlays & Leatherette',
        'is_landscape': False,
    },
    {
        'id': 'wooden_flooring',
        'filename': 'Capsule_Company_Wooden_Flooring_Catalogue.pdf',
        'title': 'Hardwood & Engineered Flooring',
        'subtitle': 'Herringbone, Chevron & Solid Oak Planks',
        'is_landscape': False,
    },
    {
        'id': 'wall_fabric',
        'filename': 'Capsule_Company_Wall_Fabric_Catalogue.pdf',
        'title': 'Acoustic Wall Fabrics',
        'subtitle': 'Seamless Silks, Linen & Velvet Coverings',
        'is_landscape': False,
    },
    {
        'id': 'vinyl_flooring',
        'filename': 'Capsule_Company_Vinyl_Flooring_Catalogue.pdf',
        'title': 'Luxury Vinyl Tiles (LVT / SPC)',
        'subtitle': '100% Waterproof Rigid Core Flooring',
        'is_landscape': False,
    },
    {
        'id': 'paint_texture',
        'filename': 'Capsule_Company_Paint_Texture_Catalogue.pdf',
        'title': 'Luxury Textures & Stucco',
        'subtitle': 'Venetian Plaster, Limewash & Metallic Patina',
        'is_landscape': False,
    },
    {
        'id': 'wooden_polish',
        'filename': 'Capsule_Company_Wooden_Polish_Catalogue.pdf',
        'title': 'PU & Wood Polish Systems',
        'subtitle': 'High-Gloss Polyester & Matt Satin Finishes',
        'is_landscape': False,
    },
    {
        'id': 'upvc',
        'filename': 'Capsule_Company_UPVC_Windows_Doors_Catalogue.pdf',
        'title': 'UPVC Windows & Sliding Doors',
        'subtitle': 'Double Glazed Acoustic Fenestration',
        'is_landscape': False,
    },
    {
        'id': 'home_theater',
        'filename': 'Capsule_Company_Mini_Home_Theater_Catalogue.pdf',
        'title': 'Mini Home Theaters & Cinema',
        'subtitle': 'Dolby Atmos Acoustics, Recliners & 4K Laser',
        'is_landscape': False,
    },
    {
        'id': 'lighting',
        'filename': 'Capsule_Company_Lighting_Design_Catalogue.pdf',
        'title': 'Architectural Lighting & Fixtures',
        'subtitle': 'Magnetic Tracks, Spotlights & Statement Pendants',
        'is_landscape': False,
    },
]

def create_standard_contact_card(dark_logo_path, width_px=1000, height_px=450, bg_color=(18, 19, 22, 255)):
    """Creates a high-resolution dark luxury contact card image matching the catalogue aesthetic."""
    im = Image.new('RGBA', (width_px, height_px), bg_color)
    draw = ImageDraw.Draw(im)
    
    draw.rounded_rectangle([10, 10, width_px - 10, height_px - 10], radius=16, outline=(184, 109, 67, 200), width=2)
    
    if os.path.exists(dark_logo_path):
        logo = Image.open(dark_logo_path).convert('RGBA')
        logo_w, logo_h = logo.size
        target_h = 92
        target_w = int(logo_w * (target_h / logo_h))
        logo_resized = logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
        im.paste(logo_resized, (35, 25), logo_resized)
    
    try:
        font_title = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 24)
        font_sub = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 12)
        font_label = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 12)
        font_val = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 16)
        font_subval = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 11)
        font_addr = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 13)
    except:
        font_title = font_sub = font_label = font_val = font_subval = font_addr = ImageFont.load_default()
        
    draw.text((140, 36), COMPANY_NAME, fill=(255, 255, 255), font=font_title)
    draw.text((140, 68), 'YOUR SPACE MAKER  •  BENGALURU ARCHITECTURAL EXECUTION', fill=(206, 127, 83), font=font_sub)
    
    draw.line([35, 134, width_px - 35, 134], fill=(184, 109, 67, 100), width=1)
    
    card_w = (width_px - 70 - 30) // 3
    card_y = 150
    card_h = 105
    
    cards_data = [
        ('DIRECT STUDIO PHONE', PHONE_DISPLAY, 'Mon–Sat: 9:30 AM to 7:00 PM'),
        ('OFFICIAL EMAIL', EMAIL, 'Design RFQ & Project Inquiries'),
        ('OFFICIAL WEBSITE', WEBSITE_DISPLAY, 'Online Catalogues & Portfolio')
    ]
    
    for idx, (label, val, sub) in enumerate(cards_data):
        cx = 35 + idx * (card_w + 15)
        draw.rounded_rectangle([cx, card_y, cx + card_w, card_y + card_h], radius=10, fill=(28, 29, 34, 255), outline=(184, 109, 67, 90), width=1)
        draw.text((cx + 16, card_y + 14), label, fill=(206, 127, 83), font=font_label)
        draw.text((cx + 16, card_y + 38), val, fill=(255, 255, 255), font=font_val)
        draw.text((cx + 16, card_y + 70), sub, fill=(180, 180, 180), font=font_subval)
        
    addr_y = 272
    addr_h = 110
    draw.rounded_rectangle([35, addr_y, width_px - 35, addr_y + addr_h], radius=10, fill=(28, 29, 34, 255), outline=(184, 109, 67, 90), width=1)
    draw.text((52, addr_y + 14), 'REGISTERED EXPERIENCE STUDIO & OFFICE ADDRESS', fill=(206, 127, 83), font=font_label)
    draw.text((52, addr_y + 40), ADDRESS_LINE_1, fill=(240, 240, 240), font=font_addr)
    draw.text((52, addr_y + 66), ADDRESS_LINE_2, fill=(240, 240, 240), font=font_addr)
    
    draw.text((width_px // 2 - 220, height_px - 30), '© 2026 CAPSULE COMPANY • ALL RIGHTS RESERVED • YOUR SPACE MAKER', fill=(140, 140, 140), font=font_subval)
    
    return im

def create_tall_contact_card(dark_logo_path, width_px=1090, height_px=1120, bg_color=(18, 19, 22, 255)):
    """Creates a tall luxury contact card specifically sized for Kids Bed and Concrete Unit."""
    im = Image.new('RGBA', (width_px, height_px), bg_color)
    draw = ImageDraw.Draw(im)

    draw.rounded_rectangle([10, 10, width_px - 10, height_px - 10], radius=16, outline=(184, 109, 67, 200), width=2)

    if os.path.exists(dark_logo_path):
        dark_logo = Image.open(dark_logo_path).convert('RGBA')
        lw, lh = dark_logo.size
        target_h = 100
        target_w = int(lw * (target_h / lh))
        logo_res = dark_logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
        im.paste(logo_res, (45, 35), logo_res)

    try:
        font_title = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 26)
        font_sub = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 13)
        font_label = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 13)
        font_val = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 18)
        font_subval = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 12)
        font_addr = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 14)
    except:
        font_title = font_sub = font_label = font_val = font_subval = font_addr = ImageFont.load_default()

    draw.text((160, 48), COMPANY_NAME, fill=(255, 255, 255), font=font_title)
    draw.text((160, 84), 'YOUR SPACE MAKER  •  BENGALURU ARCHITECTURAL STUDIO', fill=(206, 127, 83), font=font_sub)

    draw.line([45, 160, width_px - 45, 160], fill=(184, 109, 67, 100), width=1)

    draw.text((45, 190), 'CONNECT WITH OUR ARCHITECTURAL & JOINERY DESIGN TEAM', fill=(206, 127, 83), font=font_label)
    draw.text((45, 220), 'Experience bespoke craftsmanship, turnkey project management, and precision joinery execution.', fill=(210, 210, 210), font=font_sub)

    card_w = (width_px - 90 - 40) // 3
    card_y = 275
    card_h = 145

    cards_data = [
        ('DIRECT STUDIO PHONE', PHONE_DISPLAY, 'Mon–Sat: 9:30 AM to 7:00 PM'),
        ('OFFICIAL EMAIL', EMAIL, 'Design RFQ & Project Inquiries'),
        ('OFFICIAL WEBSITE', WEBSITE_DISPLAY, 'Online Catalogues & Portfolio')
    ]

    for idx, (label, val, sub) in enumerate(cards_data):
        cx = 45 + idx * (card_w + 20)
        draw.rounded_rectangle([cx, card_y, cx + card_w, card_y + card_h], radius=12, fill=(28, 29, 34, 255), outline=(184, 109, 67, 90), width=1)
        draw.text((cx + 20, card_y + 18), label, fill=(206, 127, 83), font=font_label)
        draw.text((cx + 20, card_y + 50), val, fill=(255, 255, 255), font=font_val)
        draw.text((cx + 20, card_y + 95), sub, fill=(180, 180, 180), font=font_subval)

    addr_y = 455
    addr_h = 160
    draw.rounded_rectangle([45, addr_y, width_px - 45, addr_y + addr_h], radius=12, fill=(28, 29, 34, 255), outline=(184, 109, 67, 90), width=1)
    draw.text((65, addr_y + 20), 'REGISTERED EXPERIENCE STUDIO & OFFICE ADDRESS', fill=(206, 127, 83), font=font_label)
    draw.text((65, addr_y + 56), ADDRESS_LINE_1, fill=(240, 240, 240), font=font_addr)
    draw.text((65, addr_y + 86), ADDRESS_LINE_2, fill=(240, 240, 240), font=font_addr)
    draw.text((65, addr_y + 118), 'Direct Client Consultations, Material Sampling & Turnkey Execution across Bengaluru', fill=(180, 180, 180), font=font_subval)

    draw.text((width_px // 2 - 250, height_px - 45), '© 2026 CAPSULE COMPANY • ALL RIGHTS RESERVED • YOUR SPACE MAKER', fill=(140, 140, 140), font=font_subval)

    return im

def create_brochure_closing_page(light_logo_path, width_px=1920, height_px=1080):
    """Creates a dedicated executive closing and contact page for the landscape corporate brochure."""
    im = Image.new('RGB', (width_px, height_px), (255, 255, 255))
    draw = ImageDraw.Draw(im)

    draw.rectangle([50, 50, width_px - 50, height_px - 50], outline=(184, 109, 67, 180), width=3)
    draw.rectangle([65, 65, width_px - 65, height_px - 65], outline=(184, 109, 67, 80), width=1)

    if os.path.exists(light_logo_path):
        logo = Image.open(light_logo_path).convert('RGBA')
        lw, lh = logo.size
        target_h = 160
        target_w = int(lw * (target_h / lh))
        logo_res = logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
        im.paste(logo_res, ((width_px - target_w) // 2, 100), logo_res)

    try:
        font_title = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 36)
        font_sub = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 20)
        font_card_lbl = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 17)
        font_card_val = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 24)
        font_card_sub = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 16)
        font_addr = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 18)
        font_foot = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', 15)
    except:
        font_title = font_sub = font_card_lbl = font_card_val = font_card_sub = font_addr = font_foot = ImageFont.load_default()

    headline = 'THANK YOU FOR EXPLORING OUR PORTFOLIO'
    b_h = draw.textbbox((0, 0), headline, font=font_title)
    draw.text(((width_px - (b_h[2] - b_h[0])) // 2, 290), headline, fill=(25, 25, 28), font=font_title)

    sub = '“Your Vision. Our Expertise. A Space That Feels Like You.”  •  LET\'S CREATE YOUR DREAM SPACE.'
    b_s = draw.textbbox((0, 0), sub, font=font_sub)
    draw.text(((width_px - (b_s[2] - b_s[0])) // 2, 345), sub, fill=(184, 109, 67), font=font_sub)

    draw.line([width_px // 2 - 250, 395, width_px // 2 + 250, 395], fill=(184, 109, 67, 120), width=2)

    box_w = (width_px - 200 - 60) // 3
    box_y = 440
    box_h = 180

    cards = [
        ('DIRECT STUDIO PHONE', PHONE_DISPLAY, 'Mon–Sat: 9:30 AM to 7:00 PM'),
        ('OFFICIAL EMAIL', EMAIL, 'Architecture & RFQ Submissions'),
        ('OFFICIAL WEBSITE', WEBSITE_DISPLAY, 'Online Catalogues & Portfolio')
    ]

    for idx, (lbl, val, s) in enumerate(cards):
        cx = 100 + idx * (box_w + 30)
        draw.rounded_rectangle([cx, box_y, cx + box_w, box_y + box_h], radius=16, fill=(250, 250, 250), outline=(184, 109, 67, 120), width=2)
        draw.text((cx + 25, box_y + 25), lbl, fill=(184, 109, 67), font=font_card_lbl)
        draw.text((cx + 25, box_y + 65), val, fill=(20, 20, 20), font=font_card_val)
        draw.text((cx + 25, box_y + 115), s, fill=(110, 110, 110), font=font_card_sub)

    addr_y = 660
    addr_h = 220
    draw.rounded_rectangle([100, addr_y, width_px - 100, addr_y + addr_h], radius=16, fill=(250, 250, 250), outline=(184, 109, 67, 120), width=2)
    draw.text((135, addr_y + 25), 'REGISTERED EXPERIENCE STUDIO & OFFICE ADDRESS', fill=(184, 109, 67), font=font_card_lbl)
    draw.text((135, addr_y + 68), ADDRESS_LINE_1, fill=(35, 35, 35), font=font_addr)
    draw.text((135, addr_y + 105), ADDRESS_LINE_2, fill=(35, 35, 35), font=font_addr)
    draw.text((135, addr_y + 150), 'Direct On-Site Architecture Consultations, Material Sampling & Turnkey Execution across Bengaluru', fill=(110, 110, 110), font=font_card_sub)

    foot = '© 2026 CAPSULE COMPANY • ALL RIGHTS RESERVED • YOUR SPACE MAKER • BENGALURU, KARNATAKA'
    b_f = draw.textbbox((0, 0), foot, font=font_foot)
    draw.text(((width_px - (b_f[2] - b_f[0])) // 2, 940), foot, fill=(130, 130, 130), font=font_foot)

    return im

def create_master_cover_page(dark_logo_path, width_pt=595.3, height_pt=841.9):
    """Creates a stunning Master Cover page for the Complete Product Catalogue Final PDF."""
    scale = 3
    w_px = int(width_pt * scale)
    h_px = int(height_pt * scale)
    
    im = Image.new('RGB', (w_px, h_px), (14, 15, 18))
    draw = ImageDraw.Draw(im)
    
    margin = 70
    draw.rectangle([margin, margin, w_px - margin, h_px - margin], outline=(184, 109, 67, 140), width=3)
    draw.rectangle([margin + 12, margin + 12, w_px - margin - 12, h_px - margin - 12], outline=(184, 109, 67, 60), width=1)
    
    if os.path.exists(dark_logo_path):
        logo = Image.open(dark_logo_path).convert('RGBA')
        lw, lh = logo.size
        target_h = int(220 * scale)
        target_w = int(lw * (target_h / lh))
        logo_res = logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
        logo_x = (w_px - target_w) // 2
        logo_y = int(115 * scale)
        im.paste(logo_res, (logo_x, logo_y), logo_res)
        
    try:
        f_eyebrow = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(13 * scale))
        f_main = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(27 * scale))
        f_sub = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(17 * scale))
        f_desc = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', int(12 * scale))
        f_card_label = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(10 * scale))
        f_card_val = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(12.5 * scale))
        f_footer = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', int(10 * scale))
    except:
        f_eyebrow = f_main = f_sub = f_desc = f_card_label = f_card_val = f_footer = ImageFont.load_default()
        
    y_text = int(390 * scale)
    
    eyebrow = "OFFICIAL ARCHITECTURAL & INTERIOR SPECIFICATIONS"
    bbox_e = draw.textbbox((0, 0), eyebrow, font=f_eyebrow)
    draw.text(((w_px - (bbox_e[2] - bbox_e[0])) // 2, y_text), eyebrow, fill=(206, 127, 83), font=f_eyebrow)
    
    y_text += int(30 * scale)
    title1 = "COMPLETE PRODUCT CATALOGUE"
    bbox_t1 = draw.textbbox((0, 0), title1, font=f_main)
    draw.text(((w_px - (bbox_t1[2] - bbox_t1[0])) // 2, y_text), title1, fill=(255, 255, 255), font=f_main)
    
    y_text += int(38 * scale)
    title2 = "ALL 18 ARCHITECTURAL COLLECTIONS • 2026 MASTER EDITION"
    bbox_t2 = draw.textbbox((0, 0), title2, font=f_sub)
    draw.text(((w_px - (bbox_t2[2] - bbox_t2[0])) // 2, y_text), title2, fill=(206, 127, 83), font=f_sub)
    
    y_text += int(32 * scale)
    draw.line([w_px // 2 - int(120 * scale), y_text, w_px // 2 + int(120 * scale), y_text], fill=(184, 109, 67), width=2)
    
    y_text += int(25 * scale)
    desc1 = "Modular Kitchens • Wardrobes • Bedrooms • TV Media Walls • Bar Lounges"
    desc2 = "Temple Sanctuaries • POP Ceilings • Crockery Units • Wall Panels"
    desc3 = "Wooden Flooring • Wall Fabric • Vinyl LVT/SPC • Paint Textures • Wood Polish"
    desc4 = "UPVC Fenestration • Mini Home Theaters • Architectural Lighting & Fixtures"
    for d in [desc1, desc2, desc3, desc4]:
        b = draw.textbbox((0, 0), d, font=f_desc)
        draw.text(((w_px - (b[2] - b[0])) // 2, y_text), d, fill=(210, 210, 210), font=f_desc)
        y_text += int(20 * scale)
        
    box_w = w_px - margin * 2 - int(40 * scale)
    box_x = margin + int(20 * scale)
    box_y = int(640 * scale)
    box_h = int(140 * scale)
    
    draw.rounded_rectangle([box_x, box_y, box_x + box_w, box_y + box_h], radius=int(10 * scale), fill=(24, 25, 29), outline=(184, 109, 67, 120), width=2)
    
    cw = box_w // 3
    draw.text((box_x + int(18 * scale), box_y + int(15 * scale)), "DIRECT STUDIO PHONE", fill=(206, 127, 83), font=f_card_label)
    draw.text((box_x + int(18 * scale), box_y + int(32 * scale)), PHONE_DISPLAY, fill=(255, 255, 255), font=f_card_val)
    
    draw.text((box_x + cw + int(15 * scale), box_y + int(15 * scale)), "OFFICIAL EMAIL", fill=(206, 127, 83), font=f_card_label)
    draw.text((box_x + cw + int(15 * scale), box_y + int(32 * scale)), EMAIL, fill=(255, 255, 255), font=f_card_val)
    
    draw.text((box_x + cw * 2 + int(15 * scale), box_y + int(15 * scale)), "OFFICIAL WEBSITE", fill=(206, 127, 83), font=f_card_label)
    draw.text((box_x + cw * 2 + int(15 * scale), box_y + int(32 * scale)), WEBSITE_DISPLAY, fill=(255, 255, 255), font=f_card_val)
    
    draw.line([box_x + int(15 * scale), box_y + int(60 * scale), box_x + box_w - int(15 * scale), box_y + int(60 * scale)], fill=(184, 109, 67, 60), width=1)
    draw.text((box_x + int(18 * scale), box_y + int(68 * scale)), "REGISTERED EXPERIENCE STUDIO ADDRESS", fill=(206, 127, 83), font=f_card_label)
    draw.text((box_x + int(18 * scale), box_y + int(86 * scale)), ADDRESS_LINE_1, fill=(230, 230, 230), font=f_desc)
    draw.text((box_x + int(18 * scale), box_y + int(106 * scale)), ADDRESS_LINE_2, fill=(230, 230, 230), font=f_desc)
    
    footer_text = "© 2026 CAPSULE COMPANY • YOUR SPACE MAKER • BENGALURU, KARNATAKA"
    b_foot = draw.textbbox((0, 0), footer_text, font=f_footer)
    draw.text(((w_px - (b_foot[2] - b_foot[0])) // 2, h_px - int(45 * scale)), footer_text, fill=(140, 140, 140), font=f_footer)
    
    return im

def create_table_of_contents_page(catalogues_info, width_pt=595.3, height_pt=841.9):
    """Creates a sophisticated Table of Contents page listing all 18 catalogue collections."""
    scale = 3
    w_px = int(width_pt * scale)
    h_px = int(height_pt * scale)
    
    im = Image.new('RGB', (w_px, h_px), (14, 15, 18))
    draw = ImageDraw.Draw(im)
    
    margin = 55
    draw.rectangle([margin, margin, w_px - margin, h_px - margin], outline=(184, 109, 67, 100), width=2)
    
    try:
        f_eyebrow = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(11 * scale))
        f_title = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(22 * scale))
        f_cat_num = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(10.5 * scale))
        f_cat_title = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(10 * scale))
        f_cat_desc = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', int(8.5 * scale))
        f_cat_pg = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', int(10 * scale))
        f_foot = ImageFont.truetype('C:\\Windows\\Fonts\\arial.ttf', int(9 * scale))
    except:
        f_eyebrow = f_title = f_cat_num = f_cat_title = f_cat_desc = f_cat_pg = f_foot = ImageFont.load_default()
        
    draw.text((margin + int(25 * scale), margin + int(20 * scale)), "CAPSULE COMPANY  •  CATALOGUE DIRECTORY", fill=(206, 127, 83), font=f_eyebrow)
    draw.text((margin + int(25 * scale), margin + int(38 * scale)), "TABLE OF CONTENTS", fill=(255, 255, 255), font=f_title)
    draw.line([margin + int(25 * scale), margin + int(72 * scale), w_px - margin - int(25 * scale), margin + int(72 * scale)], fill=(184, 109, 67, 140), width=2)
    
    y_start = margin + int(85 * scale)
    row_h = int(37 * scale)
    col_w = (w_px - margin * 2 - int(50 * scale)) // 2
    
    for i, cat in enumerate(catalogues_info):
        col_idx = i // 9
        row_idx = i % 9
        
        x = margin + int(20 * scale) + col_idx * (col_w + int(15 * scale))
        y = y_start + row_idx * row_h
        
        draw.rounded_rectangle([x, y, x + col_w, y + row_h - int(6 * scale)], radius=int(6 * scale), fill=(22, 24, 28), outline=(184, 109, 67, 60), width=1)
        draw.text((x + int(8 * scale), y + int(8 * scale)), f"{i+1:02d}", fill=(206, 127, 83), font=f_cat_num)
        
        pg_str = f"P. {cat['start_page']}–{cat['end_page']}"
        b_pg = draw.textbbox((0, 0), pg_str, font=f_cat_pg)
        pill_w = (b_pg[2] - b_pg[0]) + int(14 * scale)
        pill_x = x + col_w - pill_w - int(8 * scale)
        pill_y = y + int(5 * scale)
        pill_h = int(18 * scale)
        draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=int(4 * scale), fill=(35, 36, 42), outline=(184, 109, 67, 100), width=1)
        draw.text((pill_x + int(7 * scale), pill_y + int(3 * scale)), pg_str, fill=(206, 127, 83), font=f_cat_pg)
        
        max_title_w = pill_x - (x + int(30 * scale)) - int(6 * scale)
        title_text = cat['title'].upper()
        while draw.textbbox((0, 0), title_text, font=f_cat_title)[2] > max_title_w and len(title_text) > 5:
            title_text = title_text[:-2] + "…"
        draw.text((x + int(30 * scale), y + int(7 * scale)), title_text, fill=(255, 255, 255), font=f_cat_title)
        
        sub_text = cat['subtitle']
        while draw.textbbox((0, 0), sub_text, font=f_cat_desc)[2] > max_title_w and len(sub_text) > 5:
            sub_text = sub_text[:-2] + "…"
        draw.text((x + int(30 * scale), y + int(20 * scale)), sub_text, fill=(170, 170, 170), font=f_cat_desc)
        
    foot_text = f"CAPSULE COMPANY  •  CONTACT: {PHONE_DISPLAY}  •  {WEBSITE_DISPLAY}  •  {EMAIL}"
    b_f = draw.textbbox((0, 0), foot_text, font=f_foot)
    draw.text(((w_px - (b_f[2] - b_f[0])) // 2, h_px - margin - int(18 * scale)), foot_text, fill=(160, 160, 160), font=f_foot)
    
    return im

def process_all():
    os.makedirs('scratch/corrected_catalogues', exist_ok=True)
    
    light_logo_path, dark_logo_path = prepare_logos()
    print("Prepared logo variants.")
    
    # 1. Generate contact card image assets
    card_std_img = create_standard_contact_card(dark_logo_path)
    std_card_path = 'scratch/std_contact_card.png'
    card_std_img.save(std_card_path)
    
    card_tall_img = create_tall_contact_card(dark_logo_path)
    tall_card_path = 'scratch/tall_contact_card.png'
    card_tall_img.save(tall_card_path)
    
    brochure_closing_img = create_brochure_closing_page(light_logo_path)
    brochure_closing_path = 'scratch/brochure_closing_page.png'
    brochure_closing_img.save(brochure_closing_path)
    
    print("Generated all contact visual templates.")
    
    catalogues_info = []
    current_page_num = 3  # Page 1: Master Cover, Page 2: TOC
    
    # 2. Process each of the 18 catalogues
    for idx, cat_def in enumerate(CATALOGUES_DEF):
        orig_filename = cat_def['filename']
        print(f"\n[{idx+1}/18] Processing {orig_filename}...")
        
        doc = fitz.open(orig_filename)
        num_pages = len(doc)
        
        # A. Redact and replace any text mentions of "Capsule Interiors" across all pages
        for pno in range(num_pages):
            p = doc[pno]
            r_list = p.search_for('Capsule Interiors')
            if r_list:
                if len(r_list) == 1:
                    r = r_list[0]
                    p.add_redact_annot(r, fill=(0.07, 0.07, 0.09))
                    p.apply_redactions()
                    p.insert_text((r.x0, r.y1 - 2.5), 'Capsule Company', fontname='helv', fontsize=8.5, color=(0.85, 0.85, 0.85))
                elif len(r_list) == 2:
                    # Split across lines: r_list[0] is Capsule, r_list[1] is Interiors
                    r_int = r_list[1]
                    p.add_redact_annot(r_int, fill=(0.07, 0.07, 0.09))
                    p.apply_redactions()
                    p.insert_text((r_int.x0, r_int.y1 - 2.5), 'Company', fontname='helv', fontsize=8.5, color=(0.85, 0.85, 0.85))
                    
        # B. Last Page Correction: Standardized Capsule Company contact details
        last_page = doc[-1]
        
        if cat_def['is_landscape']:
            # Landscape brochure (960 x 540)
            # Replace entire last page with the dedicated closing & contact page
            last_page.insert_image(fitz.Rect(0, 0, 960, 540), filename=brochure_closing_path)
            
            # Clickable links
            # Phone link (box 1)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(50, 220, 310, 310), 'uri': 'tel:+919187924723'})
            # Email link (box 2)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(325, 220, 635, 310), 'uri': 'mailto:works.capsule@gmail.com'})
            # Website link (box 3)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(650, 220, 910, 310), 'uri': 'https://CapsuleCompany.in'})
            
            # Searchable text layer (invisible)
            last_page.insert_text((50, 50), f"{COMPANY_NAME} {PHONE} {EMAIL} {WEBSITE} {ADDRESS_FULL}", fontsize=8, render_mode=3)
            
        elif cat_def['id'] in ['kids_bed', 'concrete_unit']:
            # Kids Bed and Concrete Unit: Use tall luxury card covering y=225 to 785
            # Redact old text
            for kw in ['DIRECT CONSULTATION', '+91 96062 03333', '96062 03333', 'contact@capsulecompany.in', 'www.capsulecompany.in', '@capsule_interiors', 'Bengaluru, Karnataka', 'Bangalore, Karnataka']:
                for r in last_page.search_for(kw):
                    last_page.add_redact_annot(r, fill=None)
            last_page.apply_redactions()
            
            target_rect = fitz.Rect(25, 225, 570, 785)
            last_page.insert_image(target_rect, filename=tall_card_path)
            
            # Clickable links
            # Phone link (col 1)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(48, 362, 210, 435), 'uri': 'tel:+919187924723'})
            # Email link (col 2)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(220, 362, 382, 435), 'uri': 'mailto:works.capsule@gmail.com'})
            # Website link (col 3)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(392, 362, 550, 435), 'uri': 'https://CapsuleCompany.in'})
            
            # Searchable text layer (invisible)
            last_page.insert_text((50, 50), f"{COMPANY_NAME} {PHONE} {EMAIL} {WEBSITE} {ADDRESS_FULL}", fontsize=8, render_mode=3)
            
        else:
            # Standard Portrait A4 (595 x 842)
            bg_col = (18/255, 15/255, 13/255) if idx >= 9 else (7/255, 7/255, 8/255)
            
            if cat_def['id'] == 'temple':
                target_rect = fitz.Rect(25, 405, 570, 785)
                redact_box = fitz.Rect(25, 415, 570, 785)
                last_page.add_redact_annot(redact_box, fill=bg_col)
                last_page.apply_redactions()
            elif idx >= 9:
                target_rect = fitz.Rect(25, 405, 570, 785)
                redact_box = fitz.Rect(25, 400, 570, 785)
                last_page.add_redact_annot(redact_box, fill=bg_col)
                last_page.apply_redactions()
            else:
                target_rect = fitz.Rect(25, 405, 570, 785)
                
            # Place standard contact card
            last_page.insert_image(target_rect, filename=std_card_path)
            
            # Clickable links
            phone_rect = fitz.Rect(target_rect.x0 + 20, target_rect.y0 + 105, target_rect.x0 + 180, target_rect.y0 + 185)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': phone_rect, 'uri': 'tel:+919187924723'})
            
            email_rect = fitz.Rect(target_rect.x0 + 195, target_rect.y0 + 105, target_rect.x0 + 355, target_rect.y0 + 185)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': email_rect, 'uri': 'mailto:works.capsule@gmail.com'})
            
            web_rect = fitz.Rect(target_rect.x0 + 370, target_rect.y0 + 105, target_rect.x0 + 530, target_rect.y0 + 185)
            last_page.insert_link({'kind': fitz.LINK_URI, 'from': web_rect, 'uri': 'https://CapsuleCompany.in'})
            
            last_page.insert_text((50, 50), f"{COMPANY_NAME} {PHONE} {EMAIL} {WEBSITE} {ADDRESS_FULL}", fontsize=8, render_mode=3)
            
        corrected_path = f"scratch/corrected_catalogues/{orig_filename}"
        doc.save(corrected_path)
        doc.close()
        
        # Overwrite workspace original file
        shutil.copyfile(corrected_path, orig_filename)
        
        start_p = current_page_num
        end_p = current_page_num + num_pages - 1
        current_page_num = end_p + 1
        
        catalogues_info.append({
            'id': cat_def['id'],
            'title': cat_def['title'],
            'subtitle': cat_def['subtitle'],
            'filename': orig_filename,
            'corrected_path': corrected_path,
            'pages_count': num_pages,
            'start_page': start_p,
            'end_page': end_p,
            'is_landscape': cat_def['is_landscape']
        })
        print(f"  -> Successfully updated {orig_filename}: {num_pages} pages (pp. {start_p}-{end_p} in master).")

    print("\nAll 18 individual catalogues updated and verified.")
    
    # 3. Create Master Cover Page PDF
    print("\nGenerating Master Cover Page...")
    cover_img = create_master_cover_page(dark_logo_path)
    cover_img_path = 'scratch/master_cover.png'
    cover_img.save(cover_img_path)
    
    doc_cover = fitz.open()
    p_cover = doc_cover.new_page(width=595.3, height=841.9)
    p_cover.insert_image(fitz.Rect(0, 0, 595.3, 841.9), filename=cover_img_path)
    # Searchable text layer
    p_cover.insert_text((70, 70), f"{COMPANY_NAME} COMPLETE PRODUCT CATALOGUE {PHONE} {EMAIL} {WEBSITE} {ADDRESS_FULL}", fontsize=8, render_mode=3)
    # Clickable links on cover
    p_cover.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(85, 640, 230, 780), 'uri': 'tel:+919187924723'})
    p_cover.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(230, 640, 380, 780), 'uri': 'mailto:works.capsule@gmail.com'})
    p_cover.insert_link({'kind': fitz.LINK_URI, 'from': fitz.Rect(380, 640, 520, 780), 'uri': 'https://CapsuleCompany.in'})
    cover_pdf_path = 'scratch/page_01_cover.pdf'
    doc_cover.save(cover_pdf_path)
    
    # 4. Create Table of Contents Page PDF
    print("Generating Table of Contents Page...")
    toc_img = create_table_of_contents_page(catalogues_info)
    toc_img_path = 'scratch/master_toc.png'
    toc_img.save(toc_img_path)
    
    doc_toc = fitz.open()
    p_toc = doc_toc.new_page(width=595.3, height=841.9)
    p_toc.insert_image(fitz.Rect(0, 0, 595.3, 841.9), filename=toc_img_path)
    # Searchable text layer
    p_toc.insert_text((60, 60), f"{COMPANY_NAME} TABLE OF CONTENTS {PHONE} {EMAIL} {WEBSITE} {ADDRESS_FULL}", fontsize=8, render_mode=3)
    toc_pdf_path = 'scratch/page_02_toc.pdf'
    doc_toc.save(toc_pdf_path)
    
    # 5. Combine all into master PDF: Capsule_Company_Complete_Product_Catalogue_Final.pdf
    print("\nMerging into Capsule_Company_Complete_Product_Catalogue_Final.pdf...")
    master_doc = fitz.open()
    
    # Insert Cover (p. 1)
    master_doc.insert_pdf(doc_cover)
    # Insert TOC (p. 2)
    master_doc.insert_pdf(doc_toc)
    
    toc_outline = [
        [1, "Capsule Company Master Cover", 1],
        [1, "Table of Contents", 2]
    ]
    
    # Insert each catalogue
    for cat in catalogues_info:
        c_doc = fitz.open(cat['corrected_path'])
        master_doc.insert_pdf(c_doc)
        toc_outline.append([1, f"{cat['title']}", cat['start_page']])
        
    master_doc.set_toc(toc_outline)
    
    # Add internal jump links on Page 2 (Table of Contents page) now that all pages exist
    p_toc_master = master_doc[1]
    margin = 55
    scale_factor = 595.3 / (595.3 * 3)
    y_start_pt = (55 + 85 * 3) * scale_factor
    row_h_pt = (37 * 3) * scale_factor
    col_w_pt = ((595.3 * 3 - 110 - 50 * 3) // 2) * scale_factor
    
    for i, cat in enumerate(catalogues_info):
        col_idx = i // 9
        row_idx = i % 9
        x_pt = (55 + 20 * 3 + col_idx * (col_w_pt / scale_factor + 15 * 3)) * scale_factor
        y_pt = y_start_pt + row_idx * row_h_pt
        btn_rect = fitz.Rect(x_pt, y_pt, x_pt + col_w_pt, y_pt + row_h_pt - 6)
        p_toc_master.insert_link({
            'kind': fitz.LINK_GOTO,
            'from': btn_rect,
            'page': cat['start_page'] - 1
        })
    
    output_filename = "Capsule_Company_Complete_Product_Catalogue_Final.pdf"
    master_doc.save(output_filename, deflate=True)
    print(f"\n Master PDF successfully created: {output_filename}")
    print(f"Total Pages: {len(master_doc)}")
    
    # Mirror to public/ and dist/
    for dest_dir in ['public', 'dist']:
        if os.path.exists(dest_dir):
            dest_file = os.path.join(dest_dir, output_filename)
            master_doc.save(dest_file, deflate=True)
            print(f"Mirrored to {dest_file}")

if __name__ == '__main__':
    process_all()
