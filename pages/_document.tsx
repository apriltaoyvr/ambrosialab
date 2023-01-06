import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  /* Prevent FOUC with ServerStyleSheet
   * https://styled-components.com/docs/advanced#server-side-rendering
   */

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
        styles: [initialProps.styles, sheet.getStyleElement()],
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
          <link rel='icon' type='image/svg' href='/static/images/logo.svg' />
          <link
            rel='image_src'
            href='https://user-images.githubusercontent.com/95392008/167490238-a75c7e8b-af98-4cbd-8a95-e94061497fad.png'
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
