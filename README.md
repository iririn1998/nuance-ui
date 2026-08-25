# neumorph-ui

[![npm version](https://img.shields.io/npm/v/neumorph-ui.svg)](https://www.npmjs.com/package/neumorph-ui)
[![npm downloads](https://img.shields.io/npm/dm/neumorph-ui.svg)](https://www.npmjs.com/package/neumorph-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A neumorphism-inspired React UI component library built on top of [Mantine](https://mantine.dev/).  
Mantine をベースにしたニューモーフィズム（Neumorphism）スタイルの React UI コンポーネントライブラリ。

---

## インストール

```bash
# pnpm
pnpm add neumorph-ui @mantine/core @mantine/hooks

# npm
npm install neumorph-ui @mantine/core @mantine/hooks

# yarn
yarn add neumorph-ui @mantine/core @mantine/hooks
```

---

## クイックスタート

```tsx
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { neumorphismTheme, NuButton, NuCard, NuTextInput, NuSwitch } from 'neumorph-ui';
import '@mantine/core/styles.css';
import 'neumorph-ui/styles.css';

export default function App() {
  return (
    <MantineProvider theme={neumorphismTheme}>
      <div style={{ padding: '2rem', backgroundColor: 'var(--neu-bg-base)', minHeight: '100vh' }}>
        <NuCard style={{ maxWidth: 420, margin: '0 auto' }}>
          <h2>Hello, Neumorph UI</h2>
          <NuTextInput label="Username" placeholder="Enter your username" />
          <NuSwitch label="Enable Notifications" mt="sm" />
          <NuButton mt="md" fullWidth>Submit</NuButton>
        </NuCard>
      </div>
    </MantineProvider>
  );
}
```

---

## デザイントークンとカスタマイズ

Neumorph UI は一元化された CSS 変数（トークン）体系を採用しており、CSS または TypeScript（MantineProvider）から簡単にカスタマイズできます。

### CSS 変数によるカスタマイズ
```css
:root {
  --neu-bg-base: #f0f3f8;
  --neu-intensity-dark: 0.2;
}

[data-mantine-color-scheme='dark'] {
  --neu-bg-base: #1a1b1e;
  --neu-intensity-dark: 0.5;
}
```

### MantineProvider によるカスタマイズ
```tsx
import {
  createNeumorphismTheme,
  neumorphismCssVariablesResolver,
  neumorphismDefaults,
} from 'neumorph-ui';

const theme = createNeumorphismTheme({
  other: {
    neumorphism: {
      light: {
        ...neumorphismDefaults.light,
        bgBase: '#f0f3f8',
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

## パッケージ構成

| パッケージ | 説明 |
|---|---|
| [`packages/core`](./packages/core) | `neumorph-ui` ライブラリ本体（npm 公開パッケージ） |
| [`apps/storybook`](./apps/storybook) | Storybook によるコンポーネントカタログ |
| [`packages/config`](./packages/config) | 共有設定（Storybook, Vitest, Oxlint 等） |

---

## 開発

```bash
# 依存関係のインストール
pnpm install

# Storybook の起動（カタログプレビュー）
pnpm dev

# パッケージのビルド
pnpm build

# テストの実行
pnpm test

# 型チェック
pnpm --filter neumorph-ui typecheck
```

---

## リリースフロー（GitHub Actions + Changesets）

本リポジトリは **Changesets** と **GitHub Actions** により自動化されています。

### 1. 変更内容の記録（開発時）
機能追加やバグ修正、ドキュメント更新を行ったら、以下のコマンドで Changeset を作成してコミットに含めます。

```bash
pnpm changeset
```

### 2. PR の作成とマージ
作成された `.changeset/*.md` を含めて PR を作成（または `main` に push）します。

### 3. 自動リリース
1. `main` に Changeset がマージされると、GitHub Actions が自動で **「chore: version packages」** というリリース用 PR を作成します。
2. そのリリース PR を `main` にマージすると、自動で `pnpm release`（ビルド ＆ npm publish）が実行され、npm に新バージョンが公開されます。

---

## ライセンス

[MIT](./LICENSE) © [iririn](https://github.com/iririn1998)
