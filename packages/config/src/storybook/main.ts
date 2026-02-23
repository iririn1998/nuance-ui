import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

export function createMainConfig(dirname: string): StorybookConfig {
  return {
    stories: ["../../../packages/core/src/**/*.stories.@(ts|tsx)"],
    addons: [
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-links",
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
            "nuance-ui": path.resolve(dirname, "../../../packages/core/src"),
          },
        },
      });
    },
  };
}
