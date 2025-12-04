# games — Collection of small browser games

This repository contains a collection of small HTML/JS games (originally sourced/ported from CodePen) and a single `index.html` that links to each game.

Live site (GitHub Pages): https://dev-ananta.github.io/games/

## Structure

- `index.html` — Landing page that links to each game.
- `codepen.io/` — Folder containing individual game HTML files and assets.

You can open any game by visiting `index.html` and clicking the game link, or by opening the specific file under `codepen.io/`.

## How to run locally

Easiest (open in browser):

1. In Finder/Explorer open `index.html` directly (works for most games).

Better (serves files over HTTP — recommended):

If you have Python 3 installed, from the repository root run:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/ in your browser
```

Or with Node (if you have `http-server`):

```bash
npx http-server -p 8000
# then open http://localhost:8000/
```

## Notes & fixes applied

- `index.html` links were previously malformed (plain text entries pointing to `dev-ananta.github.io/...`). Those have been replaced with correct relative links to the files under `codepen.io/` so the site works on GitHub Pages and when served locally.
- Filenames in `codepen.io/` were verified and used as-is (e.g. `tic-tac-toe-2p.html`, `memory-game-pretty.html`).

## Contributing

If you add a new game file under `codepen.io/`, please update `index.html` to add a link to it.

## License

Check repository root for a `LICENSE` file. If none, assume the author/owner's default (contact repository owner).

---
Updated: December 4, 2025
