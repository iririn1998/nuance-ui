import type { Meta, StoryObj } from "@storybook/react";
import { NuTextarea } from "nuance-ui";

const meta: Meta<typeof NuTextarea> = {
  title: "Components/Inputs/Textarea",
  component: NuTextarea,
  tags: ["autodocs"],
  argTypes: {
    neuVariant: {
      control: "select",
      options: ["raised", "inset", "flat"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuTextarea>;

export const Default: Story = {
  args: {
    label: "Comment",
    placeholder: "Write your comment...",
    neuVariant: "inset",
    rows: 4,
  },
};
