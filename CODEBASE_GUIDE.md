# Rahul D Portfolio Codebase Guide

## Project overview

This is a framework-free, multi-page portfolio site for Rahul D. Each HTML page is deployable as a standalone static document and loads the shared [style.css](./style.css) and [site.js](./site.js). The site uses local fonts and artwork from [assets/](./assets/), supports light/dark mode, and provides responsive desktop and mobile navigation.

## Directory tree

```text
.
├── index.html
├── about.html
├── apps.html
├── projects.html
├── 404.html
├── privacy-policy.html
├── terms-of-service.html
├── style.css
├── site.js
└── assets/
    ├── bg/
    ├── footer-assets/
    ├── hero-assets/
    ├── fonts/
    └── high-qulaity-assets-not-for-production/
```

## File reference

- `index.html` is the homepage. It contains the hero, featured app, project, toolkit, notice-board sections, floating artwork, and the shared footer.
- `about.html` presents the personal introduction and toolkit.
- `apps.html` presents the application cards.
- `projects.html` presents selected project cards.
- `404.html` is the offline/error route and keeps the shared header/footer navigation.
- `privacy-policy.html` and `terms-of-service.html` are concise informational legal pages.
- `style.css` contains the design tokens, shared components, responsive rules, scene backgrounds, artwork positioning, themes, and the final cascade overrides.
- `site.js` applies saved theme state, synchronizes theme-aware images, controls the accessible mobile menu, and handles internal page transitions.

## Page architecture

Every page uses the same broad structure:

1. `body` and optional `.page-shell`
2. shared header and `.header-nav-bar`
3. page-specific `main`
4. shared footer and legal links
5. shared `site.js`

The homepage also contains inline behavior for its custom cursor, copy-email action, title rotation, and scroll progress. These remain inline because they are currently coupled to homepage-only markup.

## Dependency map

```text
HTML pages
  ├── style.css
  │   └── assets/fonts/*, assets/bg/*, assets/footer-assets/*
  └── site.js
      └── DOM selectors: [data-theme-toggle], .nav-dropdown-mobile,
          #primary-nav, [data-light-src][data-dark-src]
```

All paths are relative so the site remains compatible with static hosting and local `file:` previews.

## Component relationships

- `.header-nav-bar` groups navigation, the mobile menu button, Connect, and the theme toggle.
- `.nav-dropdown-mobile` controls `#primary-nav`; `body.nav-menu-open` supplies the open state.
- `[data-theme-toggle]` changes `body[data-theme="night"]`, updates ARIA state, and swaps images carrying `data-light-src` and `data-dark-src`.
- `.footer__art` and `.footer__image` provide the desktop map artwork. The final mobile rule hides `.footer__art`.
- `.footer__legal` is the small shared legal-link row. Legal links intentionally bypass the page-transition animation.
- Section background images are passed through `--section-image` and rendered by section pseudo-elements.
- `[data-audio-toggle]` is the opt-in ambient-audio control. It creates the FLAC player only after a click, persists the user preference and position between page navigations, and remains off and unloaded by default for new visitors.

## Execution flow

On script load, `site.js`:

1. Reads the saved `rd-theme` value when browser storage is available.
2. Applies the night theme before updating controls.
3. Installs one delegated click listener for the mobile menu, theme control, and internal navigation.
4. Installs Escape and resize handling for the mobile menu.
5. Adds the page-transition layer and synchronizes controls/images.

The homepage inline script then initializes homepage-only interactions after the shared script.

## CSS architecture

The stylesheet is intentionally cascade-oriented because the site has been iterated without a build step. Early sections define the base design system and components. Later sections contain responsive and authoritative overrides for the current visual state. Do not remove a seemingly duplicate rule without checking selector specificity, theme state, and mobile behavior.

Important sensitive selectors include:

- `.homepage-scene main > .hero`
- `.scene-page .page-view > section`
- `.header-nav-bar`
- `.footer__art`, `.footer__image`, `.footer__legal`
- `.theme-toggle`
- `.nav-menu-open`

Local font roles are defined in the root tokens:

- Kanit: display and compact uppercase hierarchy
- Poppins: body copy
- Playfair Display italic: emphasized editorial phrases
- Rozha One, Yuji Boku, and Noto Serif JP: sacred/decorative accents

## JavaScript architecture

`site.js` uses event delegation so the same logic works on every page. `updateToggle()` owns theme button state and theme-aware image sources. `setMobileMenu()` owns menu classes and ARIA attributes. Internal navigation is delayed only for same-origin document links that are not legal links, hash links, external links, modified clicks, or reduced-motion sessions.

The script deliberately uses browser-native APIs and no runtime dependencies.

## Asset inventory

- `assets/fonts/`: local WOFF2 and TrueType fonts used by `style.css`.
- `assets/hero-assets/`: hero and decorative artwork.
- `assets/bg/`: `bg1` and `bg2` WebP/PNG section backgrounds.
- `assets/footer-assets/`: light and dark map artwork.
- `assets/audio/`: the optional ambient FLAC track used by the audio toggle.
- `THIRD-PARTY-LICENSES.md`: attribution and license links for bundled fonts.
- `assets/high-qulaity-assets-not-for-production/`: retained source artwork not referenced by production pages.

Images include intrinsic dimensions where practical to reduce layout shift. WebP is preferred where a WebP/PNG pair exists, with PNG fallback in HTML/CSS.

## Performance decisions

- No framework, bundler, or new dependency was introduced.
- Local fonts remove the runtime Google Fonts request and use `font-display: swap`.
- Below-the-fold decorative images use lazy loading where present.
- The shared script performs one delegated click listener rather than page-specific listeners for shared controls.
- The map is not rendered on mobile because it is decorative and previously consumed space without contributing content.

No reliable Lighthouse or transfer-size comparison is available in this local file-preview environment. Claims above describe implementation choices, not measured percentage gains.

## Maintenance instructions

To add a page, copy the shared header/footer structure, keep the same `style.css` and `site.js` references, add the page to the navigation lists, and verify both desktop and mobile menu states. Use `--section-image` for section backgrounds rather than adding new pseudo-element systems.

To add an artwork variant, provide explicit dimensions, prefer WebP with a PNG fallback, and update `site.js` only when the image must respond to theme changes.

To change global typography or colors, update the root tokens first. Add a final override only when an older rule cannot safely be consolidated without changing the cascade.

## Visual-fidelity safeguards

Do not rename IDs or data attributes used by `site.js`, especially `primary-nav`, `data-theme-toggle`, `data-light-src`, and `data-dark-src`. Preserve the 760px mobile breakpoint unless all navigation and footer states are retested. Keep section pseudo-elements and their stacking contexts intact.

## Known limitations

- Header and footer markup is repeated because the project has no templating/build step.
- `style.css` still contains historical cascade layers and some duplicate declarations; a complete consolidation would require screenshot-based regression coverage and should be a separate controlled effort.
- The homepage contains inline scripts that are not shared by secondary pages.
- Browser/file-preview testing does not provide production network metrics.
