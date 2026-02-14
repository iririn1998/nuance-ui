import {
  Tooltip as MantineTooltip,
  type TooltipProps as MantineTooltipProps,
} from "@mantine/core";
import classes from "./Tooltip.module.css";

export interface NuTooltipProps extends MantineTooltipProps {}

/**
 * ニューモーフィズムスタイルの Tooltip コンポーネント
 */
export function NuTooltip({ classNames, ...props }: NuTooltipProps) {
  return (
    <MantineTooltip
      classNames={{
        tooltip: classes.tooltip,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuTooltip.displayName = "NuTooltip";
