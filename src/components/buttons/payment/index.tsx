import { FC, MouseEventHandler } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

import { LINKS } from '@/constants';

interface PaymentButtonProps {
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

const PaymentButton: FC<PaymentButtonProps> = ({ onClick }) => (
  <Link
    href={LINKS.MONOBANK}
    target="_blank"
    className={`${styles['button-86']}`}
    onClick={onClick}
  >
    Забронювати місце
  </Link>
);

export default PaymentButton;
