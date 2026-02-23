import { Checkbox as MantineCheckbox, type CheckboxProps as MantineCheckboxProps } from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import className from './index.module.css';

export interface NuCheckboxProps extends MantineCheckboxProps {}

/**
 * ニューモーフィズムスタイルの Checkbox コンポーネント
 */
export const NuCheckbox = forwardRef<HTMLInputElement, NuCheckboxProps>(
  ({ className: propsClassName, classNames, ...props }, ref) => {
    return (
      <MantineCheckbox
        ref={ref}
        className={clsx(className.root, propsClassName)}
        classNames={{
          input: className.input,
          ...classNames,
        }}
        {...props}
      />
    );
  },
);

NuCheckbox.displayName = 'NuCheckbox';
