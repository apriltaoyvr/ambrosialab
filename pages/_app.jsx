import { appWithTranslation } from 'next-i18next';
import GlobalStyle from '../components/utility/globalStyles';

/* Font Awesome 
** Config and autoAddCss to prevent FOCU */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  )
}

export default appWithTranslation(MyApp);
