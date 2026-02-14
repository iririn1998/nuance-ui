import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuPopover, NuPopoverTarget, NuPopoverDropdown } from ".";
import { NuButton } from "../Button";
import { Text } from "@mantine/core";

const meta: Meta<typeof NuPopover> = {
  title: "Components/Overlays/Popover",
  component: NuPopover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuPopover>;

export const Default: Story = {
  render: () => (
    <NuPopover width={200} position="bottom" withArrow>
      <NuPopoverTarget>
        <NuButton>Toggle popover</NuButton>
      </NuPopoverTarget>
      <NuPopoverDropdown>
        <Text size="sm">This is a neumorphism-styled popover</Text>
      </NuPopoverDropdown>
    </NuPopover>
  ),
};
