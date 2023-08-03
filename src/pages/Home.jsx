import Hero from "../components/Hero";
import Arts from "./Arts";

const Home = () => {
  return (
    <main className="mt-16">
      <Hero />
      <Arts fromHome />
    </main>
  );
};

export default Home;
