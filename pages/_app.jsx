import { appWithTranslation } from 'next-i18next';
import { Fira_Code } from '@next/font/google';

/* Styled Components */
import GlobalStyle from '../components/utility/globalStyles';

/* Font Awesome 
** Config and autoAddCss to prevent FOCU */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const fira = Fira_Code({ weight: ['400', '700'], subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} className={fira.className} />
    </>
  );
}

export default appWithTranslation(MyApp);
