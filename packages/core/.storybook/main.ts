import { createMainConfig } from "@nuance-ui/config/storybook/main";
import path from "path";

export default createMainConfig(__dirname, {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  coreSourcePath: path.resolve(__dirname, "../src"),
});
