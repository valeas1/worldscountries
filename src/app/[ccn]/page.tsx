import BackButton from '@/components/controllers/components/BackButton';
import { FC } from 'react';
import Image from 'next/image';
import { IState } from '@/types';
import Link from 'next/link';

async function getData(ccn: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${ccn}`, {
    next: { revalidate: 1 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const CountryPage: FC<{ params: { ccn: string } }> = async ({ params: { ccn } }) => {
  const data: IState[] = await getData(ccn);

  const names = Object.keys(data[0].name.nativeName);

  const currencies = Object.keys(data[0].currencies);

  return (
    <>
      <main className="mx-auto max-w-[1312px] px-6">
        <section className="py-10 lg:py-20">
          <BackButton />
          <div className="mt-16 lg:mt-20 lg:flex lg:items-center lg:justify-between">
            <div className="relative aspect-[1.4/1] rounded-[5px] lg:w-[45%]">
              <Image
                src={data[0].flags.svg}
                alt="flag"
                fill
                className="rounded-[5px] object-cover"
              />
            </div>
            <div className="mt-11 lg:mt-0 lg:w-[50%]">
              <h1 className="text-text text-[22px] font-extrabold lg:text-[32px]">
                {data[0].name.common}
              </h1>
              <div className="mt-4 lg:mt-6 lg:flex lg:justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-text text-sm font-semibold lg:text-base">
                    Native Name:{' '}
                    <span className="text-text text-sm font-light">
                      {data[0].name.nativeName[names[0]].official}
                    </span>
                  </p>
                  <p className="text-text text-sm font-semibold lg:text-base">
                    Population:{' '}
                    <span className="text-text text-sm font-light">
                      {data[0].population.toLocaleString('en')}
                    </span>
                  </p>
                  <p className="text-text text-sm font-semibold lg:text-base">
                    Region: <span className="text-text text-sm font-light">{data[0].region}</span>
                  </p>
                  <p className="text-text text-sm font-semibold lg:text-base">
                    Sub Region:{' '}
                    <span className="text-text text-sm font-light">{data[0].subregion}</span>
                  </p>
                  <p className="text-text text-sm font-semibold lg:text-base">
                    Capital: <span className="text-text text-sm font-light">{data[0].capital}</span>
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-2 lg:mt-0">
                  <p className="text-text text-sm font-semibold lg:text-base">
                    Top Level Domain:{' '}
                    <span className="text-text text-sm font-light">{data[0].tld[0]}</span>
                  </p>
                  <p className="text-text text-sm font-semibold lg:text-base">
                    Currencies:{' '}
                    <span className="text-text text-sm font-light">
                      {data[0].currencies[currencies[0]].name}
                    </span>
                  </p>
                  <p className="text-text text-sm font-semibold lg:text-base">
                    Languages:{' '}
                    <span className="text-text text-sm font-light lg:text-base">
                      {Object.values(data[0].languages).join(', ')}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-8 lg:flex lg:items-center">
                <p className="text-text text-[16px] font-semibold lg:mr-4">Border Countries: </p>
                <div className="mt-4 flex flex-wrap gap-2 lg:mt-0">
                  {data[0].borders &&
                    data[0].borders.map(async (item, index) => {
                      const state: IState[] = await getData(item);
                      return (
                        <Link
                          key={index}
                          className="text-text bg-transition rounded-[2px] bg-white px-6 py-2 text-xs font-light
                                    shadow-[0px_0px_4px_1px_rgba(0,0,0,0.10)] lg:text-base dark:bg-HeaderDark"
                          href={`/${item}`}
                        >
                          {state[0].name.common}
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CountryPage;
