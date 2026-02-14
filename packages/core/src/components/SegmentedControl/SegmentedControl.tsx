import { forwardRef } from "react";
import {
  SegmentedControl as MantineSegmentedControl,
  type SegmentedControlProps as MantineSegmentedControlProps,
} from "@mantine/core";
import classes from "./SegmentedControl.module.css";

export interface NuSegmentedControlProps extends MantineSegmentedControlProps {}

/**
 * ニューモーフィズムスタイルの SegmentedControl コンポーネント
 */
export const NuSegmentedControl = forwardRef<HTMLDivElement, NuSegmentedControlProps>(
  ({ className, classNames, ...props }, ref) => {
    return (
      <MantineSegmentedControl
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        classNames={{
          indicator: classes.indicator,
          label: classes.label,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuSegmentedControl.displayName = "NuSegmentedControl";
