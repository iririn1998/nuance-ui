import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { NuBadge } from '.';
import { NuGroup } from '../Group';

const meta: Meta<typeof NuBadge> = {
  title: 'Components/DataDisplay/Badge',
  component: NuBadge,
  tags: ['autodocs'],
  argTypes: {
    neuVariant: {
      control: 'select',
      options: ['raised', 'inset', 'flat'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuBadge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    neuVariant: 'raised',
  },
};

export const AllVariants: Story = {
  render: () => (
    <NuGroup>
      <NuBadge neuVariant="raised">Raised</NuBadge>
      <NuBadge neuVariant="inset">Inset</NuBadge>
      <NuBadge neuVariant="flat">Flat</NuBadge>
    </NuGroup>
  ),
};
