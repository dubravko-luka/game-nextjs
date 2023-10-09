import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { seoConfig } from 'next-seo.config';
import WindowResizeHandler from '@/handlers/WindowResizeHandler';
import store from '@/store/store';
import Head from '@/components/Common/Head';
import Layout from '@/components/Common/Layout';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <DefaultSeo {...seoConfig} />
      <Head />
      <WindowResizeHandler />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
