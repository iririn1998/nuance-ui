import { forwardRef } from "react";
import {
  Textarea as MantineTextarea,
  type TextareaProps as MantineTextareaProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "../TextInput/TextInput.module.css";

export interface NuTextareaProps extends MantineTextareaProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Textarea コンポーネント
 */
export const NuTextarea = forwardRef<HTMLTextAreaElement, NuTextareaProps>(
  ({ neuVariant = "inset", className, classNames, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineTextarea
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

NuTextarea.displayName = "NuTextarea";
