import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import SectionBanner from "../components/SectionBanner";
import BigCard from "../components/BigCard";
import LastBanner from "../components/LastBanner";
import Fotter from "../components/Fotter";

export default function Home({ data, bigCardData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** header */}
      <Header />
      {/* banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="font-semibold text-4xl">Explore Nearby </h2>
          <div className=" space-y-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ img, location, distance }) => (
              <Card
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className=" pt-6 cursor-pointer">
          <SectionBanner />
        </section>

        <section className="pt-8">
          <h2 className="font-semibold text-4xl">Live Anywhere </h2>
          <div className="flex overflow-x-scroll space-x-3 pt-4 scrollbar-hide">
            {bigCardData?.map(({ img, title }) => (
              <BigCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section className=" pt-6 cursor-pointer">
          <LastBanner />
        </section>
      </main>
      <div className="border-t bg-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );
  const bigCardData = await fetch("https://jsonkeeper.com/b/VHHT").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
      bigCardData,
    },
  };
}
