import { Notification as MantineNotification, type NotificationProps as MantineNotificationProps } from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import className from './index.module.css';

export interface NuNotificationProps extends MantineNotificationProps {}

/**
 * ニューモーフィズムスタイルの Notification コンポーネント
 */
export const NuNotification = forwardRef<HTMLDivElement, NuNotificationProps>(
  ({ className: propsClassName, classNames, ...props }, ref) => {
    return (
      <MantineNotification
        ref={ref}
        className={clsx(className.root, propsClassName)}
        classNames={{
          closeButton: className.closeButton,
          ...classNames,
        }}
        {...props}
      />
    );
  },
);

NuNotification.displayName = 'NuNotification';
