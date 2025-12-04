# Unblocked Games — Collection of Small Browser-Based Games

```
Please Note That This Website/GitHub Pages Doesn't Possess Responsibility Over Any Games Listed Here. We Only Host Them For Free & Public Usage.
```

```
Also Please Note That Some Games Might Not Work Properly On Mobile Devices, Older Browsers, Certain Operating Systems, Or Other Reasons.
```
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

## Contributing

If you add a new game file under `codepen.io/`, please update `index.html` to add a link to it.

## License

Check repository root for a `LICENSE` file. If none, assume the author/owner's default (contact repository owner).

---
Updated: December 4, 2025
