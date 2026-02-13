# nuance-ui

Mantine をベースにしたニューモーフィズムスタイルの React UI コンポーネントライブラリ。

## 開発

```bash
# 依存関係のインストール
pnpm install

# Storybook の起動
pnpm dev

# ビルド
pnpm build

# テスト
pnpm test
```

## パッケージ構成

| パッケージ | 説明 |
|---|---|
| `packages/core` | UI コンポーネントライブラリ本体 |
| `apps/storybook` | Storybook によるコンポーネントカタログ |

## リリース

```bash
# changeset の作成
pnpm changeset

# バージョン更新
pnpm version-packages

# npm への公開
pnpm release
```
