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
        const rotationX = `perspective(1000px) rotateX(${
          (mouseY / window.innerHeight) * 2
        }deg)`;
        const rotationY = `perspective(1000px) rotateY(${
          (mouseX / window.innerWidth) * 2
        }deg)`;
        feathersImageRef.current.style.transform = `${rotationX} ${rotationY}`;
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
          <img src={arrowIcon} alt="arrow icon" />
          <img src={circleIcon} alt="circle icon" />
          <span>Shop Now</span>
        </button>
      </section>
      <div className="hero-images">
        <img src={heroImage} alt="bed linen" className="hero-image" />
        <img ref={feathersImageRef} src={feathersImage} alt="bed linen" />
      </div>
    </>
  );
};

export default Hero;
