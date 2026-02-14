import { forwardRef } from "react";
import {
  Loader as MantineLoader,
  type LoaderProps as MantineLoaderProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./index.module.css";

export interface NuLoaderProps extends MantineLoaderProps {}

/**
 * ニューモーフィズムスタイルの Loader コンポーネント
 */
export const NuLoader = forwardRef<HTMLSpanElement, NuLoaderProps>(
  ({ className: propsClassName, ...props }, ref) => {
    return (
      <MantineLoader
        ref={ref}
        className={clsx(className.root, propsClassName)}
        {...props}
      />
    );
  }
);

NuLoader.displayName = "NuLoader";
