import { DefaultTheme } from 'styled-components';
import { setLightness } from 'polished';

const theme: DefaultTheme = {
  foreground: 'hsl(201, 100%, 95%)',
  background: 'hsl(346, 66%, 44%)',
  secondary: 'hsl(346, 67%, 63%)',
  shadow: {
    header: '0px 1px 4px',
    paragraph: '0px 1px 2px',
  },
};

export default theme;
