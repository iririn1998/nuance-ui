import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

/**
 * Storybook インタラクションテスト用の Vitest プロジェクト設定を生成する。
 *
 * @param {Object} options
 * @param {string[]} [options.stories=["src/**\/*.stories.{ts,tsx}"]] stories ファイルの glob パターン
 * @param {string} options.storybookConfigDir .storybook ディレクトリへの絶対パス
 * @param {string} [options.storybookUrl="http://localhost:6006"] Storybook の URL
 * @returns {{ plugins: unknown[], test: import('vitest/node').InlineConfig }}
 */
export function createStorybookVitestProject(options) {
  const {
    stories = ["src/**/*.stories.{ts,tsx}"],
    storybookConfigDir,
    storybookUrl = "http://localhost:6006",
  } = options;

  return {
    plugins: [
      storybookTest({
        configDir: storybookConfigDir,
        storybookUrl,
      }),
    ],
    test: {
      name: "storybook",
      browser: {
        enabled: true,
        headless: true,
        name: "chromium",
        provider: "playwright",
      },
      setupFiles: [`${storybookConfigDir}/vitest.setup.ts`],
    },
  };
}
