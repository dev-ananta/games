# Escape Road

A web-based collection of games and interactive experiences, featuring the Unity WebGL game **Escape Road** alongside a curated library of web games.

## 📋 Overview

This repository contains:

- **index.html** — Main entry point for the Escape Road Unity game
- **codepen.io/** — A collection of 40+ web-based games and interactive projects

The project uses Firebase for analytics and authentication, with a dark-themed UI powered by modern CSS and custom fonts.

## 🎮 Main Game: Escape Road

A Unity WebGL game embedded in the web browser with custom loading screen and responsive design.

### Features

- **Custom Loading Screen** — Canvas-based progress bar with animated percentage text
- **Mobile Optimized** — Responsive scaling for iOS and Android devices
- **Firebase Integration** — Authentication and analytics support
- **Dark Theme** — Blue-gray color scheme with gradient background

### Configuration

```javascript
const config = {
  dataUrl: "TemplateData/data.unityweb",
  frameworkUrl: "TemplateData/framework.js.unityweb",
  codeUrl: "TemplateData/wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "1games.io",
  productName: "Escape Road",
  productVersion: "2.0",
};
```

## 🎯 Game Collection (codepen.io/)

The `codepen.io/` directory contains 40+ web-based games and experiences:

### Popular Games

- **2048** — Number sliding puzzle game
- **Connect 4** — Classic turn-based strategy
- **Crossy Road** — Endless runner game
- **Cookie Clicker** — Idle game
- **Minesweeper** — Classic puzzle
- **Tetris** — Block-dropping game
- **Tic-Tac-Toe 2P** — Two-player strategy
- **Pong** — Classic arcade game
- **Memory Games** — Memory matching challenges
- **Platformer & Platform Game Engine** — Side-scrolling games

### Styling

Each game includes associated SCSS stylesheets in `styles-*.scss` for customization.

## 🛠 Technology Stack

- **HTML5** — Semantic markup
- **CSS3/SCSS** — Dark theme with responsive design
- **JavaScript** — Game logic and DOM manipulation
- **Unity WebGL** — 3D game rendering
- **Firebase** — Authentication, Firestore, and Analytics
- **Eruda** — Mobile debugging console
- **JSDelivr CDN** — Asset hosting and delivery

## 📁 Project Structure

```
escape-road/
├── index.html                 # Main Escape Road game entry point
├── README.md                 # This file
├── LICENSE                   # Unlicense (public domain)
├── TemplateData/            # Unity WebGL build files
│   ├── data.unityweb
│   ├── framework.js.unityweb
│   ├── wasm.unityweb
│   └── loader.js
├── assets/
│   ├── Chainwhacks.otf      # Custom font
│   ├── loading.png          # Loading screen background
│   ├── car-icon.png         # Animated car icon
│   └── az_logo.png          # Branding logo
└── codepen.io/              # Web games collection
    ├── *.html               # Game files
    ├── *.scss               # Stylesheets
    ├── *.pug                # Template files
    └── script-1.js          # Shared JavaScript
```

## 🎨 Styling

The project uses a consistent dark theme defined in CSS custom properties:

```css
:root {
  --accent: #363844;
  --accent-dark: #272930;
  --muted: #b0b0b0;
  --bg: #000000;
  --card: #3f3e42;
  --max-width: 1100px;
  --radius: 12px;
  --shadow: 0 6px 20px rgba(0,0,0,0.08);
}
```

## 🔐 Security Considerations

### Firebase Keys

- API keys are exposed client-side (standard for Firebase)
- Secure via Firebase Security Rules in the console
- Restrict API key usage in Google Cloud Console

### Recommendations

- ✅ Firebase Security Rules enabled
- ⚠️ Enable HTTPS for secure cookies
- ⚠️ Disable Eruda in production builds
- ⚠️ Consider Content Security Policy (CSP) headers
- ⚠️ Use Subresource Integrity (SRI) for CDN scripts

## 🚀 Deployment

### CDN Hosting

The project is hosted on JSDelivr:

```html
<base href="https://cdn.jsdelivr.net/gh/[user]/[repo]@[branch]/drive.google.com/escape%20road/">
```

### Firebase Setup

1. Create Firebase project at [firebase.google.com](https://firebase.google.com)
2. Update `firebaseConfig` in `index.html` with your credentials
3. Enable Firebase services:
   - Authentication
   - Firestore Database
   - Analytics

## 📊 Analytics

Google Analytics is configured via Firebase:

```javascript
window.gtag("config", firebaseConfig.measurementId, {
  cookie_domain: location.hostname,
  cookie_flags: "SameSite=None;Secure",
});
```

## 📝 License

This project is released under the **Unlicense** — free and unencumbered software released into the public domain. See [LICENSE](LICENSE) for details.

### Third-Party Licenses

- **Unity WebGL** — Unity EULA
- **Firebase SDK** — Apache License 2.0
- **Eruda** — MIT License
- **Game assets** — Various sources (see individual game files)

## 👥 Credits

- **1games.io** — Game creator and maintainer
- **CodePen.io** — Source for game collection
- **Firebase/Google** — Backend services
- **JSDelivr** — CDN hosting
- **Eruda** — Mobile debugging tools

## 🔗 Resources

- [Google Docs: Game Updates](https://docs.google.com/document/d/1_FmH3BlSBQI7FGgAQL59-ZPe8eCxs35wel6JUyVaG8Q/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Unity WebGL Documentation](https://docs.unity3d.com/Manual/webgl.html)
- [Eruda Console](https://github.com/liriliri/eruda)

---

**Last Updated:** December 2024  
**Version:** 2.0
