# Rock Paper Scissors — Animated Edition

An immersive, polished Rock–Paper–Scissors game built with React. Features a cinematic background arena, animated hand collisions, win confetti, lose shake/vignette, and a playful scoreboard with emotions and attitude.

## Features
- **Background arena** with floating ambient blobs
- **Hand charge + impact** animation on each round
- **Outcome reactions**:
  - Win: confetti burst and celebratory impact ring
  - Lose: screen shake, red vignette, optional vibration
  - Draw: subtle impact only
- **Scoreboard emotions**:
  - When you lead: 😡 beside the computer
  - When computer leads: 😎 with look‑away and floating "HA/Ha/ha..." bubbles
- **Polished title** with gradient and animated underline
- **Keyboard shortcuts**: `R` (Rock), `P` (Paper), `S` (Scissors), `X` (Reset)

## Quick Start
```bash
npm install
npm start
```
Open http://localhost:3000

## How to Play
- Click a choice or press `R`/`P`/`S`
- Watch the hands collide in the background arena
- Read the result and enjoy the appropriate visual effects
- Press `X` or click Reset to start fresh

## Scripts
- `npm start` — Run dev server
- `npm test` — Run tests (if any)
- `npm run build` — Production build to `build/`

## Tech Stack
- React (Create React App)
- Pure CSS animations (no external animation libs)

## Project Structure
- `src/App.js` — Game state and animation triggers
- `src/components/` — UI pieces (`ChoiceButton`, `ScoreBoard`, `ResultDisplay`)
- `src/styles.css` — All animations and styles

## Accessibility & Performance
- Honors `navigator.vibrate` where supported for tactile feedback
- Animations tuned for smoothness; lightweight DOM updates
- If needed, we can add a reduced‑motion option

## Deployment
- Build with `npm run build`
- Host the `build/` folder on any static host or GitHub Pages

---

## CRA Reference

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
