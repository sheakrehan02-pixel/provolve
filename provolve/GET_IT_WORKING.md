# Get Provolve Working — Step by Step

## 1. Local: make sure the site builds

```bash
cd /Users/Rehansheak/blog/provolve
npm install
npm run build
```

You should see `dist/` created with `dist/index.html`.  
If this fails, fix the build errors first.

---

## 2. Netlify: set build and domain

- **Site** → **Site configuration** → **Build & deploy** → **Build settings**
  - **Build command:** `npm run build` (or leave empty; `netlify.toml` sets it)
  - **Publish directory:** `dist`
- **Domain management**
  - Add custom domain: `provolve.net`
  - Point your DNS for `provolve.net` to Netlify (as Netlify shows)

The repo has a `netlify.toml` that uses `dist` as publish dir.  
If your Netlify “Base directory” is set (e.g. `provolve`), keep it; otherwise leave it blank.

---

## 3. Push to GitHub (auth)

Git needs to know you’re **sheakrehan02-pixel** with a **token**, not a password.

**Option A — Use a token in the URL once**

1. GitHub → Settings → Developer settings → Personal access tokens  
   Create a token (classic, **repo** scope). Copy it.
2. In terminal:

```bash
cd /Users/Rehansheak/blog/provolve
git remote set-url origin https://sheakrehan02-pixel:PASTE_TOKEN_HERE@github.com/sheakrehan02-pixel/provolve.git
git push origin main
git remote set-url origin https://github.com/sheakrehan02-pixel/provolve.git
```

**Option B — GitHub CLI**

```bash
gh auth login
# Sign in as sheakrehan02-pixel in the browser

cd /Users/Rehansheak/blog/provolve
git push origin main
```

---

## 4. What “working” means

| Goal               | How to check |
|--------------------|--------------|
| Build works        | `npm run build` finishes, `dist/index.html` exists |
| Site on Netlify    | Netlify deploy finishes, URL (e.g. `*.netlify.app` or `provolve.net`) loads |
| Push works         | `git push origin main` succeeds and latest commit appears on GitHub |

---

## 5. If something still doesn’t work

- **Build fails:**  
  Copy the exact error from the terminal and fix the error message (or ask with that error).
- **Netlify 404 / blank:**  
  Confirm Publish directory is `dist` and the last deploy used that build.
- **Push 403 / “invalid token”:**  
  Use a new token, don’t share it, and use Option A or B above once.
