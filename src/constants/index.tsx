import { ReactNode } from 'react';

// components
import InstagramIcon from '@/components/icons/instagram';
import CalendarIcon from '@/components/icons/calendarIcon';
import AboutIcon from '@/components/icons/aboutIcon';
import CameraIcon from '@/components/icons/cameraIcon';

const NAV_ITEMS = [
  { name: 'Пропозиції', href: '#services', newTab: false, iconKey: 'camera', iconMobileOnly: true },
  { name: 'Про фонд', href: '#about-us', newTab: false, iconKey: 'about', iconMobileOnly: true },
  {
    name: 'Дати проведення',
    href: '#dates',
    newTab: false,
    iconKey: 'calendar',
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
  camera: <CameraIcon />
};

export { NAV_ITEMS, ICONS };
