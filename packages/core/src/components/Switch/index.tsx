import { forwardRef } from "react";
import {
  Switch as MantineSwitch,
  type SwitchProps as MantineSwitchProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./Switch.module.css";

export interface NuSwitchProps extends MantineSwitchProps {}

/**
 * ニューモーフィズムスタイルの Switch コンポーネント
 */
export const NuSwitch = forwardRef<HTMLInputElement, NuSwitchProps>(
  ({ className: propsClassName, classNames, ...props }, ref) => {
    return (
      <MantineSwitch
        ref={ref}
        className={clsx(className.root, propsClassName)}
        classNames={{
          track: className.track,
          thumb: className.thumb,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuSwitch.displayName = "NuSwitch";
