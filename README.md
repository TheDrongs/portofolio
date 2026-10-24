# Andri Pramuji — Personal Portfolio

An interactive portfolio built with React, Vite, and Three.js. Desktop visitors open a laptop; mobile visitors use a smartphone with the same retro portfolio interface.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:7001/portofolio/. Click **Welcome** or the device to enter. Desktop mouse clicks play a quiet, locally synthesized click sound. Touch and keyboard interactions are silent.

The portfolio window supports minimize, restore, maximize, and close. Closing the window leaves the device on and reveals a **Portofolio** shortcut. Open it again from that shortcut or **Start → Portofolio**. About, Projects, and Contact shortcuts are shown while the portfolio is open.

**Start → Shut Down** opens a Yes/No confirmation. Yes shows **Shutting Down** and a one-second loading bar before powering off; No cancels. Escape dismisses the menu or cancels the confirmation.

On mobile, a portrait smartphone frame keeps the content scrollable and readable. Reduced motion preferences are respected. If WebGL is unavailable, the portfolio still works with a fallback device view.

## Checks and production

```sh
npm test
npm run build
npm run preview
```

The deployment base is `/portofolio/`, configured in `vite.config.js` for the existing GitHub Pages deployment. Portfolio content lives in `src/data/portofolioData.jsx`; downloadable CVs live in `public/documents/`.
