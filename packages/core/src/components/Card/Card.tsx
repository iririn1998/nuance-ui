import { forwardRef } from "react";
import {
  Card as MantineCard,
  type CardProps as MantineCardProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "./Card.module.css";

export interface NuCardProps extends MantineCardProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Card コンポーネント
 */
export const NuCard = forwardRef<HTMLDivElement, NuCardProps>(
  ({ neuVariant = "raised", className, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineCard
        ref={ref}
        className={[classes.root, variantClass, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuCard.displayName = "NuCard";

/** NuCard.Section - Card のセクションコンポーネント */
export const NuCardSection = MantineCard.Section;
