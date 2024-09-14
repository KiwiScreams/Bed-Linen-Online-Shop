import Infobox from "../../components/infobox/Infobox";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import About from "../../components/about us/About";
import Sale from "../../components/sale/Sale";
import SubscribePanel from "../../components/subscribe panel/SubscribePanel";
const Home = () => {
  return (
    <>
      <Hero />
      <Infobox />
      <About />
      <Sale />
      <SubscribePanel />
    </>
  );
};

export default Home;
