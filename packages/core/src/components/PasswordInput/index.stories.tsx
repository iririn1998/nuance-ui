import type { Meta, StoryObj } from "@storybook/react";
import { NuPasswordInput } from ".";

const meta: Meta<typeof NuPasswordInput> = {
  title: "Components/Inputs/PasswordInput",
  component: NuPasswordInput,
  tags: ["autodocs"],
  argTypes: {
    neuVariant: {
      control: "select",
      options: ["raised", "inset", "flat"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuPasswordInput>;

export const Default: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    neuVariant: "inset",
  },
};
