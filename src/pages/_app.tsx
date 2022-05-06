import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Provider from '../context/Provider';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}