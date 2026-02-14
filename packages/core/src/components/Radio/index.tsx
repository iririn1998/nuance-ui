import { forwardRef } from "react";
import {
  Radio as MantineRadio,
  type RadioProps as MantineRadioProps,
  type RadioGroupProps as MantineRadioGroupProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./index.module.css";

export interface NuRadioProps extends MantineRadioProps {}

/**
 * ニューモーフィズムスタイルの Radio コンポーネント
 */
export const NuRadio = forwardRef<HTMLInputElement, NuRadioProps>(
  ({ className: propsClassName, classNames, ...props }, ref) => {
    return (
      <MantineRadio
        ref={ref}
        className={clsx(className.root, propsClassName)}
        classNames={{
          radio: className.radio,
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
