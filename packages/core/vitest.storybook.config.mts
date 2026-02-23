import { createStorybookVitestProject } from "@nuance-ui/config/storybook/vitest-plugin";
import { defineConfig } from "vitest/config";
import path from "path";

/**
 * Storybook インタラクションテスト専用の Vitest 設定。
 *
 * 実行方法（Storybook を別ターミナルで起動してから）:
 *   pnpm test:storybook
 *
 * 環境変数でサーバー URL を変更可能:
 *   STORYBOOK_URL=http://localhost:6006 pnpm test:storybook
 */
const { plugins, test } = createStorybookVitestProject({
  storybookConfigDir: path.resolve(__dirname, ".storybook"),
  storybookUrl: process.env["STORYBOOK_URL"] ?? "http://localhost:6006",
});

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: plugins as any,
  resolve: {
    alias: {
      "nuance-ui": path.resolve(__dirname, "src"),
    },
  },
  test,
});

