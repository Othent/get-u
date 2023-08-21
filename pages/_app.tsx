import type { AppProps } from 'next/app';
import Script from 'next/script'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import Nav from '../components/Nav';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MH1E8F6681"
        async
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MH1E8F6681');
        `}
      </Script>
    </>
  );
}
