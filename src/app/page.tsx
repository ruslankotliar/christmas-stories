'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// components
// icons
import ExternalLinkIcon from '@/components/icons/externalLink';
import CloseIcon from '@/components/icons/closeIcon';
// buttons
import ScrollButton from '@/components/buttons/scroll';

// constants
import { LINKS } from '@/constants';
import PhoneIcon from '@/components/icons/phoneIcon';

export default function Home() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);

  const escFunction = useCallback((event: any) => {
    if (event.key === 'Escape') {
      setIsPaymentModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return (
    <main className="text-black bg-white px-12 max-w-screen-xl mx-auto">
      <PaymentModal
        isPaymentModalOpen={isPaymentModalOpen}
        setIsPaymentModalOpen={setIsPaymentModalOpen}
      />
      <div className="z-10">
        <section id="banner" className="h-screen pt-36 md:pt-40 relative pb-32">
          <div className="max-w-screen-xl mx-auto h-full">
            <ScrollButton href="#description" />
            <div className="w-full h-full flex flex-col items-center justify-start">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="uppercase flex flex-col justify-between items-center text-xl md:text-2xl">
                  <h1 className="font-bold text-red text-2xl md:text-3xl">РІЗДВЯНІ ІСТОРІЇ</h1>
                  <div className="flex flex-col items-center">
                    <h2 className="text-black -mt-2">Кловського саду</h2>
                    <hr className="w-full md:my-1 mx-3 h-[1px] border-t-0 bg-black -mt-[0.5px] md:-mt-[0.75px]" />
                  </div>
                </div>
                <div>
                  <h2 className="text-darkGreen text-lg md:text-xl font-semibold">6 - 24 грудня</h2>
                </div>
              </div>
              <div className="my-2 md:my-5 h-2/3 relative w-full">
                <Image
                  src={'/images/main-bg.png'}
                  alt="Christmas background image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md shadow-md"
                />
              </div>
              <div>
                <p className={`text-base md:text-lg text-center`}>
                  Різдво - надзвичайно світле, тепле свято з глибоким корінням й найулюбленіше свято
                  дорослих та дітей!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="description"
          className="h-screen flex justify-center items-center pt-24 md:pt-32 pb-14 md:pb-16"
        >
          <div className="w-screen max-w-screen-xl mx-auto h-full flex flex-col justify-between gap-5 md:gap-10">
            <div className="flex flex-col justify-between gap-4 text-base md:text-lg text-center">
              <div className="flex flex-col justify-between gap-1">
                <p>Цього року Кловський сад створює неповторну благодійну фотозону</p>
                <strong className="text-red font-black">« РІЗДВЯНІ ІСТОРЇ »</strong>
                <p>
                  щоб кожен міг закарбувати найгарніші моменти та долучитися до чудової доброї
                  справи.
                </p>
              </div>
              <p>
                Весь грудень містяни та гості столиці зможуть зробити атмосферні фото на казковому
                фасаді.
              </p>
            </div>
            <div className="my-2 md:my-5 h-2/3 relative w-full">
              <Image
                src={'/images/main-bg.png'}
                alt="Christmas background image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </section>

        <section
          id="services"
          className="h-screen flex justify-center items-center pt-32 md:pt-32 pb-12 md:pb-16"
        >
          <div className="w-screen max-w-screen-xl mx-auto h-full flex flex-col justify-start gap-16 md:gap-14">
            <div className="flex flex-col md:flex-row gap-10 md:gap-10 h-fit md:h-full">
              {[
                {
                  title: 'Фото на телефон',
                  price: '300',
                  description:
                    'У вас є чудова нагода зробити затишні знімки на ваш мобільний телефон (до 10 хв)',
                  image: '/images/temporary.png'
                },
                {
                  title: 'Фото зі своїм фотографом',
                  price: '500',
                  description:
                    'У вас є чудова нагода зробити неймовірні знімки зі своїм фотографом (до 10 хв)',
                  image: '/images/temporary.png'
                },
                {
                  title: 'Фото з нашим фотографом',
                  price: '1000',
                  description:
                    'У вас є чудова нагода зробити неповторні знімки з нашим фотографом (до 10 хв)',
                  image: '/images/temporary.png'
                }
              ].map(({ image, title, description, price }) => (
                <div
                  key={title}
                  className="rounded-lg shadow-md text-center flex flex-col justify-between items-center h-fit md:h-full overflow-hidden bg-green"
                >
                  <div className="hidden md:block p-6 h-full w-full relative">
                    <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="px-2 py-2 md:py-4 flex flex-col items-center justify-between w-fit">
                    <h3 className={`text-lg md:text-xl font-black uppercase`}>{title}</h3>
                    <hr className="w-full md:my-1 mx-3 h-[1px] md:h-0.5 border-t-0 bg-black opacity-100 dark:opacity-50" />
                  </div>
                  <div>
                    <p className="text-black px-2 md:px-4 py-1  md:p-3 text-sm md:text-base">
                      {description}
                    </p>
                  </div>
                  <div className="pb-1 md:pb-3">
                    <strong className="text-red py-1 md:py-2 text-lg md:text-xl font-bold">
                      {price} <span className="font-normal">грн</span>
                    </strong>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Link
                href={LINKS.MONOBANK}
                target="_blank"
                className={`button-86`}
                onClick={() => setIsPaymentModalOpen(true)}
              >
                Забронювати місце
              </Link>
            </div>
          </div>
        </section>

        <section
          id="about-us"
          className="h-screen flex justify-center items-center pt-28 md:pt-32 pb-12 md:pb-16"
        >
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-center h-full md:max-h-[35rem] max-w-screen-xl w-full gap-10 md:gap-16">
            <div className="flex md:flex-1 flex-col h-full justify-between overflow-hidden">
              <div className="h-full rounded-md md:rounded-none shadow-md md:shadow-none overflow-hidden md:overflow-auto">
                <div className="p-8 md:py-8 md:px-12 md:rounded-md md:shadow-md bg-green">
                  <div className="uppercase flex flex-col justify-between items-center text-lg md:text-xl mb-2">
                    <div className="flex items-center">
                      <span>«</span>
                      <h1 className="font-bold text-red text-xl md:text-2xl">РІЗДВЯНІ ІСТОРІЇ</h1>
                    </div>
                    <div className="flex flex-col items-center -mt-1">
                      <div className="flex items-center">
                        <h2 className="text-black">Кловського саду</h2>
                        <span className="-mt-2">»</span>
                      </div>
                      <hr className="w-full md:my-1 mx-3 h-[1px] border-t-0 bg-black -mt-[0.5px] md:-mt-[0.75px]" />
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-center">
                    - це наша благодійна ініціатива, весь прибуток з якої направляється до
                    <br />
                    <Link
                      href={'https://genukrainian.com.ua/en'}
                      target={'_blank'}
                      role="button"
                      className="text-white underline text-base md:text-lg"
                    >
                      Gen.Ukrainian
                    </Link>
                    <br />- громадської організації, яка профільно займається ментальною
                    реабілітацією дітей, що зіштовхнулись із жахіттям війни. Команда{' '}
                    <Link
                      href={'https://genukrainian.com.ua/en'}
                      target={'_blank'}
                      role="button"
                      className="text-white underline"
                    >
                      Gen
                    </Link>{' '}
                    проводить психологічні інтенсиви, створює новітні програми реабілітації, веде
                    наукову діяльність, а токож реалізовує проєкти, що покликані покращити ментальне
                    здоровʼя дітей та дорослих.{' '}
                    <Link
                      href={'https://genukrainian.com.ua/en'}
                      target={'_blank'}
                      role="button"
                      className="text-white underline"
                    >
                      Gen
                    </Link>{' '}
                    лікує неведимі рани дітей заради нашого спільного щасливого майбутнього.
                  </p>
                </div>
                <div className="md:hidden w-full h-full relative">
                  <Image
                    src={'/images/fond.jpg'}
                    fill
                    alt="Fond logo"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="hidden md:block w-fit">
                <Link
                  href={'https://genukrainian.com.ua/en'}
                  target={'_blank'}
                  className="button-27 flex justify-between items-end"
                  role="button"
                >
                  <span>Gen.Ukrainian</span>
                  <span className="inline-block h-6 w-6 text-green ml-2">
                    <ExternalLinkIcon />
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block w-full md:flex-1 h-full relative rounded-lg overflow-hidden">
              <Image
                src={'/images/fond.jpg'}
                fill
                alt="Fond logo"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>
        </section>

        <section
          id="prices"
          className="h-screen flex flex-col justify-center items-center pt-20 md:pt-32 pb-16 md:pb-32 overflow-hidden relative"
        >
          <div className="w-full flex flex-col md:flex-row justify-start md:justify-between items-center h-full gap-5 md:gap-16">
            <div className="flex flex-col items-center gap-5 md:w-1/2">
              <div className="flex flex-col items-center">
                <h4 className="text-lg md:text-xl text-red font-bold">Умови різдвяних фотоднів:</h4>
                <hr className="w-full md:my-1 mx-3 h-[1px] border-t-0 bg-red -mt-[0.5px] md:-mt-[1px]" />
              </div>
              <div>
                <ul className="flex flex-col items-center gap-1 text-sm md:text-base">
                  <li className="text-center">
                    <span className="inline-flex flex-col items-center">
                      <strong className="text-red">300 грн</strong>
                      <hr className="w-full md:my-1 mx-3 h-[1px] border-t-0 bg-red -mt-[0.5px] md:-mt-[1px]" />
                    </span>
                    - фото на телефон (до 10 хв)
                  </li>
                  <li className="text-center">
                    <span className="inline-flex flex-col items-center">
                      <strong className="text-red">500 грн</strong>
                      <hr className="w-full md:my-1 mx-3 h-[1px] border-t-0 bg-red -mt-[0.5px] md:-mt-[1px]" />
                    </span>
                    - фото зі своїм фотографом (до 10 хв)
                  </li>
                  <li className="text-center">
                    <span className="inline-flex flex-col items-center">
                      <strong className="text-red">1000 грн</strong>
                      <hr className="w-full md:my-1 mx-3 h-[1px] border-t-0 bg-red -mt-[0.5px] md:-mt-[1px]" />
                    </span>
                    - фото із нашим <b>запрошеним фотографом*</b> (до 10 хв, віддаються протягом 3-х
                    робочих днів)
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm md:text-base text-center">
                  <strong>* запрошені фотографи</strong> присутні на локації у вихідні дні (Субота
                  та Неділя) з 10.00 по 15.00 та приймають гостей до зйомки{' '}
                  <strong>за попереднім записом!</strong>
                </p>
              </div>

              <div className="flex justify-center items-center my-2">
                <Link
                  href={LINKS.MONOBANK}
                  target="_blank"
                  className={`button-86`}
                  onClick={() => setIsPaymentModalOpen(true)}
                >
                  Забронювати місце
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="p-4 md:p-8 shadow-md rounded-md bg-green">
                <p className="text-base md:text-lg font-bold text-center">
                  Просимо звернути увагу, що грудень дуже непередбачуваний місяць, тому через
                  погодні умови, або будь-які форс-мажорні обставини, фотодні можуть бути
                  призупинені, або перенесені. Розраховуємо на ваше розуміння та обіцяємо оперативно
                  сповіщати про зміни у нашому інстаграмі.
                </p>

                <p className="mt-3 md:mt-5 text-center text-white">
                  Одягайтеся тепло, беріть коханих, гарний настрій та гарячі напої.
                </p>
              </div>
            </div>

            <div className="md:hidden">
              <Link href="" className="flex items-center justify-between gap-1">
                <div className="w-6 h-6">
                  <PhoneIcon />
                </div>
                <span>+ 38 098 060 0316</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="" className="flex items-center justify-between gap-1">
              <div className="w-6 h-6">
                <PhoneIcon />
              </div>
              <span>+ 38 098 060 0316</span>
            </Link>
          </div>

          <div className="w-screen md:w-1/2 md:left-1/2 md:-translate-x-1/2 h-80 -bottom-36 absolute z-30">
            <Image
              src={'/images/frame-bottom.png'}
              alt="Frame bottom image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

interface PaymentModalProps {
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (isOpen: boolean) => void;
}

const PaymentModal: FC<PaymentModalProps> = ({ isPaymentModalOpen, setIsPaymentModalOpen }) => {
  return (
    <div
      className={`${
        isPaymentModalOpen ? 'block' : 'hidden'
      } fixed top-0 left-0 w-screen h-screen z-40 p-5 md:p-10 bg-black bg-opacity-75 transition-all`}
      onClick={() => setIsPaymentModalOpen(false)}
    >
      <div
        className="h-full w-full bg-white rounded-md shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white w-full flex justify-end px-3 pt-3 md:px-10 md:pt-5 text-darkGreen">
          <button
            type="button"
            className="w-10 h-10 hover:scale-110 transition-transform"
            onClick={() => setIsPaymentModalOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="h-full">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dilqw_bIL00wQaPuyW8NSIj6ezdiPPLKcRW1FZ3A0u2Va6cSbUJBEBE-UwZaXr09UOspvcPjJ?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
