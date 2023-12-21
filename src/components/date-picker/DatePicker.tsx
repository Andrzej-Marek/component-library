import React, { ReactNode } from "react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/Popover";
import { Button } from "../button/Button";
import { SelectSingleEventHandler } from "react-day-picker";
import { Calendar } from "../calendar/Calendar";

export type DatePickerProps = {
  label?: ReactNode;
  format?: string;
  value: Date;
  onSelect: SelectSingleEventHandler;
};

export const DatePicker = ({ label, value, onSelect }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>{value ? format(value, "P") : label}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
