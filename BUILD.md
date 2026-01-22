# Build Instructions for Decky Recorder

## Prerequisites

- Node.js 16+ and pnpm installed
- For Steam Deck: access to desktop mode

## Building the Plugin

### 1. Clean Install Dependencies

```bash
# Remove old dependencies
rm -rf node_modules pnpm-lock.yaml

# Install fresh dependencies
pnpm install
```

### 2. Build

```bash
# Build the plugin
pnpm run build
```

This will:
- Clean the `dist/` directory
- Compile TypeScript to JavaScript
- Bundle everything into a single `dist/index.js` file
- **Important:** Create a single bundle file (no chunk files!)

### 3. Verify Build

Check that the build succeeded:

```bash
ls -lh dist/
# Should show only: index.js (no chunk-*.js files!)
```

## Installing on Steam Deck

### Method 1: Development Mode

```bash
# Navigate to Decky plugins directory
cd ~/homebrew/plugins/decky-recorder

# Pull latest changes
git pull origin claude/fix-video-corruption-YbKtS

# Rebuild
pnpm install
pnpm run build

# Restart Decky Loader
sudo systemctl restart plugin_loader
```

### Method 2: Fresh Install

1. Remove old plugin via Decky Loader UI
2. Install from custom URL or local file
3. Point to your branch: `claude/fix-video-corruption-YbKtS`

## Troubleshooting

### "frontend_bundle not OK" Error

This means the plugin wasn't rebuilt after code changes. Solution:

```bash
# Clean everything
rm -rf dist node_modules pnpm-lock.yaml

# Reinstall and rebuild
pnpm install
pnpm run build

# Verify no chunk files exist
ls dist/
# Should only show: index.js
```

### Chunk Files Still Generated

If you see `chunk-*.js` files in `dist/`, the rollup config isn't working:

```bash
# Check rollup.config.js has:
# - inlineDynamicImports: true
# - compact: true

# Rebuild with verbose output
pnpm run build --verbose
```

### Import Errors

If you see errors about missing imports:

1. Check `decky-frontend-lib` version is `^4.0.0`
2. Check no `Navigation` import exists (not in v4.0.0)
3. Rebuild after any code changes

## Build Output

Successful build should show:

```
dist/index.js - XXX KB
```

**No other files should be in dist/**

## Version

Current version: **0.5.0**

- Fixed video corruption (MP4 muxer + faststart)
- Updated for new Steam Deck UI
- Fixed frontend bundle issues
- Simplified API usage
