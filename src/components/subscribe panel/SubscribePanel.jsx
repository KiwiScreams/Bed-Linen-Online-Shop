import "./SubscribePanel.css";
import emailIcon from "../../assets/img/Vector.png";
import arrowIcon from "../../assets/img/arrow.png";
import circleIcon from "../../assets/img/cyrcle.png";
const SubscribePanel = () => {
  return (
    <>
      <section className="subscribe-section">
        <h5>Subscribe to get the latest news about us</h5>
        <p>
          Sign up for our newsletter & knowing about
          <br /> offers We never spam your inbox, so don't worry.
        </p>
        <div className="input-container">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <img src={emailIcon} alt="" />
        </div>
        <button>
          <img src={arrowIcon} alt="" />
          <img src={circleIcon} alt="" />
          <span>Buy Now</span>
        </button>
      </section>
    </>
  );
};

export default SubscribePanel;
