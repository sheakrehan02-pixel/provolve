# Quick Start Guide

## Step 1: Install Node.js (if not already installed)

1. Download Node.js from: https://nodejs.org
2. Install the LTS version
3. Close and reopen your terminal

## Step 2: Verify Installation

Run this command to check if npm is installed:
```bash
npm --version
```

If you see a version number, you're good to go!

## Step 3: Install Dependencies and Run

Once npm is installed, run these commands:

```bash
cd /Users/Rehansheak/blog/provolve
npm install
npm run dev
```

Your blog will be available at: http://localhost:4321

## Troubleshooting

**If you get "command not found: npm":**
- Make sure Node.js is installed
- Close and reopen your terminal
- Try running: `source ~/.zshrc` (if using zsh)
- Or: `source ~/.bash_profile` (if using bash)

