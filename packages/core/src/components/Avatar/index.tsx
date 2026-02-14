import { forwardRef } from "react";
import {
  Avatar as MantineAvatar,
  type AvatarProps as MantineAvatarProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "./Avatar.module.css";

export interface NuAvatarProps extends MantineAvatarProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Avatar コンポーネント
 */
export const NuAvatar = forwardRef<HTMLDivElement, NuAvatarProps>(
  ({ neuVariant = "raised", className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineAvatar
        ref={ref}
        className={clsx(className.root, variantClass, propsClassName)}
        {...props}
      />
    );
  }
);

NuAvatar.displayName = "NuAvatar";
