import { forwardRef } from "react";
import {
  Slider as MantineSlider,
  type SliderProps as MantineSliderProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./Slider.module.css";

export interface NuSliderProps extends MantineSliderProps {}

/**
 * ニューモーフィズムスタイルの Slider コンポーネント
 */
export const NuSlider = forwardRef<HTMLDivElement, NuSliderProps>(
  ({ className: propsClassName, classNames, ...props }, ref) => {
    return (
      <MantineSlider
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

NuSlider.displayName = "NuSlider";
