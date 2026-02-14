import { forwardRef } from "react";
import {
  MultiSelect as MantineMultiSelect,
  type MultiSelectProps as MantineMultiSelectProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "../TextInput/TextInput.module.css";

export interface NuMultiSelectProps extends MantineMultiSelectProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの MultiSelect コンポーネント
 */
export const NuMultiSelect = forwardRef<HTMLInputElement, NuMultiSelectProps>(
  ({ neuVariant = "inset", className: propsClassName, classNames, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineMultiSelect
        ref={ref}
        className={clsx(className.root, variantClass, propsClassName)}
        classNames={{
          input: className.input,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuMultiSelect.displayName = "NuMultiSelect";
