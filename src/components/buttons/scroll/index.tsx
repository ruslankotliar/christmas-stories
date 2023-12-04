import Link from 'next/link';
import { FC } from 'react';

import styles from './styles.module.css';

interface ScrollButtonProps {
  href: string;
}

const ScrollButton: FC<ScrollButtonProps> = ({ href }) => (
  <div
    className={`${styles['arrow-scroll-hint']} absolute left-0 bottom-24 md:bottom-28 right-0 mx-auto z-30`}
  >
    <Link href={href}>
      <span></span>
      <span></span>
      <span></span>
    </Link>
  </div>
);

export default ScrollButton;
