import { createPolymorphicComponent, Paper as MantinePaper, type PaperProps as MantinePaperProps } from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { NeumorphismVariant } from '../../theme';

import className from './index.module.css';

export interface _NuPaperProps extends MantinePaperProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Paper コンポーネント
 */
const _NuPaper = forwardRef<HTMLDivElement, _NuPaperProps>(
  ({ neuVariant = 'raised', className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return <MantinePaper ref={ref} className={clsx(className.root, variantClass, propsClassName)} {...props} />;
  },
);

_NuPaper.displayName = 'NuPaper';

export const NuPaper = createPolymorphicComponent<'div', _NuPaperProps>(_NuPaper);
export type NuPaperProps = _NuPaperProps;
