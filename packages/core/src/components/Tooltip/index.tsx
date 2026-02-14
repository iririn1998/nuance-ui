import {
  Tooltip as MantineTooltip,
  type TooltipProps as MantineTooltipProps,
} from "@mantine/core";
import className from "./index.module.css";

export interface NuTooltipProps extends MantineTooltipProps {}

/**
 * ニューモーフィズムスタイルの Tooltip コンポーネント
 */
export function NuTooltip({ classNames, ...props }: NuTooltipProps) {
  return (
    <MantineTooltip
      classNames={{
        tooltip: className.tooltip,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuTooltip.displayName = "NuTooltip";
