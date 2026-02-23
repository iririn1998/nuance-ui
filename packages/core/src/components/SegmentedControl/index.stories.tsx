import type { Meta, StoryObj } from '@storybook/react';

import { NuSegmentedControl } from '.';

const meta: Meta<typeof NuSegmentedControl> = {
  title: 'Components/Navigation/SegmentedControl',
  component: NuSegmentedControl,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NuSegmentedControl>;

export const Default: Story = {
  args: {
    data: ['React', 'Vue', 'Angular', 'Svelte'],
  },
};
