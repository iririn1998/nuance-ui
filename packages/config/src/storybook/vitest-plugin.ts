import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import type { InlineConfig } from "vitest/node";

export interface StorybookVitestProjectOptions {
  /**
   * .storybook ディレクトリへのパス（絶対パス）
   */
  storybookConfigDir: string;
  /**
   * Storybook の URL（起動済みサーバーを利用する場合）
   * @default "http://localhost:6006"
   */
  storybookUrl?: string;
}

/**
 * Storybook インタラクションテスト用の Vitest プロジェクト設定を生成する。
 *
 * @example
 * ```ts
 * // vitest.storybook.config.mts
 * import { createStorybookVitestProject } from "@nuance-ui/config/storybook/vitest-plugin";
 * import path from "path";
 *
 * export default createStorybookVitestProject({
 *   storybookConfigDir: path.resolve(__dirname, ".storybook"),
 * });
 * ```
 */
export function createStorybookVitestProject(
  options: StorybookVitestProjectOptions,
): { plugins: unknown[]; test: InlineConfig } {
  const {
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
    } as InlineConfig,
  };
}
