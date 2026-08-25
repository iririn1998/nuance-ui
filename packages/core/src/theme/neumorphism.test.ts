import { createTheme } from '@mantine/core';
import { describe, it, expect } from 'vitest';

import {
  neumorphismVars,
  neumorphismDefaults,
  getNeumorphismShadow,
  neumorphismCssVariablesResolver,
  createNeumorphismTheme,
  neumorphismTheme,
} from './neumorphism';

describe('neumorphism design tokens & theme', () => {
  describe('neumorphismVars', () => {
    it('defines standard css variable mappings', () => {
      expect(neumorphismVars.bgBase).toBe('var(--neu-bg-base)');
      expect(neumorphismVars.bgHover).toBe('var(--neu-bg-hover)');
      expect(neumorphismVars.shadowDark).toBe('var(--neu-shadow-dark)');
      expect(neumorphismVars.shadowLight).toBe('var(--neu-shadow-light)');
      expect(neumorphismVars.distance).toBe('var(--neu-distance)');
      expect(neumorphismVars.blur).toBe('var(--neu-blur)');
      expect(neumorphismVars.intensityDark).toBe('var(--neu-intensity-dark)');
      expect(neumorphismVars.intensityLight).toBe('var(--neu-intensity-light)');
    });

    it('defines size scale css variable mappings', () => {
      expect(neumorphismVars.distanceXs).toBe('var(--neu-distance-xs)');
      expect(neumorphismVars.blurXs).toBe('var(--neu-blur-xs)');
      expect(neumorphismVars.distanceSm).toBe('var(--neu-distance-sm)');
      expect(neumorphismVars.blurSm).toBe('var(--neu-blur-sm)');
      expect(neumorphismVars.distanceMd).toBe('var(--neu-distance-md)');
      expect(neumorphismVars.blurMd).toBe('var(--neu-blur-md)');
      expect(neumorphismVars.distanceLg).toBe('var(--neu-distance-lg)');
      expect(neumorphismVars.blurLg).toBe('var(--neu-blur-lg)');
      expect(neumorphismVars.distanceXl).toBe('var(--neu-distance-xl)');
      expect(neumorphismVars.blurXl).toBe('var(--neu-blur-xl)');
      expect(neumorphismVars.distance2xl).toBe('var(--neu-distance-2xl)');
      expect(neumorphismVars.blur2xl).toBe('var(--neu-blur-2xl)');
    });
  });

  describe('neumorphismDefaults', () => {
    it('contains light and dark mode color defaults', () => {
      expect(neumorphismDefaults.light.bgBase).toBe('#e0e5ec');
      expect(neumorphismDefaults.light.bgHover).toBe('#d5dae2');
      expect(neumorphismDefaults.light.intensityDark).toBe(0.15);
      expect(neumorphismDefaults.light.intensityLight).toBe(0.8);

      expect(neumorphismDefaults.dark.bgBase).toBe('#2d3436');
      expect(neumorphismDefaults.dark.bgHover).toBe('#363d3f');
      expect(neumorphismDefaults.dark.intensityDark).toBe(0.4);
      expect(neumorphismDefaults.dark.intensityLight).toBe(0.05);
    });

    it('contains distance and blur scale definitions', () => {
      expect(neumorphismDefaults.sizes.xs).toEqual({ distance: '2px', blur: '4px' });
      expect(neumorphismDefaults.sizes.sm).toEqual({ distance: '3px', blur: '6px' });
      expect(neumorphismDefaults.sizes.md).toEqual({ distance: '4px', blur: '8px' });
      expect(neumorphismDefaults.sizes.lg).toEqual({ distance: '6px', blur: '12px' });
      expect(neumorphismDefaults.sizes.xl).toEqual({ distance: '8px', blur: '16px' });
      expect(neumorphismDefaults.sizes['2xl']).toEqual({ distance: '10px', blur: '20px' });
    });

    it('maintains backwards-compatible properties', () => {
      expect(neumorphismDefaults.bgBase).toBe('#e0e5ec');
      expect(neumorphismDefaults.bgBaseDark).toBe('#2d3436');
      expect(neumorphismDefaults.distance).toBe('6px');
      expect(neumorphismDefaults.blur).toBe('12px');
    });
  });

  describe('getNeumorphismShadow', () => {
    it('generates raised shadow with default distance & blur', () => {
      const shadow = getNeumorphismShadow('raised');
      expect(shadow).toBe(
        'var(--neu-distance) var(--neu-distance) var(--neu-blur) var(--neu-shadow-dark), calc(-1 * var(--neu-distance)) calc(-1 * var(--neu-distance)) var(--neu-blur) var(--neu-shadow-light)',
      );
    });

    it('generates inset shadow with default distance & blur', () => {
      const shadow = getNeumorphismShadow('inset');
      expect(shadow).toBe(
        'inset var(--neu-distance) var(--neu-distance) var(--neu-blur) var(--neu-shadow-dark), inset calc(-1 * var(--neu-distance)) calc(-1 * var(--neu-distance)) var(--neu-blur) var(--neu-shadow-light)',
      );
    });

    it('generates flat shadow', () => {
      expect(getNeumorphismShadow('flat')).toBe('none');
    });

    it('generates shadows with specified size scales', () => {
      const shadowSm = getNeumorphismShadow('raised', 'sm');
      expect(shadowSm).toBe(
        'var(--neu-distance-sm) var(--neu-distance-sm) var(--neu-blur-sm) var(--neu-shadow-dark), calc(-1 * var(--neu-distance-sm)) calc(-1 * var(--neu-distance-sm)) var(--neu-blur-sm) var(--neu-shadow-light)',
      );

      const shadow2xl = getNeumorphismShadow('inset', '2xl');
      expect(shadow2xl).toBe(
        'inset var(--neu-distance-2xl) var(--neu-distance-2xl) var(--neu-blur-2xl) var(--neu-shadow-dark), inset calc(-1 * var(--neu-distance-2xl)) calc(-1 * var(--neu-distance-2xl)) var(--neu-blur-2xl) var(--neu-shadow-light)',
      );
    });
  });

  describe('neumorphismCssVariablesResolver', () => {
    it('resolves default variables for light and dark modes', () => {
      const resolved = neumorphismCssVariablesResolver(neumorphismTheme);

      expect(resolved.variables).toEqual({
        '--neu-distance-xs': '2px',
        '--neu-blur-xs': '4px',
        '--neu-distance-sm': '3px',
        '--neu-blur-sm': '6px',
        '--neu-distance-md': '4px',
        '--neu-blur-md': '8px',
        '--neu-distance-lg': '6px',
        '--neu-blur-lg': '12px',
        '--neu-distance-xl': '8px',
        '--neu-blur-xl': '16px',
        '--neu-distance-2xl': '10px',
        '--neu-blur-2xl': '20px',
        '--neu-distance': '6px',
        '--neu-blur': '12px',
      });

      expect(resolved.light).toEqual({
        '--neu-bg-base': '#e0e5ec',
        '--neu-bg-hover': '#d5dae2',
        '--neu-shadow-dark-rgb': '0, 0, 0',
        '--neu-shadow-light-rgb': '255, 255, 255',
        '--neu-intensity-dark': '0.15',
        '--neu-intensity-light': '0.8',
        '--neu-shadow-dark': 'rgba(0, 0, 0, 0.15)',
        '--neu-shadow-light': 'rgba(255, 255, 255, 0.8)',
      });

      expect(resolved.dark).toEqual({
        '--neu-bg-base': '#2d3436',
        '--neu-bg-hover': '#363d3f',
        '--neu-shadow-dark-rgb': '0, 0, 0',
        '--neu-shadow-light-rgb': '255, 255, 255',
        '--neu-intensity-dark': '0.4',
        '--neu-intensity-light': '0.05',
        '--neu-shadow-dark': 'rgba(0, 0, 0, 0.4)',
        '--neu-shadow-light': 'rgba(255, 255, 255, 0.05)',
      });
    });

    it('resolves customized neumorphism theme values', () => {
      const customTheme = createTheme({
        other: {
          neumorphism: {
            light: {
              bgBase: '#f0f3f8',
              bgHover: '#e4e8ef',
              shadowDarkRgb: '10, 20, 30',
              shadowLightRgb: '255, 255, 255',
              intensityDark: 0.2,
              intensityLight: 0.9,
            },
            dark: {
              bgBase: '#1a1b1e',
              bgHover: '#25262b',
              shadowDarkRgb: '0, 0, 0',
              shadowLightRgb: '255, 255, 255',
              intensityDark: 0.5,
              intensityLight: 0.08,
            },
            sizes: {
              ...neumorphismDefaults.sizes,
              lg: { distance: '8px', blur: '16px' },
            },
          },
        },
      });

      const resolved = neumorphismCssVariablesResolver(customTheme);

      expect(resolved.variables['--neu-distance-lg']).toBe('8px');
      expect(resolved.variables['--neu-blur-lg']).toBe('16px');
      expect(resolved.light['--neu-bg-base']).toBe('#f0f3f8');
      expect(resolved.light['--neu-intensity-dark']).toBe('0.2');
      expect(resolved.light['--neu-shadow-dark']).toBe('rgba(10, 20, 30, 0.2)');
      expect(resolved.dark['--neu-bg-base']).toBe('#1a1b1e');
      expect(resolved.dark['--neu-intensity-dark']).toBe('0.5');
    });
  });

  describe('createNeumorphismTheme', () => {
    it('creates a default neumorphism theme override', () => {
      const theme = createNeumorphismTheme();
      expect(theme.primaryColor).toBe('blue');
      expect(theme.defaultRadius).toBe('lg');
      expect(theme.other?.neumorphism).toEqual(neumorphismDefaults);
    });

    it('merges custom overrides', () => {
      const theme = createNeumorphismTheme({
        primaryColor: 'teal',
        defaultRadius: 'xl',
      });
      expect(theme.primaryColor).toBe('teal');
      expect(theme.defaultRadius).toBe('xl');
    });
  });
});
