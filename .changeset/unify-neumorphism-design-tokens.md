---
"neumorph-ui": minor
---

refactor: unify neumorphism design tokens and enhance theme customization

- Centralize neumorphism design tokens (base color, shadows, intensities, distance/blur size scales) into a single system.
- Eliminate duplicate hardcoded token definitions across all component CSS modules.
- Add `neumorphismCssVariablesResolver` and `createNeumorphismTheme` for flexible theme customization via MantineProvider.
- Support seamless base color and shadow intensity overrides via CSS variables or TypeScript.
- Update documentation with design tokens and customization guide.
