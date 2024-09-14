import "./Sale.css";
import arrowIcon from "../../assets/img/arrow.png";
import circleIcon from "../../assets/img/cyrcle.png";
const Sale = () => {
  return (
    <>
      <section className="sale-section">
        <div>
          <h2>SAVE UP TO 70% OFF</h2>
          <p>
            Our pillows are the perfect way to improve your sleep quality, and
            now there's even more incentive to upgrade with our 70% off offer!
            Get cozy with a premium pillow that is soft, supportive, and durable
            enough to last for years
          </p>
          <button>
            <img src={arrowIcon} alt="" />
            <img src={circleIcon} alt="" />
            <span>Shop Now</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Sale;
