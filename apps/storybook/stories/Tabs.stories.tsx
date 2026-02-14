import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NuTabs, NuTabsList, NuTabsTab, NuTabsPanel } from "nuance-ui";
import { Text } from "@mantine/core";

const meta: Meta<typeof NuTabs> = {
  title: "Components/Navigation/Tabs",
  component: NuTabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuTabs>;

export const Default: Story = {
  render: () => (
    <NuTabs defaultValue="gallery">
      <NuTabsList>
        <NuTabsTab value="gallery">Gallery</NuTabsTab>
        <NuTabsTab value="messages">Messages</NuTabsTab>
        <NuTabsTab value="settings">Settings</NuTabsTab>
      </NuTabsList>

      <NuTabsPanel value="gallery">
        <Text>Gallery tab content</Text>
      </NuTabsPanel>
      <NuTabsPanel value="messages">
        <Text>Messages tab content</Text>
      </NuTabsPanel>
      <NuTabsPanel value="settings">
        <Text>Settings tab content</Text>
      </NuTabsPanel>
    </NuTabs>
  ),
};
