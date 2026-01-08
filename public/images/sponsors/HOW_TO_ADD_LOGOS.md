# How to Add Sponsor Logos

The sponsors page is now set up to display logos! Here's how to add them:

## Quick Steps

1. **Download logos** from each company's official website
2. **Save them** in this directory (`public/images/sponsors/`)
3. **Name them** exactly as listed below
4. **Format**: PNG with transparent background (recommended)

## Logo File Names

Save logos with these exact names:

### 2024-2025 Sponsors:
- `bobcat-logo.png`
- `argosy-foundation-logo.png`
- `afi-systems-logo.png`
- `salant-foundation-logo.png`
- `gene-haas-foundation-logo.png`
- `john-deere-logo.png`
- `rtx-logo.png`
- `nasa-logo.png`
- `synchrony-logo.png`

### 2025-2026 Sponsors:
- `bobcat-logo.png` (same as above)
- `salant-foundation-logo.png` (same as above)
- `gene-haas-foundation-logo.png` (same as above)
- `nasa-logo.png` (same as above)
- `kimley-horn-logo.png`
- `afi-systems-logo.png` (same as above)

## Where to Find Logos

### Official Sources:
1. **NASA**: https://www.nasa.gov/multimedia/imagegallery/logos.html
2. **John Deere**: https://www.deere.com/en/our-company/news-and-media/press-kits/
3. **RTX**: https://www.rtx.com/news/press-kit
4. **Bobcat**: https://www.bobcat.com/company/media-resources
5. **Gene Haas Foundation**: https://ghaasfoundation.org (contact for logo)
6. **Synchrony**: https://www.synchrony.com/about-us/media-resources.html
7. **Kimley-Horn**: https://www.kimley-horn.com/about/media-kit/ (may need to contact)

### For Foundations:
- **Argosy Foundation**: Contact through their website
- **Salant Family Foundation**: Contact directly for logo

### For Smaller Companies:
- **AFI Systems**: Contact company directly for logo

## Logo Specifications

- **Format**: PNG (preferred) or SVG
- **Background**: Transparent (preferred) or white
- **Size**: 300-500px width recommended
- **Aspect Ratio**: Maintain original proportions
- **Quality**: High resolution for web (72-150 DPI)

## What Happens If Logo Is Missing?

The website will automatically:
- Show the company name as text if the logo file is missing
- Display a loading state while checking for the logo
- Gracefully fall back to text if the image fails to load

## Testing

After adding logos:
1. Run `npm run dev` to test locally
2. Check the sponsors page at `/sponsors`
3. Verify all logos display correctly
4. Test on mobile devices

## Notes

- Logos will appear in grayscale by default
- They become colored on hover
- Clickable logos link to sponsor websites
- All logos are optimized by Next.js automatically

