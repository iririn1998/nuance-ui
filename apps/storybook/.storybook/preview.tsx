import React from "react";
import type { Preview } from "@storybook/react";
import { MantineProvider } from "@mantine/core";
import { neumorphismTheme } from "nuance-ui";
import "@mantine/core/styles.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider theme={neumorphismTheme}>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#e0e5ec",
            minHeight: "100vh",
          }}
        >
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "neumorphism",
      values: [
        {
          name: "neumorphism",
          value: "#e0e5ec",
        },
        {
          name: "dark",
          value: "#2d3436",
        },
      ],
    },
  },
};

export default preview;
