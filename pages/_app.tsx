import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress
        options={{ easing: 'ease', speed: 500 }}
        color="rgb(239, 68, 68)"
        height={2}
      />
      <Component {...pageProps}/>
      <Footer />
    </>
  )
}

export default MyApp;
