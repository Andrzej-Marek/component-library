import { ReactNode } from "react";
import { GroupBase, OptionsOrGroups } from "react-select";

export type SelectOption = {
  label: string;
  value: string;
  renderOption?: () => ReactNode;
};

export type SelectOptionGroup = GroupBase<SelectOption>;

export type SelectOptions = OptionsOrGroups<SelectOption, SelectOptionGroup>;

export const isGroupOption = (
  option: SelectOption | SelectOptionGroup
): option is SelectOptionGroup => !!(option as SelectOptionGroup).options;
