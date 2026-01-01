# How to Open Terminal and Run Your Blog

## Step 1: Open Terminal in Cursor

**Option A: Keyboard Shortcut**
- Press: `Ctrl + ~` (Windows/Linux) or `Cmd + ~` (Mac)
- This opens the integrated terminal at the bottom of Cursor

**Option B: Menu**
- Go to: `Terminal` → `New Terminal` in the top menu

**Option C: Command Palette**
- Press: `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
- Type: "Terminal: Create New Terminal"
- Press Enter

## Step 2: Navigate to Your Project

Once the terminal is open, type these commands one by one:

```bash
cd /Users/Rehansheak/blog/provolve
```

Press Enter after typing each command.

## Step 3: Verify npm is Working

Check that npm is installed:

```bash
npm --version
```

You should see a version number (like `10.2.3`).

## Step 4: Install Dependencies

```bash
npm install
```

This will take a minute or two - it's downloading all the required packages.

## Step 5: Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  ➜  Local:   http://localhost:4321/
  ➜  Network: use --host to expose
```

## Step 6: View Your Blog

Open your web browser and go to:
**http://localhost:4321**

Your blog should be running! 🎉

## To Stop the Server

Press `Ctrl + C` in the terminal to stop the development server.

