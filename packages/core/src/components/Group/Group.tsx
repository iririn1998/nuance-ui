import { forwardRef } from "react";
import {
  Group as MantineGroup,
  type GroupProps as MantineGroupProps,
} from "@mantine/core";

export interface NuGroupProps extends MantineGroupProps {}

/**
 * NuGroup - レイアウト用の Group コンポーネント
 * Mantine の Group をそのまま再エクスポート (ニューモーフィズムの影響を受けないレイアウトコンポーネント)
 */
export const NuGroup = forwardRef<HTMLDivElement, NuGroupProps>(
  (props, ref) => {
    return <MantineGroup ref={ref} {...props} />;
  }
);

NuGroup.displayName = "NuGroup";
