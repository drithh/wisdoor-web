import '@/styles/globals.css';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import localFont from 'next/font/local';

const sans = localFont({
  src: [
    {
      path: '../public//fonts/Universal-Sans-Text-Regular.woff2',
      weight: '400', // Regular weight
      style: 'normal',
    },
    {
      path: '../public//fonts/Universal-Sans-Text-Medium.woff2',
      weight: '500', // Medium weight
      style: 'normal',
    },
    {
      path: '../public//fonts/Universal-Sans-Text-Bold.woff2',
      weight: '700', // Bold weight
      style: 'normal',
    },
  ],
  variable: '--font-universal-sans-text',
  display: 'swap',
});

const display = localFont({
  src: [
    {
      path: '../public//fonts/Universal-Sans-Display-Medium.woff2',
      weight: '500', // Medium weight
      style: 'normal',
    },
  ],
  variable: '--font-universal-sans-display',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <main className={` ${sans.variable} ${display.variable}`}>
        <div className="font-text">
          <Component {...pageProps} />
        </div>
      </main>
    </PlasmicRootProvider>
  );
}
