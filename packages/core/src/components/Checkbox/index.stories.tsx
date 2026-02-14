import type { Meta, StoryObj } from "@storybook/react";
import { NuCheckbox } from ".";

const meta: Meta<typeof NuCheckbox> = {
  title: "Components/Inputs/Checkbox",
  component: NuCheckbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuCheckbox>;

export const Default: Story = {
  args: {
    label: "I agree to the terms",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked by default",
    defaultChecked: true,
  },
};
