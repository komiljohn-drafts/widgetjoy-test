import { ChevronDown } from "lucide-react";
import React, { ReactNode } from "react";
import { Button, Key, Select as AriaSelect, SelectProps, SelectValue } from "react-aria-components";
import { Controller, FieldError as FieldErrorType, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { FieldError, Label } from "./field";
import MyListBox from "./list-box";
import { MyPopover } from "./popover";

interface FormSelectProps extends MySelectProps<{ [key: string]: string }> {
  name: string;
}

export function FormSelect({ name, ...props }: FormSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select {...props} error={error} selectedKey={field.value} onSelectionChange={field.onChange} />
      )}
    />
  );
}

interface MySelectProps<T extends object> extends Omit<SelectProps<T>, "children"> {
  icon?: ReactNode;
  label?: string;
  className?: string;
  error?: FieldErrorType;
  selectedKey?: Key;
  onSelectionChange?: (key: Key) => void;
  children: ReactNode;
}

export function Select<T extends object>({ children, ...props }: MySelectProps<T>) {
  return (
    <AriaSelect isInvalid={!!props.error?.message} {...props}>
      <Label isRequired={props.isRequired}>{props.label}</Label>
      <Button
        className={twMerge(
          "flex items-center gap-2 py-[9px] px-[13px] border border-border-primary rounded-md text-text-disabled font-medium dark:border-border-dark-primary w-full justify-between focus-ring",
          props.error?.message && "mb-1.5"
        )}
      >
        {!props.selectedKey && props.icon}
        <SelectValue className="flex gap-2 truncate" />
        <span aria-hidden="true">
          <ChevronDown size={20} className="text-tertiary-dark-600" />
        </span>
      </Button>
      <FieldError>{props.error?.message}</FieldError>
      <MyPopover>
        <MyListBox>{children}</MyListBox>
      </MyPopover>
    </AriaSelect>
  );
}
