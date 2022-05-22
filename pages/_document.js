import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
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
