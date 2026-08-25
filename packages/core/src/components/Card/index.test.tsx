import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { NuCard, NuCardSection } from './index';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('NuCard', () => {
  it('renders children correctly', () => {
    renderWithMantine(<NuCard>Card Content</NuCard>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies raised variant class by default', () => {
    renderWithMantine(<NuCard>Raised Card</NuCard>);
    const element = screen.getByText('Raised Card');
    expect(element.className).toContain('raised');
  });

  it('applies inset variant class', () => {
    renderWithMantine(<NuCard neuVariant="inset">Inset Card</NuCard>);
    const element = screen.getByText('Inset Card');
    expect(element.className).toContain('inset');
  });

  it('applies flat variant class', () => {
    renderWithMantine(<NuCard neuVariant="flat">Flat Card</NuCard>);
    const element = screen.getByText('Flat Card');
    expect(element.className).toContain('flat');
  });

  it('renders NuCardSection inside NuCard', () => {
    renderWithMantine(
      <NuCard>
        <NuCardSection>Section 1</NuCardSection>
        <div>Body</div>
      </NuCard>,
    );
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});
