import { forwardRef } from "react";
import {
  Divider as MantineDivider,
  type DividerProps as MantineDividerProps,
} from "@mantine/core";
import classes from "./Divider.module.css";

export interface NuDividerProps extends MantineDividerProps {}

/**
 * ニューモーフィズムスタイルの Divider コンポーネント
 */
export const NuDivider = forwardRef<HTMLDivElement, NuDividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <MantineDivider
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuDivider.displayName = "NuDivider";
