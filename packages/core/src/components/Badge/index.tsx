import { Badge as MantineBadge, type BadgeProps as MantineBadgeProps, createPolymorphicComponent } from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { NeumorphismVariant } from '../../theme';

import className from './index.module.css';

export interface _NuBadgeProps extends Omit<MantineBadgeProps, 'variant'> {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Badge コンポーネント
 */
const _NuBadge = forwardRef<HTMLDivElement, _NuBadgeProps>(
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

_NuBadge.displayName = 'NuBadge';

export const NuBadge = createPolymorphicComponent<'div', _NuBadgeProps>(_NuBadge);
export type NuBadgeProps = _NuBadgeProps;
