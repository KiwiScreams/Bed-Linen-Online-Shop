import "./About.css";
import aboutImage from "../../assets/img/About-pic.png";
const About = () => {
  return (
    <>
      <section className="about-us-section">
        <div>
          <h2>About Sleepy Shop</h2>
          <p>
            Sleepy is the perfect bedding store for anyone looking to give their
            bedroom a makeover. With a wide selection of linens including
            sheets, duvet covers, quilts and pillow cases, they have something
            to suit every taste. They offer several color options, patterns and
            textures so that you can create the perfect ambience in your
            bedroom. Their quality is second to none, with materials well-chosen
            for comfort and durability.
          </p>
          <button>Read More</button>
        </div>
        <div>
          <img src={aboutImage} alt="about image" />
        </div>
      </section>
    </>
  );
};

export default About;
