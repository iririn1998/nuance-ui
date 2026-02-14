import { forwardRef } from "react";
import {
  Avatar as MantineAvatar,
  type AvatarProps as MantineAvatarProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "./Avatar.module.css";

export interface NuAvatarProps extends MantineAvatarProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Avatar コンポーネント
 */
export const NuAvatar = forwardRef<HTMLDivElement, NuAvatarProps>(
  ({ neuVariant = "raised", className, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineAvatar
        ref={ref}
        className={[classes.root, variantClass, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuAvatar.displayName = "NuAvatar";
