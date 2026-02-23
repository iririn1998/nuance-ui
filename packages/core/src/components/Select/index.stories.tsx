import type { Meta, StoryObj } from '@storybook/react';

import { NuSelect } from '.';
import { NuMultiSelect } from '../MultiSelect';

const meta: Meta<typeof NuSelect> = {
  title: 'Components/Inputs/Select',
  component: NuSelect,
  tags: ['autodocs'],
  argTypes: {
    neuVariant: {
      control: 'select',
      options: ['raised', 'inset', 'flat'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuSelect>;

const data = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
  args: {
    label: 'Framework',
    placeholder: 'Pick a framework',
    data,
    neuVariant: 'inset',
  },
};

export const MultiSelectStory: StoryObj<typeof NuMultiSelect> = {
  render: () => <NuMultiSelect label="Frameworks" placeholder="Pick frameworks" data={data} neuVariant="inset" />,
  name: 'MultiSelect',
};
