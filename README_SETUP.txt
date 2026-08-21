KELANTAN NEXT CEO ONLINE V0.1
Google Login + Private Multiplayer Rooms

SETUP FIREBASE (Spark/free boleh untuk testing):
1. Firebase Console > Create Project.
2. Authentication > Sign-in method > Google > Enable.
3. Firestore Database > Create database.
4. Project Settings > Your apps > Add Web App.
5. Copy firebaseConfig ke firebase-config.js.
6. Firestore > Rules > paste kandungan firestore.rules > Publish.
7. Authentication > Settings > Authorized domains:
   - localhost (untuk local dev)
   - domain GitHub Pages / Firebase Hosting anda.
8. Deploy folder ini ke Firebase Hosting / GitHub Pages / Netlify.
   Google login biasanya TIDAK sesuai diuji hanya dengan double-click file://index.html.

MULTIPLAYER V0.1:
- Google Login
- Create private room
- 6-character room code
- Join room
- Lobby
- Host starts game
- Realtime players
- Synced turn / market / dice / movement
- Synced cash / debt / business / staff / manager
- Bank loans
- Basic cash deal between players
- Host-resolved cashflow

IMPORTANT:
Rules ini prototype. Sebelum public launch, move important financial/game mutations
to trusted server logic / Cloud Functions for stronger anti-cheat.
