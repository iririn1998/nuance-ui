import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
  createPolymorphicComponent,
} from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { NeumorphismVariant } from '../../theme';

import className from './index.module.css';

export interface _NuButtonProps extends Omit<MantineButtonProps, 'variant'> {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Button コンポーネント
 *
 * Mantine の Button をベースに、ニューモーフィズムの
 * raised (凸) / inset (凹) / flat スタイルを適用します。
 */
const _NuButton = forwardRef<HTMLButtonElement, _NuButtonProps>(
  ({ neuVariant = 'raised', className: propsClassName, size = 'md', ...props }, ref) => {
    const sizeClass =
      {
        xs: className.sizeXs,
        sm: className.sizeSm,
        md: className.sizeMd,
        lg: className.sizeLg,
        xl: className.sizeXl,
      }[size as string] ?? className.sizeMd;

    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    const combinedClassName = clsx(className.root, variantClass, sizeClass, propsClassName);

    return <MantineButton ref={ref} variant="default" size={size} className={combinedClassName} {...props} />;
  },
);

_NuButton.displayName = 'NuButton';

export const NuButton = createPolymorphicComponent<'button', _NuButtonProps>(_NuButton);
export type NuButtonProps = _NuButtonProps;
