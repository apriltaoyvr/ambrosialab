// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    foreground: string;
    secondary: string;
    shadow: {
      header: string;
      paragraph: string;
    },
    font: string;
  }
}
