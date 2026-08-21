KELANTAN NEXT CEO ONLINE V0.2 — MOBILE/PWA EDITION

Upgrade:
- New game logo assets
- PWA icons 192 / 512 + Apple Touch icon
- Animated splash screen
- Install App prompt
- Phone-first responsive UI
- Safe-area support for iPhone notch/home indicator
- Horizontal mobile action dock
- Mobile tabs for Market / Founders / Portfolio / Feed
- Larger touch targets and 16px mobile form inputs
- Existing Google Login + Firebase realtime rooms retained

Firebase setup:
1. Create Firebase project (Spark/free is enough for initial testing).
2. Enable Authentication > Google.
3. Create Firestore.
4. Paste your Web App config into firebase-config.js.
5. Publish firestore.rules.
6. Add your deployed domain to Authentication > Authorized domains.
7. Deploy this folder to Firebase Hosting / GitHub Pages / Netlify.
8. Open on phone and use "Install App" / Add to Home Screen.

For public/commercial launch:
- Harden Firestore rules.
- Move sensitive mutations to trusted server logic / Cloud Functions.
- Add proper deal accept/reject/counter system and reconnect handling.
