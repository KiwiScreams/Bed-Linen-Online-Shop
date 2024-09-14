import Infobox from "../../components/infobox/Infobox";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import About from "../../components/about us/About";
import Sale from "../../components/sale/Sale";
const Home = () => {
  return (
    <>
      <Hero />
      <Infobox />
      <About />
      <Sale />
    </>
  );
};

export default Home;
