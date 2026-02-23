import { Badge as MantineBadge, type BadgeProps as MantineBadgeProps } from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { NeumorphismVariant } from '../../theme';

import className from './index.module.css';

export interface NuBadgeProps extends Omit<MantineBadgeProps, 'variant'> {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Badge コンポーネント
 */
export const NuBadge = forwardRef<HTMLDivElement, NuBadgeProps>(
  ({ neuVariant = 'raised', className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineBadge
        ref={ref}
        variant="default"
        className={clsx(className.root, variantClass, propsClassName)}
        {...props}
      />
    );
  },
);

NuBadge.displayName = 'NuBadge';
