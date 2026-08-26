import { MantineProvider } from '@mantine/core';
import { renderToString } from 'react-dom/server';
import { describe, it, expect } from 'vitest';

import { createNeumorphismTheme, neumorphismCssVariablesResolver } from './neumorphism';

describe('neumorphism theme SSR integration', () => {
  it('emits complete variables for a partial override through MantineProvider', () => {
    const theme = createNeumorphismTheme({
      other: {
        neumorphism: {
          light: { bgBase: '#f0f3f8' },
          sizes: { lg: { distance: '8px' } },
        },
      },
    });

    const html = renderToString(
      <MantineProvider theme={theme} cssVariablesResolver={neumorphismCssVariablesResolver} forceColorScheme="light">
        <div />
      </MantineProvider>,
    );

    expect(html).toContain('--neu-bg-base: #f0f3f8;');
    expect(html).toContain('--neu-distance-xs: 2px;');
    expect(html).toContain('--neu-distance-lg: 8px;');
    expect(html).toContain('--neu-distance: var(--neu-distance-lg);');
    expect(html).toContain('--neu-shadow-dark: rgba(var(--neu-shadow-dark-rgb), var(--neu-intensity-dark));');
  });
});
