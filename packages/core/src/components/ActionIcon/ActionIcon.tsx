import { forwardRef } from "react";
import {
  ActionIcon as MantineActionIcon,
  type ActionIconProps as MantineActionIconProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "./ActionIcon.module.css";

export interface NuActionIconProps extends Omit<MantineActionIconProps, "variant"> {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの ActionIcon コンポーネント
 */
export const NuActionIcon = forwardRef<HTMLButtonElement, NuActionIconProps>(
  ({ neuVariant = "raised", className, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineActionIcon
        ref={ref}
        variant="default"
        className={[classes.root, variantClass, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuActionIcon.displayName = "NuActionIcon";
