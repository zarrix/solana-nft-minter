import '../styles/globals.css'
import type { AppProps } from 'next/app'
import WalletContextProvider from '../contexts/WalletContextProvider';
import Layout from '../layouts/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletContextProvider>

  );
}

export default MyApp
