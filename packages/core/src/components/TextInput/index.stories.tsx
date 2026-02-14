import type { Meta, StoryObj } from "@storybook/react";
import { NuTextInput } from ".";

const meta: Meta<typeof NuTextInput> = {
  title: "Components/Inputs/TextInput",
  component: NuTextInput,
  tags: ["autodocs"],
  argTypes: {
    neuVariant: {
      control: "select",
      options: ["raised", "inset", "flat"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuTextInput>;

export const Inset: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    neuVariant: "inset",
  },
};

export const Raised: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    neuVariant: "raised",
  },
};

export const Flat: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    neuVariant: "flat",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Username",
    description: "This will be your display name",
    placeholder: "Enter username",
    neuVariant: "inset",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    error: "Invalid email address",
    neuVariant: "inset",
  },
};
