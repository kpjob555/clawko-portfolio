import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: string;
      orangeLight: string;
      orangeDark: string;
      darkBg: string;
      darkCard: string;
      darkCardHover: string;
      textPrimary: string;
      textSecondary: string;
      purple: string;
      pink: string;
      cyan: string;
      teal: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  }
}
