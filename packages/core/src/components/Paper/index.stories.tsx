import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuPaper } from ".";
import { Text } from "@mantine/core";

const meta: Meta<typeof NuPaper> = {
  title: "Components/Layout/Paper",
  component: NuPaper,
  tags: ["autodocs"],
  argTypes: {
    neuVariant: {
      control: "select",
      options: ["raised", "inset", "flat"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuPaper>;

export const Raised: Story = {
  render: () => (
    <NuPaper neuVariant="raised" p="xl" radius="md">
      <Text>Raised Paper - a general-purpose container with neumorphism shadow</Text>
    </NuPaper>
  ),
};

export const Inset: Story = {
  render: () => (
    <NuPaper neuVariant="inset" p="xl" radius="md">
      <Text>Inset Paper - pressed into the surface</Text>
    </NuPaper>
  ),
};
