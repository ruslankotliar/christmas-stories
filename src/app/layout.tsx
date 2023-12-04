import type { Metadata } from 'next';
import './globals.css';

import { lato } from '@/app/fonts';

// components
import Header from '@/components/layout/header';
import FrameComponent from '@/components/layout/frame';

export const metadata: Metadata = {
  title: 'Christmas Stories',
  description: 'Book an appointment and get your Christmas story!'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto bg-white">
      <body className={`${lato.className} relative`}>
        <div className="bg-green border-gray-200 fixed z-20 top-0 left-0 w-screen h-[62px] md:h-[64px]"></div>
        <FrameComponent />
        <Header />
        {children}
      </body>
    </html>
  );
}
