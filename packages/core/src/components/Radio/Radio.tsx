import { forwardRef } from "react";
import {
  Radio as MantineRadio,
  type RadioProps as MantineRadioProps,
  type RadioGroupProps as MantineRadioGroupProps,
} from "@mantine/core";
import classes from "./Radio.module.css";

export interface NuRadioProps extends MantineRadioProps {}

/**
 * ニューモーフィズムスタイルの Radio コンポーネント
 */
export const NuRadio = forwardRef<HTMLInputElement, NuRadioProps>(
  ({ className, classNames, ...props }, ref) => {
    return (
      <MantineRadio
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        classNames={{
          radio: classes.radio,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuRadio.displayName = "NuRadio";

export interface NuRadioGroupProps extends MantineRadioGroupProps {}

/**
 * NuRadio.Group - Radio のグループコンポーネント
 */
export const NuRadioGroup = MantineRadio.Group;
