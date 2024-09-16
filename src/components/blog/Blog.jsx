import React, { useState } from "react";
import "./Blog.css";
import image from "../../assets/img/pillow_yellow 1.png";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Our Blog</h2>
        <div className="line"></div>
      </div>
      <div className="blog-body">
        <div className="slider">
          <div className="slides">
            <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
              <h3>Benefits Of Good Pellow</h3>
              <p>
                There has long been speculation about the impact that sleeping
                on a quality pillow and seeing your dreams have on each other.
                Some people believe that when you sleep on good pillows, it
                allows dream energy to flow freely, allowing for clearer and
                more vivid dreams. Others maintain that a good night's sleep is
                simply not possible without a comfortable and supportive pillow
                setting up the right environment. Whatever your opinion, it's
                hard to deny that the connection between dreaming and pillows
                should not be overlooked. After all, no matter what kind of
                mattress you may use, if your head isn't comfortably supported
                by a good pillow at night - then restful sleep and in-depth
                dreams will naturally suffer. So next time you're in search of
                better quality bed linen, don't forget to invest in some solid
                pillows too - they could just be the key to sweet dreamland!
              </p>
              <button>Read More</button>
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
          <button className="prev" onClick={handlePrevClick}>
            Prev
          </button>
          <button className="next" onClick={handleNextClick}>
            Next
          </button>
          <div className="dots">
            <span
              className={`dot ${currentSlide === 0 ? "active" : ""}`}
              onClick={() => handleDotClick(0)}
            ></span>
            <span
              className={`dot ${currentSlide === 1 ? "active" : ""}`}
              onClick={() => handleDotClick(1)}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
