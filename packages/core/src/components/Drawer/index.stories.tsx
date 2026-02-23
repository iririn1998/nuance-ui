import { Text } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { NuDrawer } from '.';
import { NuButton } from '../Button';

const meta: Meta<typeof NuDrawer> = {
  title: 'Components/Overlays/Drawer',
  component: NuDrawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NuDrawer>;

function DrawerDemo() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <NuButton onClick={() => setOpened(true)}>Open Drawer</NuButton>
      <NuDrawer opened={opened} onClose={() => setOpened(false)} title="Neumorphism Drawer">
        <Text size="sm">Drawer content with neumorphism styling</Text>
      </NuDrawer>
    </>
  );
}

export const Default: Story = {
  render: () => <DrawerDemo />,
};
