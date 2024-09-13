import "./Hero.css";
import arrowIcon from "../../assets/img/arrow.png";
import circleIcon from "../../assets/img/cyrcle.png";
import heroImage from "../../assets/img/Hero-pic.png";
import feathersImage from "../../assets/img/Feather-bg.png";
import { useRef, useEffect } from "react";

const Hero = () => {
  const feathersImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (feathersImageRef.current) {
        const rotation = `rotate(${(mouseX / window.innerWidth) * 10}deg)`;
        feathersImageRef.current.style.transform = rotation;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [feathersImageRef]);

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
        <img ref={feathersImageRef} src={feathersImage} alt="" />
      </div>
    </>
  );
};

export default Hero;
