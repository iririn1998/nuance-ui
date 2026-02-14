import { forwardRef } from "react";
import {
  PasswordInput as MantinePasswordInput,
  type PasswordInputProps as MantinePasswordInputProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "../TextInput/index.module.css";

export interface NuPasswordInputProps extends MantinePasswordInputProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの PasswordInput コンポーネント
 */
export const NuPasswordInput = forwardRef<HTMLInputElement, NuPasswordInputProps>(
  ({ neuVariant = "inset", className: propsClassName, classNames, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantinePasswordInput
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

NuPasswordInput.displayName = "NuPasswordInput";
