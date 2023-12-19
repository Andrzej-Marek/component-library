import classNames from "classnames";
import React, { useRef, useState } from "react";
import ReactSelect, {
  GroupBase,
  OptionProps,
  Props as ReactSelectProps,
} from "react-select";
import Icon from "../icon/Icon";
import ReactSelectDeclaration from "react-select/dist/declarations/src/Select";
import { SelectOption, isGroupOption } from "./select.types";

type SelectProps = {
  name: string;
  label: string;
  value?: string | string[];
} & Omit<ReactSelectProps<SelectOption>, "value">;

const Select = ({ value, options, name, label, ...props }: SelectProps) => {
  const ref =
    useRef<
      ReactSelectDeclaration<SelectOption, boolean, GroupBase<SelectOption>>
    >(null);
  const [isFocuses, setFocused] = useState(false);

  const findValueInOptions = (): SelectOption | undefined => {
    if (!options) {
      return undefined;
    }
    for (const option of options) {
      if (isGroupOption(option)) {
        const foundedOption = option.options.find((op) => op.value === value);
        if (foundedOption) {
          return foundedOption;
        }
        continue;
      }

      if (option.value === value) {
        return option;
      }
    }
  };

  // Check if have a value, if controlled check a value prop
  // If value is a multi, then check if have more that one element
  const hasValue = value
    ? Array.isArray(value)
      ? value.length
      : !!value
    : ref?.current?.hasValue();

  return (
    <div className="relative z-0 w-full ">
      <ReactSelect
        unstyled
        ref={ref}
        classNames={{
          control: ({ isFocused }) => {
            return classNames(
              "peer mt-0 block w-full appearance-none border-2 rounded bg-transparent px-3 pb-1 pt-6  border-gray-200 ",
              { "outline-none ring-0 border-primary bg-primary/10": isFocused }
            );
          },
          groupHeading: () => `text-gray text-sm pl-3 py-2 `,
          menu: () => `shadow-lg rounded mt-2`,
          group: ({}) => ``,
          valueContainer: () => `flex flex-wrap gap-1`,
          multiValue: () => `text-light text-xs py-1 px-1.5 rounded bg-primary`,
          dropdownIndicator: ({ hasValue, isMulti }) =>
            isMulti && hasValue
              ? "hidden"
              : `absolute top-4 right-3.5 text-gray`,
        }}
        components={{ Option: CustomOption, NoOptionsMessage: NoOptionMessage }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={props.isMulti ? [] : findValueInOptions()}
        options={options}
        placeholder=""
        onChange={console.log}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        {...props}
      />
      <label
        htmlFor={name}
        className={classNames(
          "-z-1 origin-0 absolute top-4 ml-3.5 duration-300 ",
          {
            "transform scale-75 -translate-y-3.5 opacity-100":
              isFocuses || hasValue,
            "text-primary ": isFocuses,
            "text-gray": !isFocuses,
          }
        )}
      >
        {label}
      </label>
    </div>
  );
};

const CustomOption = ({
  children,
  isFocused,
  isSelected,
  selectOption,
  isDisabled,
  isMulti,
  data,
}: OptionProps<SelectOption>) => {
  return (
    <div
      onClick={() => selectOption(data)}
      className={classNames(
        "px-2 py-2 flex items-center gap-1",
        isDisabled ? "cursor-not-allowed" : "cursor-pointer",
        {
          "bg-primary-100 ": isSelected,
          "bg-gray-100": isFocused,
        }
      )}
    >
      {!isMulti && isSelected && <Icon icon="check" className="text-primary" />}
      {isMulti && isSelected && <Icon icon="check" className="text-red-300" />}
      {data.renderOption ? data.renderOption() : children}
    </div>
  );
};

const NoOptionMessage = ({}) => {
  return <div className="px-2 py-2 text-center">Brak opcji</div>;
};
export default Select;
