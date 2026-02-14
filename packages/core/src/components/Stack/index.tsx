import { forwardRef } from "react";
import {
  Stack as MantineStack,
  type StackProps as MantineStackProps,
} from "@mantine/core";

export interface NuStackProps extends MantineStackProps {}

/**
 * NuStack - レイアウト用の Stack コンポーネント
 * Mantine の Stack をそのまま再エクスポート (ニューモーフィズムの影響を受けないレイアウトコンポーネント)
 */
export const NuStack = forwardRef<HTMLDivElement, NuStackProps>(
  (props, ref) => {
    return <MantineStack ref={ref} {...props} />;
  }
);

NuStack.displayName = "NuStack";
