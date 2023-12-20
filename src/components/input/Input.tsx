import React, { ReactNode, useMemo } from "react";
import { cn } from "../../lib/utils/cn";

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputVariant = "primary" | "danger" | "success" | "disabled";

export type InputProps = {
  suffix?: ReactNode;
  prefix?: ReactNode;
  label: ReactNode;
  value?: string;
  disabled?: boolean;
  errorMessage?: ReactNode;
  helperText?: ReactNode;
  variant?: InputVariant;
} & Omit<NativeInputProps, "placeholder">;

const inputVariantStyles: Record<
  InputVariant,
  { input: string; label: string; prefix?: string; suffix?: string }
> = {
  primary: {
    input: "focus:border-primary border-gray-200 focus:bg-primary/10",
    label: "text-gray peer-focus:text-primary peer-placeholder-shown:text-gray",
  },
  success: {
    input: "border-secondary focus:bg-secondary/10",
    label: "text-secondary",
  },
  disabled: {
    input: "border-gray-disabled cursor-not-allowed",
    label: "text-gray-LIGHT opacity-1",
    prefix: "text-gray-LIGHT",
    suffix: "text-gray-LIGHT",
  },
  danger: {
    input: "border-red-500 bg-red-100/20",
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
  errorMessage,
  variant = "primary",
  ...inputProps
}: InputProps) => {
  const styles = useMemo(() => {
    if (disabled) {
      return inputVariantStyles.disabled;
    }
    if (errorMessage) {
      return inputVariantStyles.danger;
    }
    return inputVariantStyles[variant];
  }, []);

  return (
    <div className="relative z-0 w-full">
      <input
        name={name}
        type="text"
        {...inputProps}
        disabled={disabled}
        value={value}
        // NOTE: Need to be empty space, to work property on IOS
        placeholder=" "
        className={cn(
          "peer mt-0 block w-full appearance-none border-2  rounded bg-transparent px-3 pb-1 pt-6 focus:outline-none focus:ring-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          { "pr-12": !!suffix },
          { "pl-6": !!prefix },
          styles.input
        )}
      />
      {!!prefix && (
        <div
          className={cn(
            "absolute top-0 left-0 mt-4 ml-2 text-gray-400",
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

      {!!errorMessage && (
        <span className="p-2 mt-0.5 rounded bg-red-50 block text-xs text-red-700  ">
          {errorMessage}
        </span>
      )}

      {!!helperText && (
        <div className=" block mt-0.5 text-xs text-gray-LIGHT">
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
