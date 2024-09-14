import "./SubscribePanel.css";
import emailIcon from "../../assets/img/Vector.png";
import arrowIcon from "../../assets/img/arrow.png";
import circleIcon from "../../assets/img/cyrcle.png";
import { useState, useEffect } from "react";
const SubscribePanel = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(inputValue)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      return;
    }
    setEmail("");
  };

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
            value={email}
            onChange={handleInputChange}
          />
          <img src={emailIcon} alt="" />
          {error && <div className="error-message">{error}</div>}
        </div>
        <button onClick={handleSubmit}>
          <img src={arrowIcon} alt="" />
          <img src={circleIcon} alt="" className="img2" />
          <span>Subscribe Now</span>
        </button>
      </section>
    </>
  );
};

export default SubscribePanel;
