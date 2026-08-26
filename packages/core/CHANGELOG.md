# neumorph-ui

## 0.1.0

### Minor Changes

- 7272d1c: refactor: unify neumorphism design tokens and enhance theme customization

  - Centralize neumorphism design tokens (base color, shadows, intensities, distance/blur size scales) into a single system.
  - Eliminate duplicate hardcoded token definitions across all component CSS modules.
  - Add `neumorphismCssVariablesResolver` and `createNeumorphismTheme` for flexible theme customization via MantineProvider.
  - Support seamless base color and shadow intensity overrides via CSS variables or TypeScript.
  - Update documentation with design tokens and customization guide.

### Patch Changes

- ec94e0c: Add package README, LICENSE, and repository metadata
- 1cdc395: Support Mantine-aligned polymorphic component types (`NuPaper`, `NuButton`, `NuActionIcon`, `NuBadge`, `NuAvatar`, `NuCard`, `NuCardSection`, `NuAppShellSection`) with `createPolymorphicComponent`, enabling proper inference of `component`, element-specific props, and `ref` types.

## 0.0.2

### Patch Changes

- ecc2229: Initial release of neumorph-ui
