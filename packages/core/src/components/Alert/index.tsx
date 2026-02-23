import { Alert as MantineAlert, type AlertProps as MantineAlertProps } from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { NeumorphismVariant } from '../../theme';

import className from './index.module.css';

export interface NuAlertProps extends MantineAlertProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Alert コンポーネント
 */
export const NuAlert = forwardRef<HTMLDivElement, NuAlertProps>(
  ({ neuVariant = 'raised', className: propsClassName, ...props }, ref) => {
    const variantClass = {
      raised: className.raised,
      inset: className.inset,
      flat: className.flat,
    }[neuVariant];

    return (
      <MantineAlert
        ref={ref}
        variant="default"
        className={clsx(className.root, variantClass, propsClassName)}
        {...props}
      />
    );
  },
);

NuAlert.displayName = 'NuAlert';
