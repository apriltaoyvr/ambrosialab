import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  /* Prevent FOUC with ServerStyleSheet
   ** https://styled-components.com/docs/advanced#server-side-rendering*/

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name='description'
            content='A health, wellness, and cosmetics research company headquartered in Ferrara, Italy.'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' type='image/svg' href='/static/images/logo.svg' />
          <link
            rel='image_src'
            href='https://user-images.githubusercontent.com/95392008/167490238-a75c7e8b-af98-4cbd-8a95-e94061497fad.png'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
