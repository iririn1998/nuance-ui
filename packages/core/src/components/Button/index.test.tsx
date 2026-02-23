import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { NuButton } from './index';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('NuButton', () => {
  it('renders children correctly', () => {
    renderWithMantine(<NuButton>Click me</NuButton>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies raised variant class by default', () => {
    renderWithMantine(<NuButton>Raised</NuButton>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('raised');
  });

  it('applies inset variant class', () => {
    renderWithMantine(<NuButton neuVariant="inset">Inset</NuButton>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('inset');
  });

  it('applies flat variant class', () => {
    renderWithMantine(<NuButton neuVariant="flat">Flat</NuButton>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('flat');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    let clicked = false;
    renderWithMantine(
      <NuButton
        onClick={() => {
          clicked = true;
        }}
      >
        Click
      </NuButton>,
    );
    await user.click(screen.getByRole('button'));
    expect(clicked).toBe(true);
  });

  it('can be disabled', () => {
    renderWithMantine(<NuButton disabled>Disabled</NuButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('forwards ref', () => {
    let buttonRef: HTMLButtonElement | null = null;
    renderWithMantine(
      <NuButton
        ref={(el) => {
          buttonRef = el;
        }}
      >
        Ref
      </NuButton>,
    );
    expect(buttonRef).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies size classes', () => {
    renderWithMantine(<NuButton size="lg">Large</NuButton>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('sizeLg');
  });
});
