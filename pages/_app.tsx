import { Analytics } from '@vercel/analytics/react';
import { appWithTranslation } from 'next-i18next';
import { Fira_Code } from '@next/font/google';

/* Styles */
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyles';

/* Prevent FOUC for FontAwesome
 https://fontawesome.com/docs/web/use-with/react/use-with#getting-font-awesome-css-to-work
 */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const fira = Fira_Code({ weight: ['400', '700'], subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} className={fira.className} />
      <Analytics />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
