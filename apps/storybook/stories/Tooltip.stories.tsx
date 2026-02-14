import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuTooltip, NuButton } from "nuance-ui";

const meta: Meta<typeof NuTooltip> = {
  title: "Components/Overlays/Tooltip",
  component: NuTooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuTooltip>;

export const Default: Story = {
  render: () => (
    <NuTooltip label="Tooltip content">
      <NuButton>Hover me</NuButton>
    </NuTooltip>
  ),
};
