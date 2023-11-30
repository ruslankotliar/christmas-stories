'use client';

import styles from './styles.module.css';

import { CSSProperties, useState } from 'react';
import Link from 'next/link';
import { ICONS, NAV_ITEMS } from '@/constants';

const BurgerMenu = function () {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpen = () => setIsOpen((value) => !value);

  return (
    <>
      <div
        className={`flex items-center justify-center absolute right-0 top-0 bg-white transform transition-all duration-500 origin-top-right overflow-hidden ${
          isOpen
            ? 'translate-x-0 translate-y-0 h-screen w-screen opacity-1'
            : 'translate-x-full -translate-y-full h-0 w-0 opacity-0'
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map(({ name, href, newTab, iconKey }) => (
              <li key={`${name}#${href}#${newTab}}`} className="w-fit h-fit">
                <Link
                  onClick={handleSetOpen}
                  href={href}
                  target={newTab ? '_blank' : '_self'}
                  className="flex justify-between items-center gap-2 text-2xl text-center"
                >
                  <div className="flex justify-between items-center gap-3">
                    <span className="h-10 w-10 text-red">
                      {ICONS[iconKey as keyof typeof ICONS]}
                    </span>
                    <span>{name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        onClick={handleSetOpen}
        className={`flex items-center justify-center ${isOpen ? 'text-red' : 'text-black'}`}
      >
        <input
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          type="checkbox"
          role="button"
          aria-label="Display the menu"
          style={{ '--c': isOpen ? '#FF5757' : 'black' } as CSSProperties}
          className={styles['menu']}
        />
      </div>
    </>
  );
};

export default BurgerMenu;
