import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { NuButton } from '.';

// クリックハンドラーのモック（play 関数内で spy として参照する）
const onClickMock = fn();

const meta: Meta<typeof NuButton> = {
  title: 'Components/Buttons/Button',
  component: NuButton,
  tags: ['autodocs'],
  beforeEach: () => {
    onClickMock.mockClear();
  },
  argTypes: {
    neuVariant: {
      control: 'select',
      options: ['raised', 'inset', 'flat'],
      description: 'ニューモーフィズムの variant',
      table: {
        defaultValue: { summary: 'raised' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'ボタンのサイズ',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '無効化状態',
    },
    children: {
      control: 'text',
      description: 'ボタンのラベル',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NuButton>;

/** 凸 (Raised) - デフォルトのニューモーフィズムスタイル */
export const Raised: Story = {
  args: {
    children: 'Raised Button',
    neuVariant: 'raised',
    size: 'md',
    onClick: onClickMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Raised Button' });

    // ボタンが表示されており、クリック可能であることを確認する
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();

    // クリックイベントが発火されることを確認する
    await userEvent.click(button);
    await expect(onClickMock).toHaveBeenCalledOnce();
  },
};

/** 凹 (Inset) - 押し込まれたスタイル */
export const Inset: Story = {
  args: {
    children: 'Inset Button',
    neuVariant: 'inset',
    size: 'md',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Inset Button' });

    // inset variant のクラスが付与されているか確認する
    await expect(button).toBeVisible();
    await expect(button.className).toContain('inset');
  },
};

/** フラット - ホバー時に浮き出るスタイル */
export const Flat: Story = {
  args: {
    children: 'Flat Button',
    neuVariant: 'flat',
    size: 'md',
  },
};

/** 無効化状態 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    neuVariant: 'raised',
    disabled: true,
    onClick: onClickMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Disabled Button' });

    // disabled 状態のボタンはクリックできないことを確認する
    await expect(button).toBeDisabled();
    await userEvent.click(button, { pointerEventsCheck: 0 });
    await expect(onClickMock).not.toHaveBeenCalled();
  },
};

/** 全サイズの一覧 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
      <NuButton size="xs">XS</NuButton>
      <NuButton size="sm">SM</NuButton>
      <NuButton size="md">MD</NuButton>
      <NuButton size="lg">LG</NuButton>
      <NuButton size="xl">XL</NuButton>
    </div>
  ),
};

/** 全 Variant の一覧 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
      <NuButton neuVariant="raised">Raised</NuButton>
      <NuButton neuVariant="inset">Inset</NuButton>
      <NuButton neuVariant="flat">Flat</NuButton>
    </div>
  ),
};
