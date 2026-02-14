import { forwardRef } from "react";
import {
  Loader as MantineLoader,
  type LoaderProps as MantineLoaderProps,
} from "@mantine/core";
import classes from "./Loader.module.css";

export interface NuLoaderProps extends MantineLoaderProps {}

/**
 * ニューモーフィズムスタイルの Loader コンポーネント
 */
export const NuLoader = forwardRef<HTMLSpanElement, NuLoaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <MantineLoader
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuLoader.displayName = "NuLoader";
