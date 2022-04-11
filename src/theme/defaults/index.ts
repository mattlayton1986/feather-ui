import palette from "./palette";
import { fonts, breakpoints } from "./shared";

export interface FeatherUIThemePalette {
  theme: {
    primary: {
      light?: string,
      main?: string,
      dark?: string,
    },
    secondary: {
      light?: string,
      main?: string,
      dark?: string,
    },
    success: {
      light?: string,
      main?: string,
      dark?: string,
    },
    info: {
      light?: string,
      main?: string,
      dark?: string,
    },
    warning: {
      light?: string,
      main?: string,
      dark?: string,
    },
    error: {
      light?: string,
      main?: string,
      dark?: string,
    },
  },
  grayscale: {
    white?: string,
    100?: string,
    200?: string,
    300?: string,
    400?: string,
    500?: string,
    600?: string,
    700?: string,
    800?: string,
    900?: string,
    black?: string,
  },
  transparent: string,
  light: {
    background: string,
    text: {
      primary?: string,
      secondary?: string,
      disabled?: string,
      theme?: string,
    },
  },
   dark: {
    background: string,
    text: {
      primary?: string,
      secondary?: string,
      disabled?: string,
      theme?: string,
    },
   },
}

export interface FeatherUIThemeFontFamily {
  sans?: string,
  serif?: string,
  mono?: string,
}

export interface FeatherUIThemeFontSize {
  base: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
}

export interface FeatherUIThemeFontWeight {
  light: number,
  regular: number,
  medium: number,
  bold: number,
}

export interface FeatherUIThemeFont {
  family: FeatherUIThemeFontFamily,
  size: FeatherUIThemeFontSize,
  weight: FeatherUIThemeFontWeight,
}

export interface BreakpointsItem {
  min: string,
  max: string,
}

export interface FeatherUIThemeBreakpoints {
  xs: BreakpointsItem,
  sm: BreakpointsItem,
  md: BreakpointsItem,
  lg: BreakpointsItem,
  xl: BreakpointsItem,
}

export { palette, fonts, breakpoints }