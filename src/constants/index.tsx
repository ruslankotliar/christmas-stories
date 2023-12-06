import { ReactNode } from 'react';

// components
import InstagramIcon from '@/components/icons/instagram';
import CalendarIcon from '@/components/icons/calendarIcon';
import AboutIcon from '@/components/icons/aboutIcon';
import CameraIcon from '@/components/icons/cameraIcon';
import PricesIcon from '@/components/icons/prices';
import GlobeIcon from '@/components/icons/globeIcon';

const NAV_ITEMS = [
  {
    name: 'Хто ми',
    href: '#description',
    newTab: false,
    iconKey: 'globe',
    iconMobileOnly: true
  },
  { name: 'Пропозиції', href: '#services', newTab: false, iconKey: 'camera', iconMobileOnly: true },
  { name: 'Фонд', href: '#about-us', newTab: false, iconKey: 'about', iconMobileOnly: true },
  {
    name: 'Ціни',
    href: '#prices',
    newTab: false,
    iconKey: 'prices',
    iconMobileOnly: true
  },
  {
    name: 'klovskysad',
    href: 'https://www.instagram.com/klovskysad/',
    newTab: true,
    iconKey: 'instagram',
    iconMobileOnly: false
  }
];

const ICONS: Record<string, ReactNode> = {
  instagram: <InstagramIcon />,
  calendar: <CalendarIcon />,
  about: <AboutIcon />,
  camera: <CameraIcon />,
  prices: <PricesIcon />,
  globe: <GlobeIcon />
};

const LINKS = {
  MONOBANK: 'https://send.monobank.ua/jar/9iSLe8DkdV',
  GOOGLE_CALENDAR:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dilqw_bIL00wQaPuyW8NSIj6ezdiPPLKcRW1FZ3A0u2Va6cSbUJBEBE-UwZaXr09UOspvcPjJ?gv=true',
  PHONE_NUMBER: '+ 38 073 008 4562'
};

export { NAV_ITEMS, ICONS, LINKS };
