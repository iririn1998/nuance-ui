import { forwardRef } from "react";
import {
  PasswordInput as MantinePasswordInput,
  type PasswordInputProps as MantinePasswordInputProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "../TextInput/TextInput.module.css";

export interface NuPasswordInputProps extends MantinePasswordInputProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの PasswordInput コンポーネント
 */
export const NuPasswordInput = forwardRef<HTMLInputElement, NuPasswordInputProps>(
  ({ neuVariant = "inset", className, classNames, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantinePasswordInput
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

NuPasswordInput.displayName = "NuPasswordInput";
