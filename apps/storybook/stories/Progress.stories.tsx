import type { Meta, StoryObj } from "@storybook/react";
import { NuProgress } from "nuance-ui";

const meta: Meta<typeof NuProgress> = {
  title: "Components/Feedback/Progress",
  component: NuProgress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuProgress>;

export const Default: Story = {
  args: {
    value: 65,
    size: "lg",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};
