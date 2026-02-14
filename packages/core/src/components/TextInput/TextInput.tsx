import { forwardRef } from "react";
import {
  TextInput as MantineTextInput,
  type TextInputProps as MantineTextInputProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "./TextInput.module.css";

export interface NuTextInputProps extends MantineTextInputProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの TextInput コンポーネント
 */
export const NuTextInput = forwardRef<HTMLInputElement, NuTextInputProps>(
  ({ neuVariant = "inset", className, classNames, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineTextInput
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

NuTextInput.displayName = "NuTextInput";
