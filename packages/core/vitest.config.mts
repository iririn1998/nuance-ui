import { createVitestConfig } from "@nuance-ui/config/vitest";

export default createVitestConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
  },
});
