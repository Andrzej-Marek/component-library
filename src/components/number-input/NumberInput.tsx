import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import Input, { InputProps } from "../input/Input";

type NumberInputProps = {} & NumericFormatProps<InputProps>;

const NumberInput = ({ ...inputProps }: NumberInputProps) => {
  return <NumericFormat {...inputProps} customInput={Input} />;
};

export default NumberInput;
