import Image from 'next/image';
import Link from 'next/link';

// fonts

// components
import SnowflakeIcon from '@/components/icons/snowflake';
import ExternalLinkIcon from '@/components/icons/externalLink';

export default function Home() {
  return (
    <main className="text-black bg-beige">
      <section id="banner" className="h-screen pt-20 md:pt-32 relative">
        <div className="max-w-screen-xl mx-auto h-full px-8">
          <div
            className="absolute z-20 left-0 bottom-24 md:bottom-28 right-0 mx-auto"
            id="arrow-scroll-hint"
          >
            <Link href="#services">
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>
          <div className="w-full h-full">
            <div className={`flex flex-col justify-center items-center`}>
              <h1 className="text-xl md:text-2xl flex justify-between items-start md:gap-2 md:block md:relative">
                <span className="text-center text-darkGreen">РІЗДВЯНІ ІСТОРІЇ Кловського саду</span>
                <span className="md:absolute h-10 w-20 md:h-10 md:w-10 text-green md:bottom-1/4 md:-right-12">
                  <SnowflakeIcon />
                </span>
              </h1>
              <div>
                <p className="text-sm md:text-base">6 - 24 грудня</p>
              </div>
            </div>
            <div className="my-4 md:my-10 h-1/2 relative">
              <Image
                src={'/images/main-bg.png'}
                alt="Christmas background image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md shadow-md"
              />
            </div>
            <div>
              <p className={`text-sm md:text-base`}>
                Різдво — надзвичайно світле, тепле свято з глибоким корінням та найулюбленіше свято
                дорослих та дітей! Цього року Кловський Сад створює неповторну благодійну фотозону
                «Різдвяні історії», щоб кожен міг закарбувати найгарніші моменти та долучитися до
                чудової доброї справи. Весь грудень містяни та гості столиці зможуть зробити
                атмосферні фото на казковому фасаді.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="h-screen flex justify-center items-center pt-20 md:pt-32 pb-10 md:pb-16"
      >
        <div className="w-screen max-w-screen-xl mx-auto px-8 h-full flex flex-col justify-between gap-10 md:gap-14">
          <div className="block md:hidden h-full relative rounded-md shadow-sm overflow-hidden">
            <Image
              src={'/images/temporary.png'}
              alt={'Photo example'}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 h-full">
            {[
              {
                title: 'Фото на телефон',
                price: '300',
                description:
                  'У вас є чудова нагода зробити затишні знімки на ваш мобільний телефон до 10 хвилин.',
                image: '/images/temporary.png'
              },
              {
                title: 'Фото зі своїм фотографом',
                price: '500',
                description:
                  'У вас є чудова нагода зробити неймовірні знімки зі своїм фотографом до 10 хвилин.',
                image: '/images/temporary.png'
              },
              {
                title: 'Фото з нашим фотографом',
                price: '1000',
                description:
                  'У вас є чудова нагода зробити неповторні знімки з нашим фотографом до 10 хвилин.',
                image: '/images/temporary.png'
              }
            ].map(({ image, title, description, price }) => (
              <div
                key={title}
                className="rounded-lg shadow-md text-center flex flex-col justify-between h-fit md:h-full overflow-hidden"
              >
                <div className="hidden md:block p-6 h-full relative">
                  <div className="m-4 h-full">
                    <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="px-2 py-2 md:py-4 md:min-h-[104px] xl:min-h-0 flex items-center justify-center">
                  <h3 className={`text-lg md:text-xl font-semibold uppercase`}>{title}</h3>
                </div>
                <hr className="md:my-1 mx-3 h-[0.5px] md:h-0.5 border-t-0 bg-green opacity-100 dark:opacity-50" />
                <div>
                  <p className="text-black px-2 md:px-4 py-1  md:p-3 text-sm md:text-base">
                    {description}
                  </p>
                </div>
                <hr className="md:my-1 mx-10 h-[0.25px] md:h-[0.5px] border-t-0 bg-green opacity-100 dark:opacity-50" />
                <div>
                  <h5 className="text-black font-semibold py-1 md:py-2 text-sm md:text-base">
                    {price} <span className="font-normal">грн</span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center mb-5">
            <Link
              href={'#calendar'}
              // href={'https://calendar.app.google/9R3ySGQoUvdwVJsq9'}
              // href={'https://forms.gle/3wSGmWZrpKxQxNVs9'}
              // target="_blank"
              className={`button-86`}
            >
              Забронювати місце
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="h-screen flex justify-center items-center pt-20 md:pt-32 pb-10 md:pb-16"
      >
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center h-full md:max-h-[30rem] max-w-screen-xl px-8 w-full gap-10 md:gap-16">
          <div className="flex md:flex-1 flex-col md:h-full justify-between">
            <div>
              <h2 className="text-2xl font-medium mb-2 md:mb-4 text-darkGreen">
                Різдвяні історії в Саду
              </h2>
              <div className="p-4 rounded-md shadow-md bg-green">
                <p className="text-sm md:text-base">
                  «Різдвяні історії в Саду» — це наша благодійна ініціатива, весь прибуток з якої
                  направляється до{' '}
                  <Link
                    href={'https://genukrainian.com.ua/en'}
                    target={'_blank'}
                    role="button"
                    className="text-white underline"
                  >
                    Gen.Ukrainian
                  </Link>{' '}
                  — громадська організація, яка профільно займається ментальною реабілітацією дітей,
                  які зіштовхнулись із жахіттями війни. Команда Gen проводить психологічні
                  інтенсиви, створює новітні програми реабілітації, веде наукову діяльність, а також
                  реалізує проєкти, шо покликані покращити ментальне здоров’я дітей та дорослих. Gen
                  лікує невидимі рани дітей заради нашого спільного щасливого майбутнього.
                </p>
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
          <div className="w-full md:flex-1 h-full relative rounded-lg overflow-hidden">
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
        className="h-screen flex justify-center items-center pt-20 md:pt-32 pb-10 md:pb-16"
      >
        <div className="max-w-screen-xl px-8 w-full flex flex-col md:flex-row justify-start md:justify-between items-center h-full gap-5 md:gap-10">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2">
              Умови різдвяних фотоднів:
            </h4>
            <ul>
              {[
                {
                  description: '300 грн фото на телефон до 10 хв'
                },
                {
                  description: '500 грн фото зі своїм фотографом до 10 хвилин'
                },
                {
                  description:
                    '1000 грн фото із нашим запрошеним фотографом* до 10 хв (15 кадрів в обробці, віддаються протягом 3х робочих днів)'
                }
              ].map(({ description }) => (
                <li
                  key={description}
                  className="mb-1 md:mb-2 flex justify-start items-start gap-1 md:gap-2"
                >
                  <span className="w-4 h-4 md:h-5 md:w-5 text-green">
                    <SnowflakeIcon />
                  </span>
                  <span className="flex-1 text-sm md:text-base">{description}</span>
                </li>
              ))}
            </ul>

            <p className="mt-2 md:mt-4 text-sm md:text-base">
              <span className="font-bold">* запрошені фотографи</span> присутні на локації у вихідні
              дні (субота та неділя) з 10.00 до 15.00 та приймають гостей до зйомки за попереднім
              записом 🫶
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="p-4 md:p-8 shadow-md rounded-md bg-green">
              <p className="text-base md:text-lg font-bold">
                Просимо звернути увагу, що грудень дуже неочікуваний місяць, тому через погодні
                умови або будь-які форс-мажорні обставини фотодні можуть бути призупинені або
                перенесені. Розраховуємо на ваше розуміння та будемо оперативно сповіщати про зміни
                у нашому інстаграмі ❄️
              </p>

              <p className="mt-2 md:mt-4">
                Одягайтеся тепло, беріть коханих, гарний настрій та гарячі напої 🫶
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="calendar"
        className="h-screen flex justify-center items-cente pt-20 md:pt-32 pb-10 md:pb-16 bg-white"
      >
        <div className="max-w-screen-xl w-full h-full">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dilqw_bIL00wQaPuyW8NSIj6ezdiPPLKcRW1FZ3A0u2Va6cSbUJBEBE-UwZaXr09UOspvcPjJ?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
