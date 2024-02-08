import type { Theme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import "@mui/zero-runtime/theme";

declare module "@mui/zero-runtime/theme" {
  export interface ThemeArgs {
    theme: Omit<Theme, "applyStyles"> & {
      applyStyles: (
        colorScheme: "light" | "dark",
        styles: Record<string, any>
      ) => Record<string, any>;
    };
  }
}

interface ApplyDarkStyles {
  (scheme: CSSObject): CSSObject;
}

declare module "@mui/material/styles" {
  interface Theme {
    applyDarkStyles: ApplyDarkStyles;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    primaryDark: PaletteColor;
    gradients: {
      lightGrayRadio: string;
      stylizedRadio: string;
      linearSubtle: string;
    };
  }

  interface TypeText {
    tertiary: string;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontWeightSemiBold?: number;
    fontWeightExtraBold?: number;
    fontFamilyCode?: string;
    fontFamilySystem?: string;
  }

  interface Typography {
    fontWeightSemiBold: number;
    fontWeightExtraBold: number;
    fontFamilyCode: string;
    fontFamilySystem: string;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    grey: true;
  }
}
