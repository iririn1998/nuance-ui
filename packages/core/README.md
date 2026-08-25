# neumorph-ui

[![npm version](https://img.shields.io/npm/v/neumorph-ui.svg)](https://www.npmjs.com/package/neumorph-ui)
[![npm downloads](https://img.shields.io/npm/dm/neumorph-ui.svg)](https://www.npmjs.com/package/neumorph-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repository](https://img.shields.io/badge/GitHub-iririn1998%2Fneumorph--ui-lightgrey.svg?logo=github)](https://github.com/iririn1998/neumorph-ui)

A neumorphism-inspired React UI component library built on top of [Mantine](https://mantine.dev/).  
Mantine をベースにしたニューモーフィズム（Neumorphism）スタイルの React UI コンポーネントライブラリ。

---

## Features / 特徴

- 🎨 **Neumorphic Aesthetic**: Soft shadows, extruded & pressed surface effects.
- ⚡ **Built on Mantine v7**: Full compatibility with Mantine's powerful design system and hooks.
- 🧩 **25+ Components**: Rich set of inputs, buttons, layout, navigation, overlays, and feedback components.
- 🎛️ **Unified Design Tokens**: Centralized tokens for background, shadows, intensities, and size scales with full dark mode support.
- 📦 **Tree Shakeable & Lightweight**: ESM and CJS exports with minimal runtime overhead.
- 🛠️ **TypeScript First**: First-class TypeScript support with comprehensive type definitions.

---

## Installation / インストール

Peer dependencies (`@mantine/core`, `@mantine/hooks`, `react`, `react-dom`) are required:

```bash
# pnpm
pnpm add neumorph-ui @mantine/core @mantine/hooks

# npm
npm install neumorph-ui @mantine/core @mantine/hooks

# yarn
yarn add neumorph-ui @mantine/core @mantine/hooks
```

---

## Quick Start / クイックスタート

Wrap your application with `MantineProvider` and pass `neumorphismTheme`. Don't forget to import both `@mantine/core/styles.css` and `neumorph-ui/styles.css`.

```tsx
import React from 'react';
import { MantineProvider } from '@mantine/core';
import {
  neumorphismTheme,
  NuButton,
  NuCard,
  NuTextInput,
  NuSwitch,
  NuBadge,
} from 'neumorph-ui';

// Styles
import '@mantine/core/styles.css';
import 'neumorph-ui/styles.css';

export default function App() {
  return (
    <MantineProvider theme={neumorphismTheme}>
      <div
        style={{
          padding: '2rem',
          backgroundColor: 'var(--neu-bg-base)', // Soft neumorphic background
          minHeight: '100vh',
        }}
      >
        <NuCard style={{ maxWidth: 420, margin: '0 auto' }}>
          <h2>Neumorph UI Example</h2>
          <NuTextInput label="Email" placeholder="you@example.com" />
          <NuSwitch label="Enable Notifications" mt="sm" />
          <NuButton mt="md" fullWidth>
            Submit
          </NuButton>
        </NuCard>
      </div>
    </MantineProvider>
  );
}
```

---

## Design Tokens / デザイントークン

すべてのコンポーネントは、一元化された CSS カスタムプロパティ（デザイントークン）を参照しています。

### Colors & Shadows

| CSS Variable | Default (Light) | Default (Dark) | Description |
|---|---|---|---|
| `--neu-bg-base` | `#e0e5ec` | `#2d3436` | ベース背景色 |
| `--neu-bg-hover` | `#d5dae2` | `#363d3f` | ホバー時背景色 |
| `--neu-shadow-dark-rgb` | `0, 0, 0` | `0, 0, 0` | ダークシャドウ RGB |
| `--neu-shadow-light-rgb` | `255, 255, 255` | `255, 255, 255` | ライトシャドウ RGB |
| `--neu-intensity-dark` | `0.15` | `0.4` | ダークシャドウの不透明度 |
| `--neu-intensity-light` | `0.8` | `0.05` | ライトシャドウの不透明度 |
| `--neu-shadow-dark` | `rgba(...)` | `rgba(...)` | ダークシャドウ色 |
| `--neu-shadow-light` | `rgba(...)` | `rgba(...)` | ライトシャドウ色 |

### Size Scales (Distance & Blur)

| Scale | `--neu-distance-*` | `--neu-blur-*` | Usage Example |
|---|---|---|---|
| `xs` | `2px` | `4px` | `NuBadge`, `NuNotification` (close) |
| `sm` | `3px` | `6px` | `NuAvatar`, `NuCheckbox`, `NuRadio`, `NuSwitch`, `NuSlider` |
| `md` | `4px` | `8px` | `NuActionIcon`, `NuTextInput`, `NuTabs`, `NuTooltip`, `NuAppShell` |
| `lg` (default) | `6px` | `12px` | `NuButton`, `NuAlert`, `NuPaper`, `NuPopover` |
| `xl` | `8px` | `16px` | `NuCard` |
| `2xl` | `10px` | `20px` | `NuModal`, `NuDrawer` |

---

## Theme & Customization / テーマとカスタマイズ

トークンは CSS 変数または Mantine の `cssVariablesResolver` を使って柔軟にカスタマイズできます。

### 1. CSS 変数によるカスタマイズ (CSS Override)

CSS ファイルで `--neu-bg-base` やシャドウ強度を上書きするだけで、全コンポーネントに自動反映されます。

```css
/* グローバルのベースカラーとシャドウを変更 */
:root {
  --neu-bg-base: #f0f3f8;
  --neu-bg-hover: #e4e8ef;
  --neu-intensity-dark: 0.2;
}

[data-mantine-color-scheme='dark'] {
  --neu-bg-base: #1a1b1e;
  --neu-bg-hover: #25262b;
  --neu-intensity-dark: 0.5;
}
```

### 2. TypeScript / React によるカスタマイズ (`neumorphismCssVariablesResolver`)

`createNeumorphismTheme` と `neumorphismCssVariablesResolver` を使用して、Mantine テーマ経由でトークンをカスタマイズできます。

```tsx
import { MantineProvider, createTheme } from '@mantine/core';
import {
  createNeumorphismTheme,
  neumorphismCssVariablesResolver,
  neumorphismDefaults,
} from 'neumorph-ui';

const theme = createNeumorphismTheme({
  primaryColor: 'teal',
  other: {
    neumorphism: {
      light: {
        ...neumorphismDefaults.light,
        bgBase: '#f0f3f8',
        intensityDark: 0.2,
      },
      dark: {
        ...neumorphismDefaults.dark,
        bgBase: '#1a1b1e',
      },
      sizes: neumorphismDefaults.sizes,
    },
  },
});

export function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={neumorphismCssVariablesResolver}>
      {/* ... */}
    </MantineProvider>
  );
}
```

---

## Components / 提供コンポーネント

| Category | Components |
|---|---|
| **Buttons** | `NuButton`, `NuActionIcon` |
| **Inputs** | `NuTextInput`, `NuPasswordInput`, `NuTextarea`, `NuSelect`, `NuMultiSelect`, `NuCheckbox`, `NuRadio`, `NuRadioGroup`, `NuSwitch`, `NuSlider` |
| **Layout** | `NuCard`, `NuCardSection`, `NuPaper`, `NuGroup`, `NuStack`, `NuDivider`, `NuAppShell` (`NuAppShellHeader`, `NuAppShellNavbar`, `NuAppShellMain`, `NuAppShellFooter`, `NuAppShellSection`) |
| **Navigation** | `NuTabs` (`NuTabsList`, `NuTabsTab`, `NuTabsPanel`), `NuSegmentedControl` |
| **Overlays** | `NuTooltip`, `NuPopover` (`NuPopoverTarget`, `NuPopoverDropdown`), `NuModal`, `NuDrawer` |
| **Data Display** | `NuBadge`, `NuAvatar` |
| **Feedback** | `NuAlert`, `NuNotification`, `NuProgress`, `NuLoader`, `NuSkeleton` |

---

## Links / リンク

- [GitHub Repository](https://github.com/iririn1998/neumorph-ui)
- [npm package](https://www.npmjs.com/package/neumorph-ui)
- [Issues](https://github.com/iririn1998/neumorph-ui/issues)

---

## License

[MIT](./LICENSE) © [iririn](https://github.com/iririn1998)
