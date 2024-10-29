import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        {/* Move external scripts to _app.js or use Script component */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
