import { forwardRef } from "react";
import {
  Paper as MantinePaper,
  type PaperProps as MantinePaperProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "./index.module.css";

export interface NuPaperProps extends MantinePaperProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Paper コンポーネント
 */
export const NuPaper = forwardRef<HTMLDivElement, NuPaperProps>(
  ({ neuVariant = "raised", className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantinePaper
        ref={ref}
        className={clsx(className.root, variantClass, propsClassName)}
        {...props}
      />
    );
  }
);

NuPaper.displayName = "NuPaper";
