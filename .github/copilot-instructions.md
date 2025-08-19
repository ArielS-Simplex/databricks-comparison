# AI agent quickstart for this repo

Purpose: a static React site for management decision-making on analytics platforms. Built with Create React App (CRA) and Tailwind CSS. **Target audience: executives and managers making strategic platform decisions.**

## Architecture at a glance
- Entry: `src/index.js` renders `App` with React 19 StrictMode.
- App shell: `src/App.js` manages top-level navigation state: `activeCategory`, `activeSubcategory`, and a special `databaseViewMode`. The navigation map determines which component renders.
- Feature components live in `src/components/` and are largely self-contained UI modules that read structured data from `src/data/`.
  - Examples:
    - `AwsVsAzureComparison.js` uses `serviceCategories.js` and `cloudExecutiveSummary.js` to render technical vs executive views with expandable rows/cards.
    - `SimplifiedComparison.js` provides non-technical tabs (“Plain English”, “When to choose”, etc.).
    - `common/PageHeader.js` implements a shared header using classes from `styles/common.css`.
- Styles:
  - Tailwind v4 utility classes via `src/index.css` (contains `@tailwind base/components/utilities`).
  - Local CSS modules under `src/styles/` for custom tokens: `common.css`, `buttons.css` (e.g., `btn-nav`, `header-gradient`).
- Build output: CRA `build/` is committed for GitHub Pages deployment.

## Platform Comparison Focus
**Current analytics platforms supported:**
- **Databricks** - Advanced analytics and ML platform
- **Snowflake** - Cloud data warehouse leader  
- **Microsoft Fabric** - Unified analytics platform (NEW: recently integrated)
- **SingleStore REMOVED** - No longer included in comparisons (management decision)

**Cost compliance**: All cost figures include asterisk disclaimers (*estimated according to X) for legal compliance.

**Primary component**: `SimplifiedComparison.js` is the main analytics platform comparison tool with management-focused tabs:
- "Plain English" - Non-technical feature comparison
- "When to Choose" - Strategic guidance for platform selection
- "Executive View" - High-level business comparison with decision matrix
- "Technical View" - Detailed technical specifications for IT evaluation
- "Budget Impact" - Cost analysis with estimation disclaimers

## Workflows and commands
- Dev server (requires Node with OpenSSL legacy flag due to `react-scripts@3`):
  - `npm start` → starts CRA with `NODE_OPTIONS=--openssl-legacy-provider` already set in `package.json`.
- Tests (Jest via CRA):
  - `npm test` → watch mode. Tests live in `src/*.test.js` (minimal scaffolding present).
- Build and deploy:
  - `npm run build` → writes to `build/`.
  - `npm run deploy` → runs `gh-pages -d build` (site served at `https://ArielS-Simplex.github.io/databricks-comparison`, see `homepage` in `package.json`).
- Tailwind:
  - Config in `tailwind.config.js` with `content: ["./src/**/*.{js,jsx,ts,tsx}"]`.
  - PostCSS pipeline is present; no separate Tailwind build command needed—CRA processes via PostCSS.

## Project conventions and patterns
- Data-driven UI: Put static datasets in `src/data/` and import into components. Example: `src/data/serviceCategories.js` powers side-by-side AWS vs Azure tables.
- Navigation pattern: `App.js` defines a single `navigation` object that maps categories → subcategories → component element or flags (e.g., `hasMutipleViews` for database section). To add a new section, extend this map and create a component under `src/components/`.
- View switching: Certain sections use an audience/view toggle (“executive”, “technical”, “simplified”). Maintain state in the parent (e.g., `App.js` uses `databaseViewMode`; `AwsVsAzureComparison` uses local `audienceView`). Prefer lifting state only when the same toggle spans multiple subcomponents.
- Styling: Prefer Tailwind utilities for layout/spacing and use `styles/common.css`/`styles/buttons.css` for shared class names like `btn-nav`, `btn-nav-active`, `btn-nav-inactive`, and `header-gradient`.
- Animations/Icons: Light inline SVG usage; `framer-motion` is installed but not widely used—keep dependencies minimal unless adding meaningful motion.
- Routing: Not used despite `react-router-dom` being in dependencies—the app relies on in-memory tab state. Don’t introduce routes unless agreed.

## Integration points and external deps
- CRA (react-scripts 3.x) with React 19; the `NODE_OPTIONS=--openssl-legacy-provider` environment variable is required for builds on modern Node/OpenSSL.
- Deployment via `gh-pages` using the `homepage` field.
- Tailwind v4 with PostCSS (`postcss.config.js` exists) and `index.css` imports.
- Testing libs installed: `@testing-library/*` and `jest-dom` already configured via CRA.

## Gotchas and tips
- Keep components pure and data-driven; avoid fetching—this site is static. Put new content under `src/data/`.
- When adding Tailwind classes, ensure selectors aren’t generated dynamically in a way that Purge (content scanning) can’t detect; keep class names literal.
- If you add a new top-level section, also wire its button styles using the existing `btn-nav*` classes for visual consistency.
- The `build/` folder is versioned for GitHub Pages; remember running `npm run deploy` regenerates it—avoid manual edits there.
- Avoid introducing `react-router` without restructuring—current UX is tabbed navigation, not URL-based.

## Examples
- Add a new comparison view:
  1) Create `src/components/MyNewComparison.js` that renders from a dataset in `src/data/myNewData.js`.
  2) Import and register it in `src/App.js` under a new `navigation` category or subcategory.
- Reuse header:
  - `import PageHeader from './components/common/PageHeader';` and pass `title`/`subtitle`.

## File map highlights
- App shell: `src/App.js`
- Entry: `src/index.js`
- Styles: `src/index.css`, `src/styles/common.css`, `src/styles/buttons.css`
- Data: `src/data/**/*`
- Views: `src/components/**/*` (notably `AwsVsAzureComparison.js`, `SimplifiedComparison.js`)

If anything above seems off or you need deeper conventions (testing, lint, or data schema details), ask and I’ll refine this file.
