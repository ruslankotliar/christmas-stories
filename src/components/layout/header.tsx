import Link from 'next/link';
import { Suspense } from 'react';

import { christ } from '@/app/fonts';
import { ICONS, NAV_ITEMS } from '@/constants';

// components
import BurgerMenu from '@/components/misc/burgerMenu';

const Header = () => (
  <header className="fixed top-0 left-0 w-screen z-50">
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <Link href="#banner" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-gray-900">LOGO</span>
          <span
            className={`${christ.className} hidden md:block self-center text-2xl font-semibold whitespace-nowrap text-gray-900`}
          >
            КЛОВСЬКИЙ САД
          </span>
        </Link>
        <div className="block md:hidden">
          <BurgerMenu />
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col py-4 px-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {NAV_ITEMS.map(({ name, href, newTab, iconKey, iconMobileOnly }) => (
              <li key={name}>
                <a
                  href={href}
                  target={newTab ? '_blank' : '_self'}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gold md:p-0"
                >
                  <div className="flex justify-between items-center gap-1">
                    <span className="h-5 w-5">
                      {!iconMobileOnly ? ICONS[iconKey as keyof typeof ICONS] : null}
                    </span>
                    <span>{name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
