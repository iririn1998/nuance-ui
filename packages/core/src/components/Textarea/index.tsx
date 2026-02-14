import { forwardRef } from "react";
import {
  Textarea as MantineTextarea,
  type TextareaProps as MantineTextareaProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "../TextInput/index.module.css";

export interface NuTextareaProps extends MantineTextareaProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Textarea コンポーネント
 */
export const NuTextarea = forwardRef<HTMLTextAreaElement, NuTextareaProps>(
  ({ neuVariant = "inset", className: propsClassName, classNames, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineTextarea
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

NuTextarea.displayName = "NuTextarea";
