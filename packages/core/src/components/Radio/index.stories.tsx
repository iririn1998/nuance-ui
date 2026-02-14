import type { Meta, StoryObj } from "@storybook/react";
import { NuRadio, NuRadioGroup } from ".";

const meta: Meta<typeof NuRadio> = {
  title: "Components/Inputs/Radio",
  component: NuRadio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NuRadio>;

export const Default: Story = {
  args: {
    label: "Option A",
    value: "a",
  },
};

export const RadioGroupStory: Story = {
  render: () => (
    <NuRadioGroup label="Select your favorite framework" defaultValue="react">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
        <NuRadio value="react" label="React" />
        <NuRadio value="vue" label="Vue" />
        <NuRadio value="angular" label="Angular" />
      </div>
    </NuRadioGroup>
  ),
  name: "RadioGroup",
};
