# Design Portfolio

Interactive React + Vite portfolio with a particle background, laser cover, two independent video players, six-row artwork wall, searchable image gallery and a separate contact page.

## Run locally

Use Node.js 22 or later and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Build

```sh
pnpm build
pnpm test:sites
```

Static assets are generated in `dist/client`. The build also produces `dist/server/index.js` and hosting configuration for the included Sites worker. Other hosts must serve `index.html` as a fallback for `/contact`.

## Project contents

- `src/Portfolio.jsx`: home page, navigation and video presentation.
- `src/PortfolioUpdates.jsx`: artwork wall, image viewer and contact page.
- `src/projects.js` and `src/assets.json`: artwork, video and logo metadata.
- `src/components`: React Bits components and portfolio adaptations.
- `public/media`: all images, logos, five videos and the supplied WeChat QR required by the website.
- `worker`, `.openai`, `tests`: hosting adapter and tests.

Media is included: no external asset account is required. Files in `public/media` total approximately 188 MiB. Videos are deliberately retained at their original supplied quality.

The canonical dependency lockfile is `pnpm-lock.yaml`. Local screenshots, installed dependencies and build output are not source files and are excluded from Git.

## Effects and attribution

React Bits effects were retrieved from the official component registry. See `REACT-BITS-LICENSE.md`. ParticleField adapts CrystalizedBall with gravity, pointer interaction and local turbulence. Other integrated effects include LaserFlow, TechText, TrueFocus, SplitText, ShinyText, GooeyNav and LogoLoop.

Browser QA scripts in `scripts` reflect the original Windows development environment and require adjusting runtime/browser paths on another machine. They are not needed to run or build the site. `prepare-media.cjs` is an optional original-asset preparation utility; generated media is already included.

Uploading this source repository does not itself enable public website hosting.
