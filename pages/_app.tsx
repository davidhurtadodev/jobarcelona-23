import '@/styles/globals.css';
import { PersistGate } from 'redux-persist/integration/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { Noto_Sans_Display } from 'next/font/google';

const noto = Noto_Sans_Display({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <style jsx global>{`
          html {
            font-family: ${noto.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
