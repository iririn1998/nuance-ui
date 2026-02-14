import { forwardRef } from "react";
import {
  Tabs as MantineTabs,
  type TabsProps as MantineTabsProps,
} from "@mantine/core";
import classes from "./Tabs.module.css";

export interface NuTabsProps extends MantineTabsProps {}

/**
 * ニューモーフィズムスタイルの Tabs コンポーネント
 */
export const NuTabs = forwardRef<HTMLDivElement, NuTabsProps>(
  ({ className, classNames, ...props }, ref) => {
    return (
      <MantineTabs
        ref={ref}
        variant="unstyled"
        className={[classes.root, className].filter(Boolean).join(" ")}
        classNames={{
          list: classes.list,
          tab: classes.tab,
          panel: classes.panel,
          ...classNames,
        }}
        {...props}
      />
    );
  }
);

NuTabs.displayName = "NuTabs";

/** NuTabs のサブコンポーネント */
export const NuTabsList = MantineTabs.List;
export const NuTabsTab = MantineTabs.Tab;
export const NuTabsPanel = MantineTabs.Panel;
