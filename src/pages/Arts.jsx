import { data } from "../data/artsData";
import SectionTitle from "../components/SectionTitle";
import clsx from "clsx";
import ArtCard from "../components/ArtCard";

const Arts = ({ fromHome }) => {
  return (
    <main className={clsx(fromHome ? "" : "mt-16")}>
      <section className="wrapper section-padding">
        <SectionTitle title="Browse all arts" subtitle="Arts" />
        {/* ARTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data.map((art, index) => (
            <ArtCard key={art.id} art={art} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Arts;
