import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store';
import { Noto_Sans_Display } from 'next/font/google';

const noto = Noto_Sans_Display({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <style jsx global>{`
        html {
          font-family: ${noto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Provider>
  );
}
