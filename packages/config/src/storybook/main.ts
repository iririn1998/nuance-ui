import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

export interface MainConfigOptions {
  /**
   * stories glob パターン（.storybook ディレクトリからの相対パス）
   * @default ["../../../packages/core/src/**\/*.stories.@(ts|tsx)"]  // apps/storybook 用デフォルト
   */
  stories?: string[];
  /**
   * `nuance-ui` エイリアスが解決するパス（絶対パス）
   * @default path.resolve(dirname, "../../../packages/core/src")
   */
  coreSourcePath?: string;
}

export function createMainConfig(
  dirname: string,
  options: MainConfigOptions = {},
): StorybookConfig {
  const {
    stories = ["../../../packages/core/src/**/*.stories.@(ts|tsx)"],
    coreSourcePath = path.resolve(dirname, "../../../packages/core/src"),
  } = options;

  return {
    stories,
    addons: [
      "@storybook/addon-essentials",
      "@storybook/addon-links",
      "@storybook/experimental-addon-test",
    ],
    framework: {
      name: "@storybook/react-vite",
      options: {},
    },
    typescript: {
      reactDocgen: "react-docgen-typescript",
    },
    async viteFinal(config) {
      return mergeConfig(config, {
        resolve: {
          alias: {
            "nuance-ui": coreSourcePath,
          },
        },
      });
    },
  };
}
