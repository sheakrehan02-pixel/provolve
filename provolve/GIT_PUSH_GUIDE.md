# How to Push to GitHub

Your code has been committed successfully! However, you need to authenticate with GitHub to push.

## Option 1: Use Personal Access Token (Recommended)

1. **Generate a Personal Access Token on GitHub:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "Provolve Blog"
   - Select scopes: Check `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Push using the token:**
   ```bash
   cd /Users/Rehansheak/blog/provolve
   git push -u origin main
   ```
   
   When prompted:
   - Username: `sheakrehan02-pixel`
   - Password: **Paste your token** (not your GitHub password)

## Option 2: Use SSH (Alternative)

1. **Switch to SSH remote:**
   ```bash
   cd /Users/Rehansheak/blog/provolve
   git remote set-url origin git@github.com:sheakrehan02-pixel/provolve.git
   git push -u origin main
   ```

   (This requires SSH keys to be set up on GitHub)

## Option 3: Use GitHub CLI

If you have GitHub CLI installed:
```bash
gh auth login
cd /Users/Rehansheak/blog/provolve
git push -u origin main
```

## Current Status

✅ Git repository initialized
✅ All files committed
✅ Remote added: https://github.com/sheakrehan02-pixel/provolve.git
⏳ Need to authenticate to push

