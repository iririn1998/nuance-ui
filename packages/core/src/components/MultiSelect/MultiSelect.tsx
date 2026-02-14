import { forwardRef } from "react";
import {
  MultiSelect as MantineMultiSelect,
  type MultiSelectProps as MantineMultiSelectProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "../TextInput/TextInput.module.css";

export interface NuMultiSelectProps extends MantineMultiSelectProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの MultiSelect コンポーネント
 */
export const NuMultiSelect = forwardRef<HTMLInputElement, NuMultiSelectProps>(
  ({ neuVariant = "inset", className, classNames, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineMultiSelect
        ref={ref}
        className={[classes.root, variantClass, className].filter(Boolean).join(" ")}
        classNames={{
          input: classes.input,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuMultiSelect.displayName = "NuMultiSelect";
