import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function search({ searchResults }) {
  const router = useRouter();
  console.log({ searchResults });

  const { location, startDate, endDate, numberGuests } = router.query;
  const formattedStartdate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartdate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberGuests} guests`} />

      <main className="relative flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range} - for {numberGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>
          <div className="hidden md:inline-flex mb-5 space-x-2 text-gray-800 whitespace-nowrap">
            <p className="button">yoyo </p>
            <p className="button">type of places</p>
            <p className="button">yoyo yacine</p>
            <p className="button">price</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="inline-flex max-h-screen sticky top-0 min-w-[700px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Fotter />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  console.log("before await ");

  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  console.log({ searchResults });
  return {
    props: {
      searchResults,
    },
  };
}
