import React from "react";
import type { Preview } from "@storybook/react";
import type { MantineThemeOverride } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export function createPreviewConfig(theme: MantineThemeOverride): Preview {
  return {
    decorators: [
      (Story) => (
        <MantineProvider theme={theme}>
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
}

