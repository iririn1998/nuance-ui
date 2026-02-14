import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuCard, NuButton, NuGroup, NuBadge } from "nuance-ui";
import { Text, Image } from "@mantine/core";

const meta: Meta<typeof NuCard> = {
  title: "Components/Layout/Card",
  component: NuCard,
  tags: ["autodocs"],
  argTypes: {
    neuVariant: {
      control: "select",
      options: ["raised", "inset", "flat"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuCard>;

export const Raised: Story = {
  render: () => (
    <NuCard neuVariant="raised" w={340} padding="lg" radius="md">
      <Text fw={500} size="lg" mb="xs">
        Neumorphism Card
      </Text>
      <Text size="sm" c="dimmed">
        This card demonstrates the raised neumorphism style with soft shadows
        that make the element appear to float above the surface.
      </Text>
      <NuButton neuVariant="raised" fullWidth mt="md">
        Action
      </NuButton>
    </NuCard>
  ),
};

export const Inset: Story = {
  render: () => (
    <NuCard neuVariant="inset" w={340} padding="lg" radius="md">
      <Text fw={500} size="lg" mb="xs">
        Inset Card
      </Text>
      <Text size="sm" c="dimmed">
        This card uses the inset variant, appearing pressed into the surface.
      </Text>
    </NuCard>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <NuGroup>
      <NuCard neuVariant="raised" w={240} padding="lg" radius="md">
        <NuBadge neuVariant="raised" mb="sm">Raised</NuBadge>
        <Text size="sm">Floating above the surface</Text>
      </NuCard>
      <NuCard neuVariant="inset" w={240} padding="lg" radius="md">
        <NuBadge neuVariant="inset" mb="sm">Inset</NuBadge>
        <Text size="sm">Pressed into the surface</Text>
      </NuCard>
      <NuCard neuVariant="flat" w={240} padding="lg" radius="md">
        <NuBadge neuVariant="flat" mb="sm">Flat</NuBadge>
        <Text size="sm">Flat on the surface</Text>
      </NuCard>
    </NuGroup>
  ),
};
