import '@/styles/globals.css';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import localFont from 'next/font/local';

// const sans = localFont({
//   src: [
//     {
//       path: '../public//public/fonts/Universal-Sans-Text-Regular.woff2',
//       weight: '400', // Regular weight
//       style: 'normal',
//     },
//     {
//       path: '../public//fonts/Universal-Sans-Text-Medium.woff2',
//       weight: '500', // Medium weight
//       style: 'normal',
//     },
//     {
//       path: '../public//fonts/Universal-Sans-Text-Bold.woff2',
//       weight: '700', // Bold weight
//       style: 'normal',
//     },
//   ],
//   variable: '--font-universal-sans-text',
//   display: 'swap',
// });

// const display = localFont({
//   src: [
//     {
//       path: '../public//fonts/Universal-Sans-Display-Medium.woff2',
//       weight: '500', // Medium weight
//       style: 'normal',
//     },
//   ],
//   variable: '--font-universal-sans-display',
//   display: 'swap',
// });

const neueHaasGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/NeueHaasDisplayLight.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplayLightItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueHaasDisplayXXThin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplayXXThinItalic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueHaasDisplayXThin.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplayXThinItalic.woff',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueHaasDisplayThin.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplayThinItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueHaasDisplayRoman.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplayRomanItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueHaasDisplayMediu.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplayMediumItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueHaasDisplayBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplayBoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/NeueHaasDisplayBlack.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasDisplayBlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-neue-haas-grotesk',
  display: 'swap', // ensures text is displayed as soon as the font loads
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <main className={` ${neueHaasGrotesk.variable}  `}>
        <div className="font-text">
          <Component {...pageProps} />
        </div>
      </main>
    </PlasmicRootProvider>
  );
}
