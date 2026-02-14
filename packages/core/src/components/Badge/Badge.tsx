import { forwardRef } from "react";
import {
  Badge as MantineBadge,
  type BadgeProps as MantineBadgeProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "./Badge.module.css";

export interface NuBadgeProps extends Omit<MantineBadgeProps, "variant"> {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Badge コンポーネント
 */
export const NuBadge = forwardRef<HTMLDivElement, NuBadgeProps>(
  ({ neuVariant = "raised", className, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineBadge
        ref={ref}
        variant="default"
        className={[classes.root, variantClass, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuBadge.displayName = "NuBadge";
