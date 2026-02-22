import React, { forwardRef } from "react";
import {
  Card as MantineCard,
  type CardProps as MantineCardProps,
  type CardSectionProps,
} from "@mantine/core";
import clsx from "clsx";
import type { NeumorphismVariant } from "../../theme";
import className from "./index.module.css";

export interface NuCardProps extends MantineCardProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Card コンポーネント
 */
export const NuCard = forwardRef<HTMLDivElement, NuCardProps>(
  ({ neuVariant = "raised", className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineCard
        ref={ref}
        className={clsx(className.root, variantClass, propsClassName)}
        {...props}
      />
    );
  }
);

NuCard.displayName = "NuCard";

/** NuCard.Section - Card のセクションコンポーネント */
export const NuCardSection: React.FC<CardSectionProps> = MantineCard.Section;
