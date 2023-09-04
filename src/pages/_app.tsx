import { appWithTranslation } from 'next-i18next';

/* Styles */
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyles';

/* Prevent FOUC for FontAwesome
 https://fontawesome.com/docs/web/use-with/react/use-with#getting-font-awesome-css-to-work
 */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
