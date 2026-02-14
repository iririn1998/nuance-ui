import { forwardRef } from "react";
import {
  Progress as MantineProgress,
  type ProgressProps as MantineProgressProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./index.module.css";

export interface NuProgressProps extends MantineProgressProps {}

/**
 * ニューモーフィズムスタイルの Progress コンポーネント
 */
export const NuProgress = forwardRef<HTMLDivElement, NuProgressProps>(
  ({ className: propsClassName, classNames, ...props }, ref) => {
    return (
      <MantineProgress
        ref={ref}
        className={clsx(className.root, propsClassName)}
        classNames={{
          section: className.section,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuProgress.displayName = "NuProgress";
