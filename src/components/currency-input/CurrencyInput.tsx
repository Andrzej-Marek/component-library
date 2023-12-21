"use client";
import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { InputProps, Input } from "../input/Input";

export type Currency = "PLN" | "USD" | "EUR";

const currencyToPrefixOrSuffix: Record<
  Currency,
  { suffix?: string; prefix?: string }
> = {
  PLN: {
    suffix: " PLN",
  },
  EUR: {
    suffix: " EUR",
  },
  USD: {
    prefix: "$",
  },
};

type CurrencyInputProps = {
  currency: Currency;
} & NumericFormatProps<InputProps>;

export const CurrencyInput = ({
  currency,
  ...inputProps
}: CurrencyInputProps) => {
  return (
    <NumericFormat
      {...inputProps}
      customInput={Input}
      thousandSeparator
      type="text"
      {...currencyToPrefixOrSuffix[currency]}
      decimalScale={2}
    />
  );
};
