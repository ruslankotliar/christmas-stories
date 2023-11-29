import Image from 'next/image';
import { christ, roboto } from './fonts';
import Link from 'next/link';
import { ExternalLink, Snowflake } from '@/components';

export default function Home() {
  return (
    <main>
      <section id="banner" className="h-screen pt-32 bg-primary relative">
        <div className="max-w-screen-xl mx-auto h-full py-4 px-8">
          <div className="absolute z-20 left-0 bottom-32 right-0 mx-auto" id="arrow-scroll-hint">
            <Link href="#services">
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>
          <div className="w-full h-full">
            <div className={`${christ.className} text-2xl flex justify-center items-center`}>
              <h1 className="relative">
                <span>Зимові фотодні у Кловському саду</span>
                <span className="absolute h-10 w-10 text-gold bottom-1/4 -right-12">
                  <Snowflake />
                </span>
              </h1>
            </div>
            <div className="my-10 h-1/2 relative">
              <Image
                src={'/images/main-bg.png'}
                alt="Christmas background image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md shadow-md"
              />
            </div>
            <div>
              <p className={`${roboto.className} text-base`}>
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
        className="h-screen bg-white flex justify-center items-center pt-32 pb-16"
      >
        <div className="max-w-screen-xl mx-auto px-8 h-full flex flex-col justify-between gap-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 h-full">
            {[
              {
                title: 'Фото на телефон',
                description:
                  'У вас є чудова нагода зробити затишні знімки на ваш мобільний телефон впродовж 10 хвилин.',
                image: '/images/temporary.png'
              },
              {
                title: 'Фото з нашим фотографом',
                description:
                  'У вас є чудова нагода зробити неповторні знімки з нашим фотографом впродовж 10 хвилин.',
                image: '/images/temporary.png'
              },
              {
                title: 'Фото зі своїм фотографом',
                description:
                  'У вас є чудова нагода зробити неймовірні знімки з нашим фотографом впродовж 10 хвилин.',
                image: '/images/temporary.png'
              }
            ].map(({ image, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-lg shadow-md text-center flex flex-col justify-between h-full overflow-hidden"
              >
                <div className="p-6 h-full relative">
                  <div className="m-4 h-full">
                    <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="bg-white px-2 py-4">
                  <h3 className={`${christ.className} text-xl font-semibold`}>{title}</h3>
                </div>
                <div className="bg-primary">
                  <p className="text-black p-4">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center">
            <button className={`${christ.className} button-86`} role="button">
              Забронювати місце
            </button>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="h-screen flex justify-center items-center pt-32 pb-20 bg-red"
      >
        <div className="flex justify-between align-center h-full max-w-screen-xl px-8 w-full gap-16">
          <div className="flex-1 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-medium mb-4">Різдвяні історії в Саду</h2>
              <div className="bg-white p-4 rounded-md shadow-md">
                <p className="text-base">
                  «Різдвяні історії в Саду» — це наша благодійна ініціатива, весь прибуток з якої
                  направляється до Gen.Ukrainian — громадська організація, яка профільно займається
                  ментальною реабілітацією дітей, які зіштовхнулись із жахіттями війни. Команда Gen
                  проводить психологічні інтенсиви, створює новітні програми реабілітації, веде
                  наукову діяльність, а також реалізує проєкти, шо покликані покращити ментальне
                  здоров’я дітей та дорослих. Gen лікує невидимі рани дітей заради нашого спільного
                  щасливого майбутнього.
                </p>
              </div>
            </div>
            <div className="w-fit">
              <Link
                href={'https://genukrainian.com.ua/en'}
                target={'_blank'}
                className="button-27 flex justify-between items-end"
                role="button"
              >
                <span>Gen.Ukrainian</span>
                <span className="inline-block h-6 w-6 text-gold ml-2">
                  <ExternalLink />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full h-full relative rounded-lg overflow-hidden">
            <Image
              src={'/images/fond.jpg'}
              fill
              alt="Fond logo"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </section>

      <section id="dates" className="h-screen flex justify-center items-center bg-white">
        <div className="max-w-screen-xl px-8 w-full md:flex justify-between items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Дати проведення:</h4>
            <p className="mb-4">6 - 24 грудня</p>

            <h4 className="text-lg font-bold mb-2">Умови різдвяних фотоднів:</h4>
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
                <li key={description} className="mb-2 flex justify-start items-start gap-2">
                  <span className="h-5 w-5 text-gold">
                    <Snowflake />
                  </span>
                  <span className="flex-1">{description}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4">
              <span className="font-bold">* запрошені фотографи</span> присутні на локації у вихідні
              дні (субота та неділя) з 10.00 до 15.00 та приймають гостей до зйомки за попереднім
              записом 🫶
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="bg-red p-8 shadow-md rounded-md">
              <p className="text-lg font-bold">
                Просимо звернути увагу, що грудень дуже неочікуваний місяць, тому через погодні
                умови або будь-які форс-мажорні обставини фотодні можуть бути призупинені або
                перенесені. Розраховуємо на ваше розуміння та будемо оперативно сповіщати про зміни
                у нашому інстаграмі ❄️
              </p>

              <p className="mt-4">
                Одягайтеся тепло, беріть коханих, гарний настрій та гарячі напої 🫶
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
