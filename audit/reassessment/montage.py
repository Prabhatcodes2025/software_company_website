from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).parent
groups = {
    "desktop-overview": ("desktop", ["home", "services", "industries", "case-studies", "about", "insights", "career", "contact"], 3, 1350, 420),
    "mobile-overview": ("mobile", ["home", "services", "industries", "case-studies", "about", "insights", "career", "contact"], 4, 1450, 300),
    "desktop-services": ("desktop", ["services--web-development", "services--mobile-app-development", "services--custom-software-development", "services--ai-development", "services--ai-automation", "services--ui-ux-design", "services--ecommerce-development", "services--seo", "services--digital-marketing", "services--api-integrations"], 4, 1400, 340),
    "desktop-cases": ("desktop", ["case-studies--ongole-property", "case-studies--naystrip", "case-studies--mozno-wealth", "case-studies--snow-feather-adventure", "case-studies--rs-constructions", "case-studies--continental-mercantile"], 3, 1500, 420),
    "mobile-cases": ("mobile", ["case-studies--ongole-property", "case-studies--naystrip", "case-studies--mozno-wealth", "case-studies--snow-feather-adventure", "case-studies--rs-constructions", "case-studies--continental-mercantile"], 3, 1650, 300),
}

for name, (device, files, columns, top, width) in groups.items():
    margin, label_height, gap = 20, 42, 20
    tiles = []
    for file in files:
        with Image.open(root / "screenshots" / device / f"{file}.jpg") as screenshot:
            image = screenshot.crop((0, 0, screenshot.width, min(top, screenshot.height)))
            height = round(image.height * width / image.width)
            image = image.resize((width, height), Image.Resampling.LANCZOS)
            tiles.append((file, image))
    tile_height = max(image.height for _, image in tiles) + label_height
    rows = (len(tiles) + columns - 1) // columns
    canvas = Image.new("RGB", (margin * 2 + columns * width + (columns - 1) * gap, margin * 2 + rows * tile_height + (rows - 1) * gap), "#ddd8ce")
    draw = ImageDraw.Draw(canvas)
    for index, (label, image) in enumerate(tiles):
        x = margin + (index % columns) * (width + gap)
        y = margin + (index // columns) * (tile_height + gap)
        draw.text((x, y + 8), label, fill="#102b29")
        canvas.paste(image, (x, y + label_height))
    canvas.save(root / f"{name}.jpg", quality=85)
