export const colors = {
  light: {
    background: "#ffffff",
    foreground: "#1c1c1d",

    card: "#f5f5f7",
    cardForeground: "#111113",

    popover: "#ffffff",
    popoverForeground: "#1c1c1d",

    primary: "#ff6f18",
    primaryForeground: "#fafafa",

    secondary: "#f5f5f5",
    secondaryForeground: "#1c1c1d",

    muted: "#f5f5f5",
    mutedForeground: "#737373",

    accent: "#f5f5f5",
    accentForeground: "#1c1c1d",

    destructive: "#e4001f",
    destructiveForeground: "#ffffff",

    border: "#e5e5e5",
    input: "#e5e5e5",
    ring: "#a1a1a1",
  },

  dark: {
    background: "#000000",
    foreground: "#fafafa",

    card: "#111111",
    cardForeground: "#f3f4f6",

    popover: "#262626",
    popoverForeground: "#fafafa",

    primary: "#ff6f18",
    primaryForeground: "#ffffff",

    secondary: "#ff6f18",
    secondaryForeground: "#fafafa",

    muted: "#262626",
    mutedForeground: "#a1a1a1",

    accent: "#404040",
    accentForeground: "#fafafa",

    destructive: "#ef4444",
    destructiveForeground: "#fafafa",

    border: "#282828",
    input: "#343434",
    ring: "#737373",
  },
};

export type Theme = typeof colors.light;

export const typography = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
} as const;

export const spacing = {
  px: 1,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 96,
} as const;

export const radius = {
  sm: 6,
  md: 8,
  lg: 10,
  xl: 14,
  "2xl": 18,
  "3xl": 24,
  full: 9999,
} as const;
