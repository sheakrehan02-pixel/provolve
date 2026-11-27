# Setting up sign-in for Rehan's Thoughts

The page at `docs/thoughts.html` stores posts in Firebase (free tier is plenty).
Only `sheak.rehan02@gmail.com` and `rehan.renks@gmail.com` can publish, edit or delete.
That's enforced by Firebase on the server, not by the page, so nobody can get around it.

## One-time setup (about 10 minutes)

1. Go to https://console.firebase.google.com and click **Create a project**. Any name works, e.g. `rehans-thoughts`. You can turn Google Analytics off.
2. **Turn on Google sign-in:** Build → Authentication → Get started → Sign-in method → Google → Enable → Save.
3. **Allow your domain:** still in Authentication, open Settings → Authorized domains → Add domain → `provolve.net`.
4. **Create the database:** Build → Firestore Database → Create database → pick a location near you → start in **production mode**.
5. **Lock it down:** in Firestore, open the **Rules** tab, delete what's there, paste in everything from `firestore.rules` (in this repo), and click **Publish**.
6. **Connect the page:** Project settings (gear icon) → Your apps → click the `</>` web icon → register the app (no hosting needed). Firebase shows a `firebaseConfig` block. Copy `apiKey`, `authDomain`, `projectId` and `appId` into the `firebaseConfig` near the bottom of `docs/thoughts.html`.

These config values are meant to be public. They identify the project; they don't grant access. The rules in step 5 do the protecting.

## Writing

Open provolve.net/thoughts.html, click **Sign in** at the bottom, and pick one of your two Google accounts.
Then click **Write a new thought**. Whatever you publish takes the No. 1 spot, and the previous one moves into "Former No. 1s".
You can edit or delete any post while signed in.
