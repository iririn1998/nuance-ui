import { forwardRef } from "react";
import {
  TextInput as MantineTextInput,
  type TextInputProps as MantineTextInputProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "./TextInput.module.css";

export interface NuTextInputProps extends MantineTextInputProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの TextInput コンポーネント
 */
export const NuTextInput = forwardRef<HTMLInputElement, NuTextInputProps>(
  ({ neuVariant = "inset", className: propsClassName, classNames, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineTextInput
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

NuTextInput.displayName = "NuTextInput";
