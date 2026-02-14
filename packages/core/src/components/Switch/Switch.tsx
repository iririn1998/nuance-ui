import { forwardRef } from "react";
import {
  Switch as MantineSwitch,
  type SwitchProps as MantineSwitchProps,
} from "@mantine/core";
import classes from "./Switch.module.css";

export interface NuSwitchProps extends MantineSwitchProps {}

/**
 * ニューモーフィズムスタイルの Switch コンポーネント
 */
export const NuSwitch = forwardRef<HTMLInputElement, NuSwitchProps>(
  ({ className, classNames, ...props }, ref) => {
    return (
      <MantineSwitch
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        classNames={{
          track: classes.track,
          thumb: classes.thumb,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuSwitch.displayName = "NuSwitch";
