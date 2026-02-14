import {
  Drawer as MantineDrawer,
  type DrawerProps as MantineDrawerProps,
} from "@mantine/core";
import classes from "./Drawer.module.css";

export interface NuDrawerProps extends MantineDrawerProps {}

/**
 * ニューモーフィズムスタイルの Drawer コンポーネント
 */
export function NuDrawer({ classNames, ...props }: NuDrawerProps) {
  return (
    <MantineDrawer
      classNames={{
        content: classes.content,
        header: classes.header,
        body: classes.body,
        close: classes.close,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuDrawer.displayName = "NuDrawer";
