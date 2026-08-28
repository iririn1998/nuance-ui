import {
  Menu as MantineMenu,
  type MenuProps as MantineMenuProps,
  type MenuTargetProps as MantineMenuTargetProps,
  type MenuDropdownProps as MantineMenuDropdownProps,
  type MenuItemProps as MantineMenuItemProps,
  type MenuLabelProps as MantineMenuLabelProps,
  type MenuDividerProps as MantineMenuDividerProps,
  createPolymorphicComponent,
} from '@mantine/core';

import className from './index.module.css';

export interface NuMenuProps extends MantineMenuProps {}
export interface NuMenuTargetProps extends MantineMenuTargetProps {}
export interface NuMenuDropdownProps extends MantineMenuDropdownProps {}
export interface NuMenuItemProps extends MantineMenuItemProps {}
export interface NuMenuLabelProps extends MantineMenuLabelProps {}
export interface NuMenuDividerProps extends MantineMenuDividerProps {}

/**
 * ニューモーフィズムスタイルの Menu コンポーネント
 */
export function NuMenu({ classNames, ...props }: NuMenuProps) {
  return (
    <MantineMenu
      classNames={{
        dropdown: className.dropdown,
        item: className.item,
        label: className.label,
        divider: className.divider,
        ...classNames,
      }}
      {...props}
    />
  );
}

NuMenu.displayName = 'NuMenu';

/** NuMenu のサブコンポーネント */
export const NuMenuTarget = MantineMenu.Target;
export const NuMenuDropdown = MantineMenu.Dropdown;
export const NuMenuItem = createPolymorphicComponent<'button', MantineMenuItemProps>(MantineMenu.Item);
export const NuMenuLabel = MantineMenu.Label;
export const NuMenuDivider = MantineMenu.Divider;

NuMenu.Target = NuMenuTarget;
NuMenu.Dropdown = NuMenuDropdown;
NuMenu.Item = NuMenuItem;
NuMenu.Label = NuMenuLabel;
NuMenu.Divider = NuMenuDivider;
