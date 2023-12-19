import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    label: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Akceptuje warunki umowy",
  },
};
export const Secondary: Story = {
  args: {
    label: "Akceptuje warunki umowy",
    variant: "success",
  },
};
export const PrimaryWithHelper: Story = {
  args: {
    label: "Akceptuje warunki umowy",
    helperText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum?",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    label: "Akceptuje warunki umowy",
    disabled: true,
    helperText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum?",
  },
};
