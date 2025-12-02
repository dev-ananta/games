# Escape Road Web Build Documentation

## Overview

This document provides an overview of the legal, technical, and structural components of the **Escape Road** web-based Unity game build. It is intended for developers, maintainers, and anyone auditing the codebase for compliance or optimization.

---

## 1. Legal Notices

### **Copyright & Licensing**

* The game content (Unity assets, images, fonts, scripts, and other media) is copyrighted by **1games.io** unless otherwise stated.
* External libraries and services used in this project (Firebase, Eruda, JSDelivr CDN assets) retain their respective licenses.
* Additionally, this repository is under the **Unlicense** license.

### **Third‑Party Dependencies**

This project uses third‑party resources including:

* **Unity WebGL Loader** (Unity Technologies — licensing governed by Unity EULA).
* **Firebase SDK** (Google — licensed under Apache License 2.0).
* **Eruda Console Tool** (MIT License).
* **JSDelivr CDN** (for hosting external assets).

Ensure continued usage complies with each provider's terms of service.

### **Tracking & Analytics Disclosure**

The following analytics technologies are used:

* **Firebase Analytics** via `measurementId`.
* A global `gtag()` event tracker.

Developers deploying this publicly must include a **privacy policy** disclosing:

* Data collected
* Cookies used (`SameSite=None; Secure` flags enabled)
* Sharing and retention practices

---

## 2. Technical Overview

### **Page Structure**

The page is a custom‑styled HTML document embedding a Unity WebGL game with:

* A responsive canvas
* A custom loading screen rendered via `<canvas>`
* A fallback mobile layout

### **Base URL Handling**

```html
<base href="https://cdn.jsdelivr.net/.../escape%20road/">
```

This ensures all asset paths resolve relative to a unified CDN directory.

### **Custom Font**

```css
@font-face {
  font-family: myFirstFont;
  src: url(Chainwhacks.otf);
}
```

Used for both the body and logo-loading canvas.

---

## 3. Unity WebGL Build Configuration

### **Config Object**

The Unity instance is created using:

```js
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

These file names map directly to the exported Unity WebGL build.

### **Mobile Optimization**

```js
if (/iPhone|iPad|iPod|Android/.test(navigator.userAgent)) {
  config.devicePixelRatio = 1;
}
```

Unity’s pixel ratio is reduced for mobile devices to prevent performance issues.

---

## 4. Custom Loading Screen

A custom progress bar is drawn manually using the HTML `<canvas>` element.

### Key Features

* Background image
* Dynamic progress bar fill
* Animated percentage text
* Responsive scaling via `resizeLogoCanvas()`

The loader modifies the canvas width/height to preserve a **16:9 aspect ratio**.

---

## 5. Scripting Architecture

### **Core Scripts**

* Unity loader script (`loader.js`) is dynamically appended.
* Game initialization and progress handling.
* Custom canvas drawing functions.
* Window resize and drawing events.

### **Custom Utility Functions**

* `delay(ms)` — Promise‑based timeout.
* `drawCanvas(percent)` — renders progress bar.
* `resizeLogoCanvas()` — maintains scaling.

---

## 6. Firebase Integration

### **Firebase Services Used**

* **firebase-app**
* **firebase-auth**
* **firebase-firestore**
* **firebase-analytics**

### **Configuration**

Firebase config includes:

* `apiKey`
* `authDomain`
* `projectId`
* `storageBucket`
* `messagingSenderId`
* `appId`
* `measurementId`

These must remain secure when deploying publicly.

### **Analytics Setup**

```js
window.gtag("config", firebaseConfig.measurementId, {
  cookie_domain: location.hostname,
  cookie_flags: "SameSite=None;Secure",
});
```

This enables site‑wide analytics tracking.

---

## 7. Additional Scripts

### **Eruda Debug Console**

```js
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init()</script>
```

Enables debugging on mobile browsers.

### **Cloudflare Rocket Loader**

Improves load performance:

```html
<script src="rocket-loader.min.js" defer></script>
```

---

## 8. Security Considerations

### **Potential Concerns**

* Firebase API keys exposed client‑side (normal for Firebase, but should be restricted via rules).
* CDN‑hosted game files rely on third‑party uptime.
* `eruda` should not be enabled in production unless needed.
* Lack of CSP headers may allow injection.

### **Recommended Improvements**

* Disable Eruda in production builds.
* Implement Firebase Security Rules.
* Use Subresource Integrity (SRI) for CDN scripts.
* Add Content Security Policy (CSP) headers.

---

## 9. File & Asset Summary

### **Core Files**

* `/TemplateData/data.unityweb`
* `/TemplateData/framework.js.unityweb`
* `/TemplateData/wasm.unityweb`
* `/TemplateData/loader.js`
* `Chainwhacks.otf` (font)
* `loading.png`, `car-icon.png` (loading screen assets)
* `az_logo.png` (intro branding)

---

## 10. Developer Notes

* The project relies heavily on canvas‑based rendering for branding.
* Mobile performance optimizations are minimal and may require enhancements.
* Documentation should be updated when modifying the game build or CDN structure.

---

## 11. Versioning

* **Escape Road v2.0** — Unity build referenced in the page.
* Future updates should be versioned using separate folders or CDN commits.

---

## 12. Credits

* **1games.io** — Game creator
* **CDN Hosting** — JSDelivr
* **Firebase Services** — Google
* **Debug Tools** — Eruda
*  **Source (Codepen.io)** - Dexter Harrow
*  **Middleman Developer** - Ananta The Developer (dev-ananta)

---

### End of Documentation
