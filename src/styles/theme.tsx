import { DefaultTheme } from 'styled-components';
import { Fira_Code } from '@next/font/google';

const fira = Fira_Code({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--fira',
});

const theme: DefaultTheme = {
  foreground: 'hsl(201, 100%, 95%)',
  background: 'hsl(346, 66%, 44%)',
  secondary: 'hsl(346, 67%, 63%)',
  shadow: {
    header: '0px 1px 4px',
    paragraph: '0px 1px 2px',
  },
  font: fira.variable
};

export default theme;
