# Shell Shockers Local Checklist

## What was fixed so `shell.html` can open more cleanly

- Added local CSS alias files so the existing versioned stylesheets resolve.
- Added a fallback `src/shellshock.js` shim so the page can render a local diagnostic/menu shell instead of crashing on a missing runtime.
- Added placeholder changelog JSON files so the initial changelog fetch does not fail immediately.
- Hardened `shell.html` so missing remote scripts or missing local script loads fall back more gracefully.

## What is still missing for a real playable build

- Core runtime bundle: `src/shellshock.js` in this repo is only a stub, not the original game engine.
- Backend services: gameplay depends on websocket/services endpoints such as `wss://<host>/services/`.
- Auth stack: Firebase auth and related account flows still require live hosted configuration and backend support.
- Commerce/inventory: shop, account, inventory, rewards, VIP, and redemption flows depend on server-side APIs and data.
- Media/content folders referenced by `shell.html` that are still absent:
  - `video/`
  - `maps/`
- Referenced local image assets still missing:
  - `img/home.png`
  - `img/friends.png`
  - `img/feedback.png`
  - `img/settings.png`
  - `img/egg_icon.png`
  - `img/attention_indicator.png`
  - `img/ico_arrowLeft.png`
  - `img/ico_arrowRight.png`
  - `img/kotc/crown.svg`
  - `img/kotc/kotc-crown-indicator.svg`
  - `img/BlueWizard-Logo-min.png`

## How to run locally

- Prefer serving the folder over HTTP instead of opening `shell.html` with `file://`.
- Simple option:

```bash
cd /Users/aparikh1/Documents/games
python3 -m http.server 8000
```

- Then open `http://localhost:8000/shell.html`.

## What to use instead if you want the real game

- Use `shell-launcher.html` in this repo, which redirects to the live Shell Shockers site.
