import { forwardRef } from "react";
import {
  Select as MantineSelect,
  type SelectProps as MantineSelectProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "../TextInput/index.module.css";

export interface NuSelectProps extends MantineSelectProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Select コンポーネント
 */
export const NuSelect = forwardRef<HTMLInputElement, NuSelectProps>(
  ({ neuVariant = "inset", className: propsClassName, classNames, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineSelect
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

NuSelect.displayName = "NuSelect";
