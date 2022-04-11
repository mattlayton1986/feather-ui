import { FeatherUIThemeFont, FeatherUIThemeBreakpoints } from "./index"
import '@fontsource/source-sans-3'
import '@fontsource/source-serif-4'
import '@fontsource/source-code-pro'

export const fonts: FeatherUIThemeFont = {
  family: {
    sans: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    serif: '"Source Serif Pro", Cambria, Lucida, Utopia, Times, "Times New Roman", serif',
    mono: '"Noto Mono", ui-monospace, "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  },
  size: {
    base: "16px",
    sm: "14px",
    md: "18px",
    lg: "20px",
    xl: "22px",
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  }
}

export const breakpoints: FeatherUIThemeBreakpoints = {
  xs: {
    min: "0",
    max: "480px",
  },
  sm: {
    min: "481px",
    max: "768px",
  },
  md: {
    min: "769px",
    max: "1024px",
  },
  lg: {
    min: "1025px",
    max: "1200px",
  },
  xl: {
    min: "1201px",
    max: "10000px",
  },
}