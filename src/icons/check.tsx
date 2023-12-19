import React from "react";
import { CommonIconProp } from "./types";
import { cn } from "../lib/utils/cn";

const CheckIcon = (props: CommonIconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={cn("w-6 h-6", props.className)}
    >
      <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
      <path
        fill="currentColor"
        d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
      />
    </svg>
  );
};

export default CheckIcon;
