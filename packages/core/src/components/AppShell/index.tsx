import {
  AppShell as MantineAppShell,
  type AppShellProps as MantineAppShellProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./index.module.css";

export interface NuAppShellProps extends MantineAppShellProps {}

/**
 * ニューモーフィズムスタイルの AppShell コンポーネント
 */
export function NuAppShell({ className: propsClassName, classNames, ...props }: NuAppShellProps) {
  return (
    <MantineAppShell
      className={clsx(className.root, propsClassName)}
      classNames={{
        header: className.header,
        navbar: className.navbar,
        main: className.main,
        footer: className.footer,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuAppShell.displayName = "NuAppShell";

/** NuAppShell のサブコンポーネント */
export const NuAppShellHeader = MantineAppShell.Header;
export const NuAppShellNavbar = MantineAppShell.Navbar;
export const NuAppShellMain = MantineAppShell.Main;
export const NuAppShellFooter = MantineAppShell.Footer;
export const NuAppShellSection = MantineAppShell.Section;
