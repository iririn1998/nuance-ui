import { forwardRef } from "react";
import {
  Notification as MantineNotification,
  type NotificationProps as MantineNotificationProps,
} from "@mantine/core";
import classes from "./Notification.module.css";

export interface NuNotificationProps extends MantineNotificationProps {}

/**
 * ニューモーフィズムスタイルの Notification コンポーネント
 */
export const NuNotification = forwardRef<HTMLDivElement, NuNotificationProps>(
  ({ className, classNames, ...props }, ref) => {
    return (
      <MantineNotification
        ref={ref}
        className={[classes.root, className].filter(Boolean).join(" ")}
        classNames={{
          closeButton: classes.closeButton,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuNotification.displayName = "NuNotification";
