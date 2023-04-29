import { Html, Head, Main, NextScript } from 'next/document'
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id='map'>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
