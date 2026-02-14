import { forwardRef } from "react";
import {
  Skeleton as MantineSkeleton,
  type SkeletonProps as MantineSkeletonProps,
} from "@mantine/core";
import classes from "./Skeleton.module.css";

export interface NuSkeletonProps extends MantineSkeletonProps {}

/**
 * ニューモーフィズムスタイルの Skeleton コンポーネント
 */
export const NuSkeleton = forwardRef<HTMLDivElement, NuSkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <MantineSkeleton
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuSkeleton.displayName = "NuSkeleton";
