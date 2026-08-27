import { MantineProvider } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React from 'react';

import {
  NuMenu,
  NuMenuTarget,
  NuMenuDropdown,
  NuMenuItem,
  NuMenuLabel,
  NuMenuDivider,
} from '.';
import { NuButton } from '../Button';

const onItemClickMock = fn();

const meta: Meta<typeof NuMenu> = {
  title: 'Components/Navigation/Menu',
  component: NuMenu,
  tags: ['autodocs'],
  beforeEach: () => {
    onItemClickMock.mockClear();
  },
  argTypes: {
    shadow: {
      control: 'text',
      description: 'ドロップダウンの影設定',
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'click-hover'],
      description: 'メニューを開くトリガー',
    },
    closeOnItemClick: {
      control: 'boolean',
      description: 'アイテム選択時にメニューを閉じるか',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuMenu>;

/** 基本的なニューモーフィズム Menu */
export const Default: Story = {
  render: (args) => (
    <NuMenu withinPortal={false} {...args}>
      <NuMenuTarget>
        <NuButton>Actions Menu</NuButton>
      </NuMenuTarget>
      <NuMenuDropdown>
        <NuMenuLabel>Application</NuMenuLabel>
        <NuMenuItem onClick={onItemClickMock}>Settings</NuMenuItem>
        <NuMenuItem onClick={onItemClickMock}>Messages</NuMenuItem>
        <NuMenuItem onClick={onItemClickMock}>Gallery</NuMenuItem>
        <NuMenuDivider />
        <NuMenuLabel>Danger zone</NuMenuLabel>
        <NuMenuItem color="red" onClick={onItemClickMock}>
          Delete account
        </NuMenuItem>
      </NuMenuDropdown>
    </NuMenu>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const targetButton = canvas.getByRole('button', { name: 'Actions Menu' });

    // 初期状態ではメニューアイテムが存在しない
    await expect(canvas.queryByRole('menuitem', { name: 'Settings' })).not.toBeInTheDocument();

    // ターゲットボタンをクリックしてメニューを開く
    await userEvent.click(targetButton);

    const settingsItem = await canvas.findByRole('menuitem', { name: 'Settings' });
    await expect(settingsItem).toBeVisible();

    const deleteItem = await canvas.findByRole('menuitem', { name: 'Delete account' });
    await expect(deleteItem).toBeVisible();

    // メニュー項目をクリック
    await userEvent.click(settingsItem);
    await expect(onItemClickMock).toHaveBeenCalledOnce();

    // クリック後にメニューが閉じることを確認
    await expect(canvas.queryByRole('menuitem', { name: 'Settings' })).not.toBeInTheDocument();
  },
};

/** アイコン付きメニュー項目 */
export const WithSections: Story = {
  render: () => (
    <NuMenu withinPortal={false}>
      <NuMenuTarget>
        <NuButton>User Menu</NuButton>
      </NuMenuTarget>
      <NuMenuDropdown>
        <NuMenuLabel>Account</NuMenuLabel>
        <NuMenuItem rightSection={<span style={{ fontSize: '11px', opacity: 0.6 }}>⌘K</span>}>
          Search
        </NuMenuItem>
        <NuMenuItem rightSection={<span style={{ fontSize: '11px', opacity: 0.6 }}>⌘S</span>}>
          Settings
        </NuMenuItem>
        <NuMenuDivider />
        <NuMenuItem color="red">Logout</NuMenuItem>
      </NuMenuDropdown>
    </NuMenu>
  ),
};

/** 無効化アイテムを含むメニュー */
export const DisabledItems: Story = {
  render: () => (
    <NuMenu withinPortal={false}>
      <NuMenuTarget>
        <NuButton>Options</NuButton>
      </NuMenuTarget>
      <NuMenuDropdown>
        <NuMenuItem>Active Action</NuMenuItem>
        <NuMenuItem disabled>Disabled Action</NuMenuItem>
        <NuMenuDivider />
        <NuMenuItem color="red" disabled>
          Disabled Danger Action
        </NuMenuItem>
      </NuMenuDropdown>
    </NuMenu>
  ),
};

/** ホバートリガー */
export const HoverTrigger: Story = {
  render: () => (
    <NuMenu trigger="hover" openDelay={100} closeDelay={200} withinPortal={false}>
      <NuMenuTarget>
        <NuButton>Hover over me</NuButton>
      </NuMenuTarget>
      <NuMenuDropdown>
        <NuMenuItem>Hover Item 1</NuMenuItem>
        <NuMenuItem>Hover Item 2</NuMenuItem>
      </NuMenuDropdown>
    </NuMenu>
  ),
};

function MenuPreview({ label }: { label: string }) {
  return (
    <NuMenu opened withinPortal={false}>
      <NuMenuTarget>
        <NuButton>{label}</NuButton>
      </NuMenuTarget>
      <NuMenuDropdown>
        <NuMenuLabel>Application</NuMenuLabel>
        <NuMenuItem>Settings</NuMenuItem>
        <NuMenuItem disabled>Disabled Item</NuMenuItem>
        <NuMenuDivider />
        <NuMenuItem color="red">Delete</NuMenuItem>
      </NuMenuDropdown>
    </NuMenu>
  );
}

/** ライトモードとダークモードの比較表示 */
export const LightAndDark: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div
        data-mantine-color-scheme="light"
        style={{
          padding: '2rem',
          backgroundColor: '#e0e5ec',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span style={{ fontWeight: 600, color: '#2d3436' }}>Light Mode</span>
        <MenuPreview label="Light Menu" />
      </div>

      <div
        data-mantine-color-scheme="dark"
        style={{
          padding: '2rem',
          backgroundColor: '#2d3436',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span style={{ fontWeight: 600, color: '#e0e5ec' }}>Dark Mode</span>
        <MantineProvider forceColorScheme="dark">
          <MenuPreview label="Dark Menu" />
        </MantineProvider>
      </div>
    </div>
  ),
};
