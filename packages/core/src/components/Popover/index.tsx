import {
  Popover as MantinePopover,
  type PopoverProps as MantinePopoverProps,
} from "@mantine/core";
import className from "./Popover.module.css";

export interface NuPopoverProps extends MantinePopoverProps {}

/**
 * ニューモーフィズムスタイルの Popover コンポーネント
 */
export function NuPopover({ classNames, ...props }: NuPopoverProps) {
  return (
    <MantinePopover
      classNames={{
        dropdown: className.dropdown,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuPopover.displayName = "NuPopover";

/** NuPopover のサブコンポーネント */
export const NuPopoverTarget = MantinePopover.Target;
export const NuPopoverDropdown = MantinePopover.Dropdown;
