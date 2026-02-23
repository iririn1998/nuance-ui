import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { NuAlert } from '.';
import { NuStack } from '../Stack';

const meta: Meta<typeof NuAlert> = {
  title: 'Components/Feedback/Alert',
  component: NuAlert,
  tags: ['autodocs'],
  argTypes: {
    neuVariant: {
      control: 'select',
      options: ['raised', 'inset', 'flat'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuAlert>;

export const Default: Story = {
  args: {
    title: 'Information',
    children: 'This is an informational alert with neumorphism styling.',
    neuVariant: 'raised',
  },
};

export const AllVariants: Story = {
  render: () => (
    <NuStack>
      <NuAlert title="Raised" neuVariant="raised">
        Raised alert - floats above the surface
      </NuAlert>
      <NuAlert title="Inset" neuVariant="inset">
        Inset alert - pressed into the surface
      </NuAlert>
      <NuAlert title="Flat" neuVariant="flat">
        Flat alert - minimal border
      </NuAlert>
    </NuStack>
  ),
};
