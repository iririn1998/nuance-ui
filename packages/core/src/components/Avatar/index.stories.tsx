import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { NuAvatar } from '.';
import { NuGroup } from '../Group';

const meta: Meta<typeof NuAvatar> = {
  title: 'Components/DataDisplay/Avatar',
  component: NuAvatar,
  tags: ['autodocs'],
  argTypes: {
    neuVariant: {
      control: 'select',
      options: ['raised', 'inset', 'flat'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuAvatar>;

export const Default: Story = {
  args: {
    neuVariant: 'raised',
    radius: 'xl',
    size: 'lg',
    children: 'NU',
  },
};

export const AllVariants: Story = {
  render: () => (
    <NuGroup>
      <NuAvatar neuVariant="raised" radius="xl" size="lg">
        R
      </NuAvatar>
      <NuAvatar neuVariant="inset" radius="xl" size="lg">
        I
      </NuAvatar>
      <NuAvatar neuVariant="flat" radius="xl" size="lg">
        F
      </NuAvatar>
    </NuGroup>
  ),
};
