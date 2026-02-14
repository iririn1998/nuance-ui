import { forwardRef } from "react";
import {
  Slider as MantineSlider,
  type SliderProps as MantineSliderProps,
} from "@mantine/core";
import classes from "./Slider.module.css";

export interface NuSliderProps extends MantineSliderProps {}

/**
 * ニューモーフィズムスタイルの Slider コンポーネント
 */
export const NuSlider = forwardRef<HTMLDivElement, NuSliderProps>(
  ({ className, classNames, ...props }, ref) => {
    return (
      <MantineSlider
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

NuSlider.displayName = "NuSlider";
