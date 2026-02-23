import { defineConfig } from "oxlint";
import baseConfig from "@nuance-ui/config/oxlint";

/**
 * oxlint configuration for packages/core.
 * Extends the shared base config from @nuance-ui/config.
 */
const config = defineConfig({
  ...baseConfig,
  // Package-specific overrides can be added here
});

export default config;
