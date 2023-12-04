import Link from 'next/link';

import { ICONS, NAV_ITEMS } from '@/constants';

// components
import BurgerMenu from '@/components/buttons/burger';
import Image from 'next/image';

const Header = () => (
  <header className="fixed z-40 top-0 left-0 w-screen text-black">
    <nav className="bg-transparent border-gray-200 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-12">
        <Link href="#banner" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="h-10 w-10 relative">
            <Image
              src={'/images/logo.png'}
              alt="Christmas Stories Logo"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span
            className={`hidden md:block self-center text-2xl font-semibold whitespace-nowrap text-gray-900`}
          >
            КЛОВСЬКИЙ САД
          </span>
        </Link>
        <div className="block md:hidden py-2">
          <BurgerMenu />
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col px-12 py-2 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
            {NAV_ITEMS.map(({ name, href, newTab, iconKey, iconMobileOnly }) => (
              <li key={name}>
                <a
                  href={href}
                  target={newTab ? '_blank' : '_self'}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-darkGreen md:p-0"
                >
                  <div className="flex justify-between items-center gap-1">
                    <span className={`${iconMobileOnly ? 'hidden' : 'block'} h-5 w-5`}>
                      {ICONS[iconKey as keyof typeof ICONS]}
                    </span>
                    <span className="font-bold">{name}</span>
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
