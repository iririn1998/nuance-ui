import { forwardRef } from "react";
import {
  Tabs as MantineTabs,
  type TabsProps as MantineTabsProps,
} from "@mantine/core";
import clsx from "clsx";
import className from "./Tabs.module.css";

export interface NuTabsProps extends MantineTabsProps {}

/**
 * ニューモーフィズムスタイルの Tabs コンポーネント
 */
export const NuTabs = forwardRef<HTMLDivElement, NuTabsProps>(
  ({ className: propsClassName, classNames, ...props }, ref) => {
    return (
      <MantineTabs
        ref={ref}
        variant="unstyled"
        className={clsx(className.root, propsClassName)}
        classNames={{
          list: className.list,
          tab: className.tab,
          panel: className.panel,
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
