import { MantineProvider } from '@mantine/core';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { NuMenu, NuMenuTarget, NuMenuDropdown, NuMenuItem, NuMenuLabel, NuMenuDivider } from './index';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('NuMenu', () => {
  it('renders target button and opens menu on click', async () => {
    const user = userEvent.setup();
    const onClickItem = vi.fn();

    renderWithMantine(
      <NuMenu transitionProps={{ duration: 0 }}>
        <NuMenuTarget>
          <button type="button">Menu Target</button>
        </NuMenuTarget>
        <NuMenuDropdown>
          <NuMenuLabel>Application</NuMenuLabel>
          <NuMenuItem onClick={onClickItem}>Settings</NuMenuItem>
          <NuMenuItem>Messages</NuMenuItem>
          <NuMenuDivider />
          <NuMenuItem color="red">Delete</NuMenuItem>
        </NuMenuDropdown>
      </NuMenu>,
    );

    const targetButton = screen.getByRole('button', { name: 'Menu Target' });
    expect(targetButton).toBeInTheDocument();

    // 最初はメニュー項目が表示されていない
    expect(screen.queryByRole('menuitem', { name: 'Settings' })).not.toBeInTheDocument();

    // ターゲットをクリックして開く
    await user.click(targetButton);
    const settingsItem = await screen.findByRole('menuitem', { name: 'Settings' });
    expect(settingsItem).toBeInTheDocument();

    // アイテムをクリック
    await user.click(settingsItem);
    expect(onClickItem).toHaveBeenCalledTimes(1);
  });

  it('supports keyboard navigation and interaction', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    renderWithMantine(
      <NuMenu transitionProps={{ duration: 0 }}>
        <NuMenuTarget>
          <button type="button">Open Menu</button>
        </NuMenuTarget>
        <NuMenuDropdown>
          <NuMenuItem onClick={onSelect}>Item 1</NuMenuItem>
          <NuMenuItem>Item 2</NuMenuItem>
        </NuMenuDropdown>
      </NuMenu>,
    );

    const targetButton = screen.getByRole('button', { name: 'Open Menu' });
    targetButton.focus();

    // Enter キーでメニューを開く
    await user.keyboard('{Enter}');
    const item1 = await screen.findByRole('menuitem', { name: 'Item 1' });
    expect(item1).toBeInTheDocument();

    // ArrowDown で移動して Enter で選択
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    expect(onSelect).toHaveBeenCalledTimes(1);

    // 選択後はメニューが閉じていることを確認
    await waitFor(() => {
      expect(screen.queryByRole('menuitem', { name: 'Item 1' })).not.toBeInTheDocument();
    });
  });

  it('closes menu on Escape key', async () => {
    const user = userEvent.setup();

    renderWithMantine(
      <NuMenu transitionProps={{ duration: 0 }}>
        <NuMenuTarget>
          <button type="button">Open Menu</button>
        </NuMenuTarget>
        <NuMenuDropdown>
          <NuMenuItem>Item 1</NuMenuItem>
        </NuMenuDropdown>
      </NuMenu>,
    );

    const targetButton = screen.getByRole('button', { name: 'Open Menu' });
    await user.click(targetButton);
    expect(await screen.findByRole('menuitem', { name: 'Item 1' })).toBeInTheDocument();

    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('menuitem', { name: 'Item 1' })).not.toBeInTheDocument();
    });
  });

  it('does not trigger onClick on disabled items', async () => {
    const user = userEvent.setup();
    const onClickDisabled = vi.fn();

    renderWithMantine(
      <NuMenu opened withinPortal={false}>
        <NuMenuTarget>
          <button type="button">Menu</button>
        </NuMenuTarget>
        <NuMenuDropdown>
          <NuMenuItem disabled onClick={onClickDisabled}>
            Disabled Action
          </NuMenuItem>
        </NuMenuDropdown>
      </NuMenu>,
    );

    const disabledItem = screen.getByRole('menuitem', { name: 'Disabled Action' });
    expect(disabledItem).toBeDisabled();

    await user.click(disabledItem, { pointerEventsCheck: 0 });
    expect(onClickDisabled).not.toHaveBeenCalled();
  });

  it('renders danger item with color prop', () => {
    renderWithMantine(
      <NuMenu opened withinPortal={false}>
        <NuMenuTarget>
          <button type="button">Menu</button>
        </NuMenuTarget>
        <NuMenuDropdown>
          <NuMenuItem color="red">Delete account</NuMenuItem>
        </NuMenuDropdown>
      </NuMenu>,
    );

    const dangerItem = screen.getByRole('menuitem', { name: 'Delete account' });
    expect(dangerItem).toBeInTheDocument();
    expect(dangerItem.getAttribute('style')).toContain('--menu-item-color');
  });

  it('works with compound components attached to NuMenu', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    renderWithMantine(
      <NuMenu transitionProps={{ duration: 0 }}>
        <NuMenu.Target>
          <button type="button">Compound Menu</button>
        </NuMenu.Target>
        <NuMenu.Dropdown>
          <NuMenu.Label>Header</NuMenu.Label>
          <NuMenu.Item onClick={onClick}>Compound Item</NuMenu.Item>
          <NuMenu.Divider />
        </NuMenu.Dropdown>
      </NuMenu>,
    );

    await user.click(screen.getByRole('button', { name: 'Compound Menu' }));
    const item = await screen.findByRole('menuitem', { name: 'Compound Item' });
    expect(item).toBeInTheDocument();
    await user.click(item);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom classNames alongside default neumorphic classes', () => {
    renderWithMantine(
      <NuMenu
        opened
        withinPortal={false}
        classNames={{
          dropdown: 'custom-dropdown',
          item: 'custom-item',
        }}
      >
        <NuMenuTarget>
          <button type="button">Menu</button>
        </NuMenuTarget>
        <NuMenuDropdown>
          <NuMenuItem>Item</NuMenuItem>
        </NuMenuDropdown>
      </NuMenu>,
    );

    const dropdown = screen.getByRole('menu');
    expect(dropdown.className).toContain('custom-dropdown');

    const item = screen.getByRole('menuitem', { name: 'Item' });
    expect(item.className).toContain('custom-item');
  });

  it('renders label and divider correctly', () => {
    renderWithMantine(
      <NuMenu opened withinPortal={false}>
        <NuMenuTarget>
          <button type="button">Menu</button>
        </NuMenuTarget>
        <NuMenuDropdown>
          <NuMenuLabel>Navigation</NuMenuLabel>
          <NuMenuItem>Dashboard</NuMenuItem>
          <NuMenuDivider data-testid="menu-divider" />
        </NuMenuDropdown>
      </NuMenu>,
    );

    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByTestId('menu-divider')).toBeInTheDocument();
  });
});
