import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  kind?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ kind = "primary", ...props }, ref) => {
    return (
      <button
        data-button={`kind:${kind}`}
        ref={ref}
        {...props}
        className=" text-red-500 bg-yellow-300 py-3"
      >
        {props.children}
      </button>
    );
  }
);
