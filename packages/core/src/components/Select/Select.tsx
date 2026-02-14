import { forwardRef } from "react";
import {
  Select as MantineSelect,
  type SelectProps as MantineSelectProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "../TextInput/TextInput.module.css";

export interface NuSelectProps extends MantineSelectProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Select コンポーネント
 */
export const NuSelect = forwardRef<HTMLInputElement, NuSelectProps>(
  ({ neuVariant = "inset", className, classNames, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineSelect
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

NuSelect.displayName = "NuSelect";
