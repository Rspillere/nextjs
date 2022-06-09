import Header from '@components/Header';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInicialState from '@hooks/useInicialState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const inicialState = useInicialState();
  return (
    <AppContext.Provider value={inicialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X1785Y1RKL" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());                      
        gtag('config', 'G-X1785Y1RKL');`}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
