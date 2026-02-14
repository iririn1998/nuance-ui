import { forwardRef } from "react";
import {
  ActionIcon as MantineActionIcon,
  type ActionIconProps as MantineActionIconProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "./index.module.css";

export interface NuActionIconProps extends Omit<MantineActionIconProps, "variant"> {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの ActionIcon コンポーネント
 */
export const NuActionIcon = forwardRef<HTMLButtonElement, NuActionIconProps>(
  ({ neuVariant = "raised", className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineActionIcon
        ref={ref}
        variant="default"
        className={clsx(className.root, variantClass, propsClassName)}
        {...props}
      />
    );
  }
);

NuActionIcon.displayName = "NuActionIcon";
