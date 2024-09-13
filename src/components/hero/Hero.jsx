import "./Hero.css";
import arrowIcon from "../../assets/img/arrow.png";
import circleIcon from "../../assets/img/cyrcle.png";
import heroImage from "../../assets/img/Hero-pic.png";
import feathersImage from "../../assets/img/Feather-bg.png";
const Hero = () => {
  return (
    <>
      <section className="hero-component">
        <h1>Dream in comfort</h1>
        <p>Creating Your Perfect Sleep Sanctuary With Us</p>
        <button>
          <img src={arrowIcon} alt="" />
          <img src={circleIcon} alt="" />
          <span>Shop Now</span>
        </button>
      </section>
      <div className="hero-images">
        <img src={heroImage} alt="" className="hero-image" />
        <img src={feathersImage} alt="" />
      </div>
    </>
  );
};

export default Hero;
