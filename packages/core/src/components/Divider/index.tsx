import { forwardRef } from "react";
import {
  Divider as MantineDivider,
  type DividerProps as MantineDividerProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./Divider.module.css";

export interface NuDividerProps extends MantineDividerProps {}

/**
 * ニューモーフィズムスタイルの Divider コンポーネント
 */
export const NuDivider = forwardRef<HTMLDivElement, NuDividerProps>(
  ({ className: propsClassName, ...props }, ref) => {
    return (
      <MantineDivider
        ref={ref}
        className={clsx(className.root, propsClassName)}
        {...props}
      />
    );
  }
);

NuDivider.displayName = "NuDivider";
