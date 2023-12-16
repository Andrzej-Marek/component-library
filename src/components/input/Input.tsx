import React, { ReactNode } from "react";
import cn from "classnames";

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputVariant = "primary" | "danger" | "success" | "disabled";

export type InputProps = {
  suffix?: ReactNode;
  prefix?: ReactNode;
  label: ReactNode;
  name: string;
  value?: string;
  disabled?: boolean;
  helperText?: ReactNode;
  variant?: InputVariant;
} & Omit<NativeInputProps, "placeholder">;

const inputVariantStyles: Record<
  InputVariant,
  { input: string; label: string; prefix?: string; suffix?: string }
> = {
  primary: {
    input: "focus:border-primary border-gray-200",
    label:
      "text-primary peer-focus:text-primary peer-placeholder-shown:text-gray",
  },
  success: {
    input: "border-secondary",
    label: "text-secondary",
  },
  disabled: {
    input: "border-gray-disabled cursor-not-allowed",
    label: "text-gray-LIGHT opacity-1",
    prefix: "text-gray-LIGHT",
    suffix: "text-gray-LIGHT",
  },
  danger: {
    input: "border-red-500",
    label: "text-red-500",
  },
};

const Input = ({
  suffix,
  prefix,
  name,
  label,
  disabled,
  value,
  helperText,
  variant = "primary",
  ...inputProps
}: InputProps) => {
  const styles = disabled
    ? inputVariantStyles["disabled"]
    : inputVariantStyles[variant];
  return (
    <div className="relative z-0 w-full">
      <input
        name={name}
        type="text"
        {...inputProps}
        disabled={disabled}
        value={value}
        placeholder=""
        className={cn(
          "peer mt-0 block w-full appearance-none border-2  rounded bg-transparent px-3 pb-1 pt-6 focus:outline-none focus:ring-0 ",
          { "pr-12": !!suffix },
          { "pl-6": !!prefix },
          styles.input
        )}
      />
      {!!prefix && (
        <div
          className={cn(
            "absolute top-0  left-0 mt-4 ml-2 text-gray-400",
            styles.prefix
          )}
        >
          {prefix}
        </div>
      )}
      {!!suffix && (
        <div
          className={cn(
            "absolute top-0 right-0 mt-4 mr-4 text-gray-400",
            styles.suffix
          )}
        >
          {suffix}
        </div>
      )}
      <label
        htmlFor={name}
        className={cn(
          styles.label,
          "-z-1 origin-0 absolute top-4 ml-3.5 duration-300 ",
          { "left-3": !!prefix }
        )}
      >
        {label}
      </label>
      {!!helperText && (
        <span className="text-xs text-gray-LIGHT">{helperText}</span>
      )}
    </div>
  );
};

export default Input;
