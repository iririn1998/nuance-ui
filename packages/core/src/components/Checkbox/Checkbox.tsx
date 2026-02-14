import { forwardRef } from "react";
import {
  Checkbox as MantineCheckbox,
  type CheckboxProps as MantineCheckboxProps,
} from "@mantine/core";
import classes from "./Checkbox.module.css";

export interface NuCheckboxProps extends MantineCheckboxProps {}

/**
 * ニューモーフィズムスタイルの Checkbox コンポーネント
 */
export const NuCheckbox = forwardRef<HTMLInputElement, NuCheckboxProps>(
  ({ className, classNames, ...props }, ref) => {
    return (
      <MantineCheckbox
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        classNames={{
          input: classes.input,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuCheckbox.displayName = "NuCheckbox";
