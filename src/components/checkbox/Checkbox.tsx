import React, { ReactNode, useId } from "react";
import { cn } from "../../lib/utils/cn";
import { CommonSize } from "../../lib/types/component-size";
import { CheckIcon } from "../../icons";

type CheckboxVariant = "primary" | "success";
type CheckboxSize = CommonSize;

const variantStyles: Record<CheckboxVariant, { input: string }> = {
  primary: {
    input:
      "before:bg-blue-gray-500 checked:border-primary checked:bg-primary checked:before:bg-primary ",
  },
  success: {
    input:
      "before:bg-blue-gray-500 checked:border-secondary checked:bg-secondary checked:before:bg-secondary ",
  },
};

const sizeStyles: Record<CheckboxSize, { input: string; icon: string }> = {
  small: { input: "h-4 w-4", icon: "w-3 h-3" },
  default: { input: "h-5 w-5", icon: "w-3.5 h-3.5" },
  large: { input: "h-6 w-6", icon: "w-4 h-4" },
};

export interface CheckboxProps
  extends Omit<React.ComponentProps<"input">, "size"> {
  label?: ReactNode;
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  helperText?: ReactNode;
}

export const Checkbox = ({
  label,
  helperText,
  variant = "primary",
  size = "default",
  ...inputProps
}: CheckboxProps) => {
  const randomId = useId();
  const id = inputProps.name ?? randomId;

  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  return (
    <div className="inline-flex items-center">
      <div className="relative flex cursor-pointer items-center rounded-full p-3">
        <input
          id={id}
          type="checkbox"
          className={cn(
            "before:content[''] peer relative cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10",
            variantStyle.input,
            sizeStyle.input,
            {
              "cursor-not-allowed": inputProps.disabled,
            }
          )}
          {...inputProps}
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <CheckIcon
            className={cn("h-3.5 w-3.5 font-semibold", sizeStyle.icon)}
          />
        </div>
      </div>
      <div
        className={cn({
          "opacity-30": inputProps.disabled,
        })}
      >
        {!!label && (
          <label htmlFor={id} className="">
            {label}

            {!!helperText && (
              <p className="leading-normal text-xs font-light text-gray">
                {helperText}
              </p>
            )}
          </label>
        )}
      </div>
    </div>
  );
};
