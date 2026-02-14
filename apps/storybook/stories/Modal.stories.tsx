import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuModal, NuButton, NuTextInput, NuGroup } from "nuance-ui";
import { Text } from "@mantine/core";

const meta: Meta<typeof NuModal> = {
  title: "Components/Overlays/Modal",
  component: NuModal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuModal>;

function ModalDemo() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <NuButton onClick={() => setOpened(true)}>Open Modal</NuButton>
      <NuModal opened={opened} onClose={() => setOpened(false)} title="Neumorphism Modal">
        <Text size="sm" mb="md">
          This modal uses neumorphism styling with soft shadows.
        </Text>
        <NuTextInput label="Name" placeholder="Enter your name" mb="md" />
        <NuGroup justify="flex-end">
          <NuButton neuVariant="flat" onClick={() => setOpened(false)}>Cancel</NuButton>
          <NuButton onClick={() => setOpened(false)}>Submit</NuButton>
        </NuGroup>
      </NuModal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};
