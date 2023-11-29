import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const christ = localFont({
  src: '../../public/fonts/christ.ttf',
  display: 'swap'
});

export { christ, roboto };
