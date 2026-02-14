import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuNotification, NuStack } from "nuance-ui";

const meta: Meta<typeof NuNotification> = {
  title: "Components/Feedback/Notification",
  component: NuNotification,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuNotification>;

export const Default: Story = {
  args: {
    title: "Notification",
    children: "This is a neumorphism-styled notification.",
  },
};

export const WithClose: Story = {
  args: {
    title: "Closable",
    children: "Click the close button to dismiss.",
    withCloseButton: true,
  },
};
