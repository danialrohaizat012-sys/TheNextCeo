V0.2.1 ICON FIX

Cause:
The previous PWA icon was cropped from a large promotional collage, and the crop coordinates selected the wrong icon artwork.

Fix:
- Rebuilt PWA icon directly from Kelantan Next CEO brand-logo.png
- Replaced 192x192, 512x512 and Apple Touch icon
- Bumped service-worker cache version so devices can fetch the new icon

If the old icon still appears:
1. Uninstall the previously installed PWA from the phone.
2. Clear site data/cache for the deployed domain.
3. Deploy V0.2.1.
4. Reopen site and install again.
