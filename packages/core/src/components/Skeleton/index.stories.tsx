import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuSkeleton } from ".";
import { NuStack } from "../Stack";

const meta: Meta<typeof NuSkeleton> = {
  title: "Components/Feedback/Skeleton",
  component: NuSkeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuSkeleton>;

export const Default: Story = {
  render: () => (
    <NuStack gap="sm" w={300}>
      <NuSkeleton height={8} radius="xl" />
      <NuSkeleton height={8} radius="xl" />
      <NuSkeleton height={8} w="70%" radius="xl" />
    </NuStack>
  ),
};

export const Circle: Story = {
  render: () => <NuSkeleton height={50} circle />,
};
