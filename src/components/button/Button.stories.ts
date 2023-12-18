import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  argTypes: {
    icon: {
      control: "radio",
      options: ["academic-cap"],
      defaultValue: "academic-cap",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    size: {
      control: "radio",
      options: ["default", "large", "small"],
      defaultValue: "default",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "secondary-outline", "primary-outline"],
      defaultValue: "primary",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Primary button",
  },
};

export const PrimaryIcon: Story = {
  args: {
    children: "Primary button",
    icon: "academic-cap",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled button",
    disabled: true,
  },
};

export const PrimarySmall: Story = {
  args: {
    children: "Primary small",
    size: "small",
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: "Primary small",
    size: "large",
  },
};
export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const PrimaryOutline: Story = {
  args: {
    children: "Primary Outline",
    variant: "primary-outline",
  },
};
export const SecondaryOutline: Story = {
  args: {
    children: "Primary Outline",
    variant: "secondary-outline",
  },
};
