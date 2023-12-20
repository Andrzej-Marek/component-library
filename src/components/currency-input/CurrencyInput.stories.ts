import type { Meta, StoryObj } from "@storybook/react";
import { CurrencyInput } from "./CurrencyInput";

const meta = {
  title: "Form/CurrencyInput",
  component: CurrencyInput,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "primary",
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof CurrencyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Cena za samochód",
    value: "",
    currency: "PLN",
  },
};
