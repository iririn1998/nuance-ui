import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuDivider } from ".";
import { NuStack } from "../Stack";
import { Text } from "@mantine/core";

const meta: Meta<typeof NuDivider> = {
  title: "Components/Layout/Divider",
  component: NuDivider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuDivider>;

export const Default: Story = {
  render: () => (
    <NuStack w={400}>
      <Text>Above the divider</Text>
      <NuDivider />
      <Text>Below the divider</Text>
    </NuStack>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <NuStack w={400}>
      <NuDivider label="Section" />
    </NuStack>
  ),
};
