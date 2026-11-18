"""Generate the site-wide Open Graph banner as a static PNG.

Usage: python3 scripts/generate-og-image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og-image.png"
HERO = ROOT / "public" / "bonanza-hero.png"
FONT = Path.home() / ".local/share/fonts/Inter-VariableFont_opsz,wght.ttf"

WIDTH, HEIGHT = 1200, 630
SCALE = 2
WHITE = "#ffffff"
INK = "#0a0a0a"
MINT = "#1de9a0"
BODY = "#6b6b6b"


def font(size: int, variation: str = "Bold") -> ImageFont.FreeTypeFont:
    result = ImageFont.truetype(str(FONT), size * SCALE)
    result.set_variation_by_name(variation)
    return result


def px(value: int) -> int:
    return value * SCALE


def main() -> None:
    image = Image.new("RGB", (px(WIDTH), px(HEIGHT)), WHITE)
    draw = ImageDraw.Draw(image)

    # Brand row
    badge = (px(80), px(66), px(126), px(112))
    draw.rectangle(badge, fill=MINT, outline=INK, width=px(3))
    draw.text(
        (px(103), px(89)),
        "B",
        font=font(30),
        fill=INK,
        anchor="mm",
    )
    draw.text((px(146), px(89)), "BONANZA NARAYAN", font=font(30), fill=INK, anchor="lm")

    # Headline
    draw.text((px(76), px(178)), "FULL-STACK", font=font(98), fill=INK)

    highlight = (px(76), px(296), px(560), px(408))
    draw.rectangle(
        (highlight[0] + px(10), highlight[1] + px(10),
         highlight[2] + px(10), highlight[3] + px(10)),
        fill=INK,
    )
    draw.rectangle(highlight, fill=MINT, outline=INK, width=px(4))
    draw.text((px(100), px(352)), "ENGINEER", font=font(92), fill=INK, anchor="lm")

    draw.text(
        (px(80), px(452)),
        "React · Next.js · APIs · SaaS · PWA",
        font=font(30, "Medium"),
        fill=BODY,
    )

    tag = (px(80), px(518), px(410), px(566))
    draw.rectangle(
        (tag[0] + px(7), tag[1] + px(7), tag[2] + px(7), tag[3] + px(7)),
        fill=INK,
    )
    draw.rectangle(tag, fill=INK)
    draw.text(
        (px(100), px(542)),
        "PORTFOLIO  /  2026",
        font=font(22, "SemiBold"),
        fill=MINT,
        anchor="lm",
    )

    # Portrait panel with hard neo-brutalist shadow
    panel = (px(800), px(96), px(1130), px(552))
    draw.rectangle(
        (panel[0] + px(12), panel[1] + px(12), panel[2] + px(12), panel[3] + px(12)),
        fill=INK,
    )
    draw.rectangle(panel, fill=WHITE, outline=INK, width=px(5))

    with Image.open(HERO) as hero_source:
        hero = hero_source.convert("RGB")
        crop = hero.crop((140, 40, 980, 1000))
        portrait = ImageOps.fit(
            crop,
            (panel[2] - panel[0] - px(10), panel[3] - panel[1] - px(10)),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.35),
        )
    image.paste(portrait, (panel[0] + px(5), panel[1] + px(5)))
    draw.rectangle(panel, outline=INK, width=px(5))

    # Bottom accent bar
    draw.rectangle((0, px(HEIGHT - 16), px(WIDTH), px(HEIGHT)), fill=MINT)

    image.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS).save(OUTPUT, optimize=True)
    print(f"Wrote {OUTPUT.relative_to(ROOT)} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
