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
    <html
      lang="en"
      className="scroll-smooth focus:scroll-auto bg-white w-screen overflow-x-hidden relative"
    >
      <body className={`${lato.className} w-screen`}>
        <div className="bg-green border-gray-200 fixed z-20 top-0 left-0 w-screen h-[62px] md:h-[64px]"></div>
        <Header />
        <div className="absolute w-screen overflow-hidden h-full">
          <FrameComponent />
        </div>
        {children}
      </body>
    </html>
  );
}
