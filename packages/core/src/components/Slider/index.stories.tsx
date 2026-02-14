import type { Meta, StoryObj } from "@storybook/react";
import { NuSlider } from ".";

const meta: Meta<typeof NuSlider> = {
  title: "Components/Inputs/Slider",
  component: NuSlider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuSlider>;

export const Default: Story = {
  args: {
    defaultValue: 40,
    marks: [
      { value: 0, label: "0%" },
      { value: 50, label: "50%" },
      { value: 100, label: "100%" },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem 1rem" }}>
        <Story />
      </div>
    ),
  ],
};
