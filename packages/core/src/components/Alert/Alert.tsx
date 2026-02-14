import { forwardRef } from "react";
import {
  Alert as MantineAlert,
  type AlertProps as MantineAlertProps,
} from "@mantine/core";
import type { NeumorphismVariant } from "../../theme";
import classes from "./Alert.module.css";

export interface NuAlertProps extends MantineAlertProps {
  /** ニューモーフィズムの variant */
  neuVariant?: NeumorphismVariant;
}

/**
 * ニューモーフィズムスタイルの Alert コンポーネント
 */
export const NuAlert = forwardRef<HTMLDivElement, NuAlertProps>(
  ({ neuVariant = "raised", className, ...props }, ref) => {
    const variantClass = {
      raised: classes.raised,
      inset: classes.inset,
      flat: classes.flat,
    }[neuVariant];

    return (
      <MantineAlert
        ref={ref}
        variant="default"
        className={[classes.root, variantClass, className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NuAlert.displayName = "NuAlert";
