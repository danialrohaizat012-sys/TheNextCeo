KELANTAN NEXT CEO ONLINE V0.5.1 — CREATE ROOM FIX

This build adds:
- Proper try/catch around Create Room and Join Room.
- Visible ROOM SERVER diagnostics.
- Verification that both room and host player documents were created.
- Firestore listener errors now show the exact Firebase error.
- Simplified Firestore rules for private playtesting.

IMPORTANT — DO THESE TWO FIREBASE SETTINGS:

1) Firebase Console > Authentication > Sign-in method
   Anonymous = ENABLED

2) Firebase Console > Firestore Database > Rules
   Replace existing rules with firestore.rules from THIS V0.5.1 folder.
   Then click PUBLISH.

The V0.5.1 rules intentionally allow any Firebase-authenticated guest to read/write
game rooms during private testing. They are simple so multiplayer works first.

Before a public/commercial launch, tighten the rules and move critical game actions
to trusted server-side logic.

TEST:
- Deploy V0.5.1
- Enter nickname
- ENTER THE MARKET
- CREATE PRIVATE ROOM

If it still fails, the Online Lobby will now show an exact code such as:
permission-denied
unauthenticated
unavailable

Send that exact code and it can be fixed immediately.
