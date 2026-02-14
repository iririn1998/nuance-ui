import { forwardRef } from "react";
import {
  Progress as MantineProgress,
  type ProgressProps as MantineProgressProps,
} from "@mantine/core";
import classes from "./Progress.module.css";

export interface NuProgressProps extends MantineProgressProps {}

/**
 * ニューモーフィズムスタイルの Progress コンポーネント
 */
export const NuProgress = forwardRef<HTMLDivElement, NuProgressProps>(
  ({ className, classNames, ...props }, ref) => {
    return (
      <MantineProgress
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        classNames={{
          section: classes.section,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuProgress.displayName = "NuProgress";
