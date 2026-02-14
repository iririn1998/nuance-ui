import {
  Drawer as MantineDrawer,
  type DrawerProps as MantineDrawerProps,
} from "@mantine/core";
import className from "./index.module.css";

export interface NuDrawerProps extends MantineDrawerProps {}

/**
 * ニューモーフィズムスタイルの Drawer コンポーネント
 */
export function NuDrawer({ classNames, ...props }: NuDrawerProps) {
  return (
    <MantineDrawer
      classNames={{
        content: className.content,
        header: className.header,
        body: className.body,
        close: className.close,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuDrawer.displayName = "NuDrawer";
