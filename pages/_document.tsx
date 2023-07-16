import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  // Para todas las páginas
  return (
    <Html lang="en">
      <Head />
      <body className='body-container'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}