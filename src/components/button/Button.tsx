import classNames from "classnames";
import React, { ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "primary-outline"
  | "secondary"
  | "secondary-outline";

export type ButtonSize = "default" | "large" | "small";
export interface ButtonProps extends React.ComponentProps<"button"> {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const sizesStyles: Record<ButtonSize, { button: string }> = {
  small: { button: "text-sm py-2.5 px-5" },
  large: { button: "py-4 px-5 " },
  default: { button: "py-3 px-5 " },
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
  ({ variant = "primary", children, size = "default", ...props }, ref) => {
    const styles = variantStyles[variant];
    const sizes = sizesStyles[size];
    return (
      <button
        data-button={`variant:${variant}`}
        ref={ref}
        {...props}
        className={classNames(
          "group  relative rounded overflow-hidden min-w-[100px] ",
          styles.button,
          sizes.button
        )}
      >
        {children}
        <div className="absolute inset-0 h-full w-full scale-0 rounded transition-all duration-300 group-hover:scale-100 group-hover:bg-light/30"></div>
      </button>
    );
  }
);
