import MainContent from '@/components/maincontent/MainContent';

async function getData(url: string) {
  const res = await fetch(url, { next: { revalidate: 1 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Home = async () => {
  const data = await getData('https://restcountries.com/v3.1/all');

  const region: { region: string }[] = await getData(
    'https://restcountries.com/v3.1/all?fields=region',
  );

  return (
    <>
      <main className="mx-auto max-w-[1312px] px-4">
        <MainContent
          state={data}
          regions={Array.from(new Set(region.map((item) => item.region))).sort()}
        />
      </main>
    </>
  );
};

export default Home;
