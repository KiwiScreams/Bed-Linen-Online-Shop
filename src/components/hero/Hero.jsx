import "./Hero.css";
import arrowIcon from "../../assets/img/arrow.png";
import circleIcon from "../../assets/img/cyrcle.png";
const Hero = () => {
  return (
    <>
      <section className="hero-component">
        <h1>Dream in comfort</h1>
        <p>Creating your perfect sleep sanctuary with us</p>
        <button>
            <img src={arrowIcon} alt="" />
            <img src={circleIcon} alt="" />
            shop now
        </button>
      </section>
    </>
  );
};

export default Hero;
