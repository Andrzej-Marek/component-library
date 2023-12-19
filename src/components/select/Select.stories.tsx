import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";
import { SelectOptions } from "./select.types";

const sampleOptions: SelectOptions = [
  {
    label: "Finland",
    options: [
      {
        label: "Custom render",
        value: "Custom",
        renderOption: () => <div className="text-red-400">Custom render</div>,
      },
      {
        label: "Alajärvi",
        value: "Alajärvi",
      },
      {
        label: "Hanko",
        value: "Hanko",
      },
    ],
  },
  {
    label: "Sweden",
    options: [{ label: "Stockholm", value: "Stockholm" }],
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },

  argTypes: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    name: "select",
    label: "Label",
    options: sampleOptions,
  },
};
export const PrimaryValue: Story = {
  args: {
    name: "select",
    value: "Stockholm",
    label: "Label",
    options: sampleOptions,
  },
};
export const PrimaryMulti: Story = {
  args: {
    name: "select",
    label: "Label",
    isMulti: true,
    value: ["Stockholm", "Alajärvi"],
    options: sampleOptions,
  },
};
