import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { NuTextInput } from './index';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('NuTextInput', () => {
  it('renders input with label', () => {
    renderWithMantine(<NuTextInput label="Username" placeholder="Enter username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('handles user typing', async () => {
    const user = userEvent.setup();
    renderWithMantine(<NuTextInput placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });

  it('applies inset variant class by default', () => {
    renderWithMantine(<NuTextInput placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    const root = input.closest('div.root');
    expect(root?.className).toContain('inset');
  });

  it('applies raised variant class when specified', () => {
    renderWithMantine(<NuTextInput neuVariant="raised" placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    const root = input.closest('div.root');
    expect(root?.className).toContain('raised');
  });
});
