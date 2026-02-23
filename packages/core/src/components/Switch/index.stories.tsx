import type { Meta, StoryObj } from '@storybook/react';

import { NuSwitch } from '.';

const meta: Meta<typeof NuSwitch> = {
  title: 'Components/Inputs/Switch',
  component: NuSwitch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NuSwitch>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Dark mode',
    defaultChecked: true,
  },
};
