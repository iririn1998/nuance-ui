import {
  Card as MantineCard,
  type CardProps as MantineCardProps,
  type CardSection,
  createPolymorphicComponent,
} from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { NeumorphismVariant } from '../../theme';

import className from './index.module.css';

export interface _NuCardProps extends MantineCardProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Card コンポーネント
 */
const _NuCard = forwardRef<HTMLDivElement, _NuCardProps>(
  ({ neuVariant = 'raised', className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return <MantineCard ref={ref} className={clsx(className.root, variantClass, propsClassName)} {...props} />;
  },
);

_NuCard.displayName = 'NuCard';

export const NuCard = createPolymorphicComponent<'div', _NuCardProps>(_NuCard);
export type NuCardProps = _NuCardProps;

/** NuCard.Section - Card のセクションコンポーネント */
export const NuCardSection: typeof CardSection = MantineCard.Section;
