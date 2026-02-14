import { forwardRef } from "react";
import {
  Paper as MantinePaper,
  type PaperProps as MantinePaperProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "./Paper.module.css";

export interface NuPaperProps extends MantinePaperProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Paper コンポーネント
 */
export const NuPaper = forwardRef<HTMLDivElement, NuPaperProps>(
  ({ neuVariant = "raised", className, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantinePaper
        ref={ref}
        className={[classes.root, variantClass, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuPaper.displayName = "NuPaper";
