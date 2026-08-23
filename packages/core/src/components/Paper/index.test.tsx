import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import { describe, it, expect } from 'vitest';

import { NuPaper } from './index';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('NuPaper', () => {
  it('renders children correctly', () => {
    renderWithMantine(<NuPaper>Paper content</NuPaper>);
    expect(screen.getByText('Paper content')).toBeInTheDocument();
  });

  it('applies raised variant class by default', () => {
    renderWithMantine(<NuPaper>Raised</NuPaper>);
    const element = screen.getByText('Raised');
    expect(element.className).toContain('raised');
  });

  it('applies inset variant class', () => {
    renderWithMantine(<NuPaper neuVariant="inset">Inset</NuPaper>);
    const element = screen.getByText('Inset');
    expect(element.className).toContain('inset');
  });

  it('applies flat variant class', () => {
    renderWithMantine(<NuPaper neuVariant="flat">Flat</NuPaper>);
    const element = screen.getByText('Flat');
    expect(element.className).toContain('flat');
  });

  it('forwards ref to HTMLDivElement by default', () => {
    const ref = createRef<HTMLDivElement>();
    renderWithMantine(<NuPaper ref={ref}>Ref test</NuPaper>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('supports polymorphic component="a" and forwards ref to HTMLAnchorElement', () => {
    const ref = createRef<HTMLAnchorElement>();
    renderWithMantine(
      <NuPaper component="a" href="https://example.com" target="_blank" ref={ref}>
        Link Paper
      </NuPaper>,
    );

    const link = screen.getByRole('link', { name: 'Link Paper' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});
