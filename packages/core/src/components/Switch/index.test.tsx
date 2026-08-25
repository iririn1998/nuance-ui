import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { NuSwitch } from './index';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('NuSwitch', () => {
  it('renders switch with label', () => {
    renderWithMantine(<NuSwitch label="Toggle dark mode" />);
    expect(screen.getByLabelText('Toggle dark mode')).toBeInTheDocument();
  });

  it('handles toggle changes', async () => {
    const user = userEvent.setup();
    let checked = false;
    renderWithMantine(
      <NuSwitch
        label="Toggle"
        onChange={(e) => {
          checked = e.currentTarget.checked;
        }}
      />,
    );
    const input = screen.getByRole('switch');
    await user.click(input);
    expect(checked).toBe(true);
  });
});
