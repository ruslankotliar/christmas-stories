import type { Metadata } from 'next';
import './globals.css';

import { christ, roboto } from './fonts';
import { InstagramIcon } from '@/components';

export const metadata: Metadata = {
  title: 'Christmas Stories',
  description: 'Book an appointment and get your Christmas story!'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto bg-white">
      <body className={`${roboto.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

const Header = () => (
  <header className="fixed top-0 left-0 w-screen z-50">
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <a href="#banner" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span
            className={`${christ.className} self-center text-2xl font-semibold whitespace-nowrap dark:text-white`}
          >
            КЛОВСЬКИЙ САД
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col py-4 px-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { name: 'Пропозиції', href: '#services' },
              { name: 'Про фонд', href: '#about-us' },
              { name: 'Дати проведення', href: '#dates' }
            ].map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gold md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.instagram.com/klovskysad/"
                target="_blank"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gold md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <div className="flex justify-between items-center gap-1">
                  <InstagramIcon />
                  <span>klovskysad</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
