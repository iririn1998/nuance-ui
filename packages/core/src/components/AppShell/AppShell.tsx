import {
  AppShell as MantineAppShell,
  type AppShellProps as MantineAppShellProps,
} from "@mantine/core";
import classes from "./AppShell.module.css";

export interface NuAppShellProps extends MantineAppShellProps {}

/**
 * ニューモーフィズムスタイルの AppShell コンポーネント
 */
export function NuAppShell({ className, classNames, ...props }: NuAppShellProps) {
  return (
    <MantineAppShell
      className={[classes.root, className].filter(Boolean).join(" ")}
      classNames={{
        header: classes.header,
        navbar: classes.navbar,
        main: classes.main,
        footer: classes.footer,
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
