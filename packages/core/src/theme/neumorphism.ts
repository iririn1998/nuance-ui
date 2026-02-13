import { createTheme, type MantineThemeOverride } from "@mantine/core";

/**
 * ニューモーフィズムの variant タイプ
 * - raised: 凸 (浮き出し)
 * - inset: 凹 (押し込み)
 * - flat: フラット
 */
export type NeumorphismVariant = "raised" | "inset" | "flat";

/**
 * ニューモーフィズムスタイルの CSS 変数定義
 */
export const neumorphismVars = {
  /** 光源方向のハイライトシャドウ */
  shadowLight: "var(--neu-shadow-light)",
  /** 光源反対方向のダークシャドウ */
  shadowDark: "var(--neu-shadow-dark)",
  /** ベース背景色 */
  bgBase: "var(--neu-bg-base)",
  /** シャドウの距離 */
  distance: "var(--neu-distance)",
  /** シャドウのぼかし */
  blur: "var(--neu-blur)",
  /** シャドウの強度 (dark) */
  intensityDark: "var(--neu-intensity-dark)",
  /** シャドウの強度 (light) */
  intensityLight: "var(--neu-intensity-light)",
} as const;

/**
 * ニューモーフィズムのデフォルト CSS 変数値
 */
export const neumorphismDefaults = {
  /** ベース背景色 (ライトモード) */
  bgBase: "#e0e5ec",
  /** ベース背景色 (ダークモード) */
  bgBaseDark: "#2d3436",
  /** シャドウ距離 */
  distance: "6px",
  /** シャドウぼかし */
  blur: "12px",
  /** ダークシャドウの強度 (ライトモード) */
  intensityDark: "0.15",
  /** ライトシャドウの強度 (ライトモード) */
  intensityLight: "0.8",
  /** ダークシャドウの強度 (ダークモード) */
  intensityDarkDm: "0.4",
  /** ライトシャドウの強度 (ダークモード) */
  intensityLightDm: "0.05",
} as const;

/**
 * variant に応じた box-shadow を生成するヘルパー
 */
export function getNeumorphismShadow(variant: NeumorphismVariant): string {
  const d = neumorphismVars.distance;
  const b = neumorphismVars.blur;
  const dark = neumorphismVars.shadowDark;
  const light = neumorphismVars.shadowLight;

  switch (variant) {
    case "raised":
      return `${d} ${d} ${b} ${dark}, calc(-1 * ${d}) calc(-1 * ${d}) ${b} ${light}`;
    case "inset":
      return `inset ${d} ${d} ${b} ${dark}, inset calc(-1 * ${d}) calc(-1 * ${d}) ${b} ${light}`;
    case "flat":
      return "none";
  }
}

/**
 * Mantine テーマにニューモーフィズムスタイルを適用するテーマオーバーライド
 */
export const neumorphismTheme: MantineThemeOverride = createTheme({
  primaryColor: "blue",
  defaultRadius: "lg",
  shadows: {
    xs: "2px 2px 4px rgba(0,0,0,0.1), -2px -2px 4px rgba(255,255,255,0.7)",
    sm: "4px 4px 8px rgba(0,0,0,0.12), -4px -4px 8px rgba(255,255,255,0.75)",
    md: "6px 6px 12px rgba(0,0,0,0.15), -6px -6px 12px rgba(255,255,255,0.8)",
    lg: "8px 8px 16px rgba(0,0,0,0.15), -8px -8px 16px rgba(255,255,255,0.8)",
    xl: "12px 12px 24px rgba(0,0,0,0.18), -12px -12px 24px rgba(255,255,255,0.85)",
  },
  radius: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
  other: {
    neumorphism: neumorphismDefaults,
  },
});
