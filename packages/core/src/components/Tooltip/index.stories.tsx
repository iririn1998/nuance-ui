import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuTooltip } from ".";
import { NuButton } from "../Button";

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
