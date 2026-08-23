import {
  ActionIcon as MantineActionIcon,
  type ActionIconProps as MantineActionIconProps,
  createPolymorphicComponent,
} from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { NeumorphismVariant } from '../../theme';

import className from './index.module.css';

export interface _NuActionIconProps extends Omit<MantineActionIconProps, 'variant'> {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの ActionIcon コンポーネント
 */
const _NuActionIcon = forwardRef<HTMLButtonElement, _NuActionIconProps>(
  ({ neuVariant = 'raised', className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineActionIcon
        ref={ref}
        variant="default"
        className={clsx(className.root, variantClass, propsClassName)}
        {...props}
      />
    );
  },
);

_NuActionIcon.displayName = 'NuActionIcon';

export const NuActionIcon = createPolymorphicComponent<'button', _NuActionIconProps>(_NuActionIcon);
export type NuActionIconProps = _NuActionIconProps;
