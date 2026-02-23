import { mergeConfig, defineConfig } from 'vitest/config';

/**
 * Base vitest configuration for nuance-ui packages.
 */
export const baseConfig = defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
});

export function createVitestConfig(override = {}) {
  return mergeConfig(baseConfig, defineConfig(override));
}
