import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { NuActionIcon } from '.';
import { NuGroup } from '../Group';

const meta: Meta<typeof NuActionIcon> = {
  title: 'Components/Buttons/ActionIcon',
  component: NuActionIcon,
  tags: ['autodocs'],
  argTypes: {
    neuVariant: {
      control: 'select',
      options: ['raised', 'inset', 'flat'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuActionIcon>;

export const Default: Story = {
  args: {
    neuVariant: 'raised',
    size: 'lg',
    children: '★',
  },
};

export const AllVariants: Story = {
  render: () => (
    <NuGroup>
      <NuActionIcon neuVariant="raised" size="lg">
        ★
      </NuActionIcon>
      <NuActionIcon neuVariant="inset" size="lg">
        ♥
      </NuActionIcon>
      <NuActionIcon neuVariant="flat" size="lg">
        ✎
      </NuActionIcon>
    </NuGroup>
  ),
};
