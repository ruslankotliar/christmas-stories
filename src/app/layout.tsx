import type { Metadata } from 'next';
import './globals.css';

import { roboto } from '@/app/fonts';

// components
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Christmas Stories',
  description: 'Book an appointment and get your Christmas story!'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto bg-white">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
