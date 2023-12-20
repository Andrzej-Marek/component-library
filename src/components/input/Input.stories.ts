import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    variant: "primary",
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Storybook",
    name: "primary",
  },
};
export const HelperText: Story = {
  args: {
    label: "Helper",
    name: "helper",
    helperText:
      "Here is a helper text, that you can use to help with this input",
  },
};

export const Danger: Story = {
  args: {
    label: "Storybook",
    name: "danger",
    variant: "danger",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    name: "error",
    errorMessage: "Invalid field try to fix it",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    name: "success",
    variant: "success",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    name: "Disabled",
    variant: "disabled",
    disabled: true,
    suffix: "min",
    prefix: "%",
  },
};

export const Suffix: Story = {
  args: {
    label: "Storybook",
    name: "suffix",
    suffix: "min",
  },
};

export const Prefix: Story = {
  args: {
    label: "Storybook",
    name: "prefix",
    prefix: "$",
  },
};
