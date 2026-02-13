import { forwardRef } from "react";
import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "./Button.module.css";

export interface NuButtonProps extends Omit<MantineButtonProps, "variant"> {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Button コンポーネント
 *
 * Mantine の Button をベースに、ニューモーフィズムの
 * raised (凸) / inset (凹) / flat スタイルを適用します。
 */
export const NuButton = forwardRef<HTMLButtonElement, NuButtonProps>(
  ({ neuVariant = "raised", className, size = "md", ...props }, ref) => {
    const sizeClass = {
      xs: classes.sizeXs,
      sm: classes.sizeSm,
      md: classes.sizeMd,
      lg: classes.sizeLg,
      xl: classes.sizeXl,
    }[size as string] ?? classes.sizeMd;

    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    const combinedClassName = [classes.root, variantClass, sizeClass, className]
      .filter(Boolean)
      .join(" ");

    return (
      <MantineButton
        ref={ref}
        variant="default"
        size={size}
        className={combinedClassName}
        {...props}
      />
    );
  }
);

NuButton.displayName = "NuButton";
