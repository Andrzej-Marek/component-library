import React, { ReactNode } from "react";
import { IconVariant } from "../icon/icon-list";
import { cn } from "../../lib/utils/cn";
import { CommonSize } from "../../lib/types/componet-size";
import { Icon } from "../icon/Icon";

export type ButtonVariant =
  | "primary"
  | "primary-outline"
  | "secondary"
  | "secondary-outline";

export type ButtonSize = CommonSize;
export interface ButtonProps extends React.ComponentProps<"button"> {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: IconVariant;
}

const sizesStyles: Record<ButtonSize, { button: string; icon: string }> = {
  small: { button: "text-sm py-2.5 px-5", icon: "w-4 h-4" },
  default: { button: "py-3 px-5 ", icon: "w-6 h-6" },
  large: { button: "py-4 px-5 ", icon: "w-6 h-6" },
};

// link: "text-primary underline-offset-4 hover:underline",
const variantStyles: Record<ButtonVariant, { button: string }> = {
  primary: { button: "bg-primary text-light" },
  secondary: { button: "bg-secondary text-light" },
  "primary-outline": {
    button: "bg-transparent border-primary border-2 text-primary",
  },
  "secondary-outline": {
    button: "bg-transparent border-secondary border-2 text-secondary",
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", children, size = "default", icon, ...props },
    ref
  ) => {
    const styles = variantStyles[variant];
    const sizes = sizesStyles[size];
    return (
      <button
        data-button={`variant:${variant}`}
        role="button"
        ref={ref}
        {...props}
        className={cn(
          "group flex gap-2 items-center relative rounded overflow-hidden min-w-[100px] ",
          {
            "cursor-not-allowed opacity-30": !!props.disabled,
          },
          styles.button,
          sizes.button
        )}
      >
        {icon && <Icon icon={icon} className={sizes.icon} />}
        {children}
        {!props.disabled && (
          <div className="absolute inset-0 h-full w-full scale-0 rounded transition-all duration-300 group-hover:scale-100 group-hover:bg-light/30"></div>
        )}
      </button>
    );
  }
);
