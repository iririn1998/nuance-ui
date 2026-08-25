import {
  createTheme,
  type CSSVariablesResolver,
  type MantineThemeOverride,
} from '@mantine/core';

/**
 * ニューモーフィズムの variant タイプ
 * - raised: 凸 (浮き出し)
 * - inset: 凹 (押し込み)
 * - flat: フラット
 */
export type NeumorphismVariant = 'raised' | 'inset' | 'flat';

/**
 * ニューモーフィズムのサイズ段階
 */
export type NeumorphismSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * ニューモーフィズムスタイルの CSS 変数定義
 */
export const neumorphismVars = {
  /** 光源方向のハイライトシャドウ */
  shadowLight: 'var(--neu-shadow-light)',
  /** 光源反対方向のダークシャドウ */
  shadowDark: 'var(--neu-shadow-dark)',
  /** ベース背景色 */
  bgBase: 'var(--neu-bg-base)',
  /** ホバー背景色 */
  bgHover: 'var(--neu-bg-hover)',
  /** シャドウの距離 */
  distance: 'var(--neu-distance)',
  /** シャドウのぼかし */
  blur: 'var(--neu-blur)',
  /** シャドウの強度 (dark) */
  intensityDark: 'var(--neu-intensity-dark)',
  /** シャドウの強度 (light) */
  intensityLight: 'var(--neu-intensity-light)',
  /** ダークシャドウ RGB (カンマ区切り) */
  shadowDarkRgb: 'var(--neu-shadow-dark-rgb)',
  /** ライトシャドウ RGB (カンマ区切り) */
  shadowLightRgb: 'var(--neu-shadow-light-rgb)',

  /* サイズ別トークン */
  distanceXs: 'var(--neu-distance-xs)',
  blurXs: 'var(--neu-blur-xs)',
  distanceSm: 'var(--neu-distance-sm)',
  blurSm: 'var(--neu-blur-sm)',
  distanceMd: 'var(--neu-distance-md)',
  blurMd: 'var(--neu-blur-md)',
  distanceLg: 'var(--neu-distance-lg)',
  blurLg: 'var(--neu-blur-lg)',
  distanceXl: 'var(--neu-distance-xl)',
  blurXl: 'var(--neu-blur-xl)',
  distance2xl: 'var(--neu-distance-2xl)',
  blur2xl: 'var(--neu-blur-2xl)',
} as const;

/**
 * カラースキーム別のトークン設定値
 */
export interface NeumorphismColorSchemeTokens {
  bgBase: string;
  bgHover: string;
  shadowDarkRgb: string;
  shadowLightRgb: string;
  intensityDark: number;
  intensityLight: number;
}

/**
 * サイズ段階別の distance / blur 設定値
 */
export interface NeumorphismSizeTokens {
  distance: string;
  blur: string;
}

/**
 * ニューモーフィズムのデフォルト設定
 */
export const neumorphismDefaults = {
  light: {
    bgBase: '#e0e5ec',
    bgHover: '#d5dae2',
    shadowDarkRgb: '0, 0, 0',
    shadowLightRgb: '255, 255, 255',
    intensityDark: 0.15,
    intensityLight: 0.8,
  },
  dark: {
    bgBase: '#2d3436',
    bgHover: '#363d3f',
    shadowDarkRgb: '0, 0, 0',
    shadowLightRgb: '255, 255, 255',
    intensityDark: 0.4,
    intensityLight: 0.05,
  },
  sizes: {
    xs: { distance: '2px', blur: '4px' },
    sm: { distance: '3px', blur: '6px' },
    md: { distance: '4px', blur: '8px' },
    lg: { distance: '6px', blur: '12px' },
    xl: { distance: '8px', blur: '16px' },
    '2xl': { distance: '10px', blur: '20px' },
  },
  // 既存プロパティとの後方互換性
  bgBase: '#e0e5ec',
  bgBaseDark: '#2d3436',
  distance: '6px',
  blur: '12px',
  intensityDark: '0.15',
  intensityLight: '0.8',
  intensityDarkDm: '0.4',
  intensityLightDm: '0.05',
} as const;

/**
 * variant に応じた box-shadow を生成するヘルパー
 */
export function getNeumorphismShadow(
  variant: NeumorphismVariant,
  size?: NeumorphismSize,
): string {
  const d = size
    ? (neumorphismVars[
        `distance${size === '2xl' ? '2xl' : (size.charAt(0).toUpperCase() + size.slice(1))}` as keyof typeof neumorphismVars
      ] ?? neumorphismVars.distance)
    : neumorphismVars.distance;

  const b = size
    ? (neumorphismVars[
        `blur${size === '2xl' ? '2xl' : (size.charAt(0).toUpperCase() + size.slice(1))}` as keyof typeof neumorphismVars
      ] ?? neumorphismVars.blur)
    : neumorphismVars.blur;

  const dark = neumorphismVars.shadowDark;
  const light = neumorphismVars.shadowLight;

  switch (variant) {
    case 'raised':
      return `${d} ${d} ${b} ${dark}, calc(-1 * ${d}) calc(-1 * ${d}) ${b} ${light}`;
    case 'inset':
      return `inset ${d} ${d} ${b} ${dark}, inset calc(-1 * ${d}) calc(-1 * ${d}) ${b} ${light}`;
    case 'flat':
      return 'none';
  }
}

/**
 * MantineProvider に渡す Neumorphism CSS 変数リゾルバー
 */
export const neumorphismCssVariablesResolver: CSSVariablesResolver = (theme) => {
  const custom = (theme.other as { neumorphism?: typeof neumorphismDefaults })?.neumorphism;

  const light = custom?.light ?? neumorphismDefaults.light;
  const dark = custom?.dark ?? neumorphismDefaults.dark;
  const sizes = custom?.sizes ?? neumorphismDefaults.sizes;

  return {
    variables: {
      '--neu-distance-xs': sizes.xs.distance,
      '--neu-blur-xs': sizes.xs.blur,
      '--neu-distance-sm': sizes.sm.distance,
      '--neu-blur-sm': sizes.sm.blur,
      '--neu-distance-md': sizes.md.distance,
      '--neu-blur-md': sizes.md.blur,
      '--neu-distance-lg': sizes.lg.distance,
      '--neu-blur-lg': sizes.lg.blur,
      '--neu-distance-xl': sizes.xl.distance,
      '--neu-blur-xl': sizes.xl.blur,
      '--neu-distance-2xl': sizes['2xl'].distance,
      '--neu-blur-2xl': sizes['2xl'].blur,
      '--neu-distance': sizes.lg.distance,
      '--neu-blur': sizes.lg.blur,
    },
    light: {
      '--neu-bg-base': light.bgBase,
      '--neu-bg-hover': light.bgHover,
      '--neu-shadow-dark-rgb': light.shadowDarkRgb,
      '--neu-shadow-light-rgb': light.shadowLightRgb,
      '--neu-intensity-dark': String(light.intensityDark),
      '--neu-intensity-light': String(light.intensityLight),
      '--neu-shadow-dark': `rgba(${light.shadowDarkRgb}, ${light.intensityDark})`,
      '--neu-shadow-light': `rgba(${light.shadowLightRgb}, ${light.intensityLight})`,
    },
    dark: {
      '--neu-bg-base': dark.bgBase,
      '--neu-bg-hover': dark.bgHover,
      '--neu-shadow-dark-rgb': dark.shadowDarkRgb,
      '--neu-shadow-light-rgb': dark.shadowLightRgb,
      '--neu-intensity-dark': String(dark.intensityDark),
      '--neu-intensity-light': String(dark.intensityLight),
      '--neu-shadow-dark': `rgba(${dark.shadowDarkRgb}, ${dark.intensityDark})`,
      '--neu-shadow-light': `rgba(${dark.shadowLightRgb}, ${dark.intensityLight})`,
    },
  };
};

/**
 * カスタム設定を受け取って MantineThemeOverride を作成するヘルパー
 */
export function createNeumorphismTheme(override?: MantineThemeOverride): MantineThemeOverride {
  return createTheme({
    primaryColor: 'blue',
    defaultRadius: 'lg',
    shadows: {
      xs: '2px 2px 4px rgba(0,0,0,0.1), -2px -2px 4px rgba(255,255,255,0.7)',
      sm: '4px 4px 8px rgba(0,0,0,0.12), -4px -4px 8px rgba(255,255,255,0.75)',
      md: '6px 6px 12px rgba(0,0,0,0.15), -6px -6px 12px rgba(255,255,255,0.8)',
      lg: '8px 8px 16px rgba(0,0,0,0.15), -8px -8px 16px rgba(255,255,255,0.8)',
      xl: '12px 12px 24px rgba(0,0,0,0.18), -12px -12px 24px rgba(255,255,255,0.85)',
    },
    radius: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    other: {
      neumorphism: neumorphismDefaults,
    },
    ...override,
  });
}

/**
 * Mantine テーマにニューモーフィズムスタイルを適用するテーマオーバーライド
 */
export const neumorphismTheme: MantineThemeOverride = createNeumorphismTheme();
