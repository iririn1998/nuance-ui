import { forwardRef } from "react";
import {
  SegmentedControl as MantineSegmentedControl,
  type SegmentedControlProps as MantineSegmentedControlProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./index.module.css";

export interface NuSegmentedControlProps extends MantineSegmentedControlProps {}

/**
 * ニューモーフィズムスタイルの SegmentedControl コンポーネント
 */
export const NuSegmentedControl = forwardRef<HTMLDivElement, NuSegmentedControlProps>(
  ({ className: propsClassName, classNames, ...props }, ref) => {
    return (
      <MantineSegmentedControl
        ref={ref}
        className={clsx(className.root, propsClassName)}
        classNames={{
          indicator: className.indicator,
          label: className.label,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuSegmentedControl.displayName = "NuSegmentedControl";
