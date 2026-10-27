# Refactor Changelog

## 27 October 2026

### Documentation

- Added `CODEBASE_GUIDE.md` with the actual page, asset, CSS, and JavaScript relationships.
- Documented visual-fidelity safeguards and known limitations instead of claiming unsupported performance gains.

### Safe cleanup and consolidation

- Replaced the external Google Fonts import with the local font files already present in `assets/fonts/`.
- Consolidated the current font roles into explicit CSS tokens.
- Removed obsolete `.footer__meta` usage and retained the smaller legal-link row.
- Kept footer legal navigation outside the page-transition interception so the legal pages remain directly reachable.
- Added local Privacy Policy and Terms of Service pages and linked them from every existing HTML page.
- Added `THIRD-PARTY-LICENSES.md` with attribution and SIL Open Font License links for all bundled font files.
- Added a compact copyright notice and licenses link to every page footer.
- Updated the privacy disclosure to describe the actual local-storage behavior and to avoid claiming that analytics are present when none are configured.
- Standardized mobile header controls as matching 42px rounded squares and enlarged hero social buttons and icons.
- Added device color-scheme detection as the initial theme fallback while preserving explicit saved theme choices.
- Stabilized the rotating hero title with a reserved word width and minimum title height, preventing nearby content from shifting as words change.
- Repositioned Kurma into the upper-right of its own projects section, matching the contained Matsya treatment, with smaller capped artwork on mobile.
- Added a final scoped Kurma override so legacy cascade rules cannot move it back to the bottom-left.
- On desktop only, moved Matsya and Kurma below their respective section headings while preserving the existing mobile placement.
- Reserved a normal-flow desktop artwork lane between each heading and its content card so the avatars cannot reduce heading or card readability through overlap.
- Desktop section headers now place each view-all link below its heading on the left, while the corresponding avatar stays contained at the upper-right; mobile positioning is unchanged.
- Applied the same readable mobile section-header structure: view-all links stack below headings on the left, with Matsya and Kurma reserved at the upper-right.
- Added a final avatar tuning block with separate desktop/mobile position variables, forced full opacity on the wrapper and image, and restored contrast/saturation for clearer artwork.
- Matched Matsya and Kurma to Vishnu's visual rendering treatment: full opacity, normal blending, and the same wrapper/image drop shadows without desaturation or contrast boosting.
- Compensated for the lower alpha baked into the Matsya and Kurma source artwork by adding a controlled second render layer, making their visible density comparable to Vishnu-main without flattening transparent edges.
- Increased the compensation to two full-strength duplicate background layers so translucent source pixels composite into solid, readable artwork instead of appearing faded into the section background.
- Moved the Toolkit view-all link into its heading wrapper so it follows the same stacked heading/link structure as the other homepage sections.

### Performance and reliability

- Kept the no-dependency static architecture.
- Added an opt-in ambient audio control using `assets/audio/active-audio.flac`; the preference and playback position persist between page navigations while remaining off by default for new visitors.
- Preserved native lazy loading and intrinsic image dimensions.
- Retained one delegated shared event listener for navigation/theme/menu behavior.
- Avoided a risky stylesheet rewrite because the current stylesheet contains many cascade-sensitive historical overrides and no automated visual regression suite.

### Validation

- Created a pre-refactor backup outside the deployed project at the session backup location.
- Verified every HTML page contains one Privacy Policy link and one Terms of Service link.
- Browser-tested homepage navigation to Terms of Service.
- Browser-tested both legal pages at desktop and mobile viewport sizes.
- Verified local Kanit, Poppins, and Playfair font loading in the browser.

### Remaining concerns

- `style.css` remains large and layered. Further reduction should be performed incrementally with before/after screenshots at desktop, tablet, and mobile sizes.
- No production Lighthouse, transfer-size, or field-performance measurements were available from the local file preview.
