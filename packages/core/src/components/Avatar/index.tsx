import {
  Avatar as MantineAvatar,
  type AvatarProps as MantineAvatarProps,
  createPolymorphicComponent,
} from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { NeumorphismVariant } from '../../theme';

import className from './index.module.css';

export interface _NuAvatarProps extends MantineAvatarProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Avatar コンポーネント
 */
const _NuAvatar = forwardRef<HTMLDivElement, _NuAvatarProps>(
  ({ neuVariant = 'raised', className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return <MantineAvatar ref={ref} className={clsx(className.root, variantClass, propsClassName)} {...props} />;
  },
);

_NuAvatar.displayName = 'NuAvatar';

export const NuAvatar = createPolymorphicComponent<'div', _NuAvatarProps>(_NuAvatar);
export type NuAvatarProps = _NuAvatarProps;
