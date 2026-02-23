import { Skeleton as MantineSkeleton, type SkeletonProps as MantineSkeletonProps } from '@mantine/core';
import clsx from 'clsx';
import { forwardRef } from 'react';

import className from './index.module.css';

export interface NuSkeletonProps extends MantineSkeletonProps {}

/**
 * ニューモーフィズムスタイルの Skeleton コンポーネント
 */
export const NuSkeleton = forwardRef<HTMLDivElement, NuSkeletonProps>(
  ({ className: propsClassName, ...props }, ref) => {
    return <MantineSkeleton ref={ref} className={clsx(className.root, propsClassName)} {...props} />;
  },
);

NuSkeleton.displayName = 'NuSkeleton';
