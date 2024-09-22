import "./SubscribePanel.css";
import emailIcon from "../../assets/img/Vector.png";
import arrowIcon from "../../assets/img/arrow.png";
import circleIcon from "../../assets/img/cyrcle.png";
import { useState } from "react";
const SubscribePanel = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    if (e.type === "click") {
      e.preventDefault();
    }
    if (!email) {
      setError("Please enter an email address");
      return;
    }
    if (error) {
      return;
    }
    setEmail("Successful!");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
    document.getElementById("email").blur();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(inputValue)) {
      setError("Please enter a valid email address");
    } else if (inputValue === "") {
      setError("Please enter an email address");
    } else {
      setError("");
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
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
            onKeyDown={handleInputKeyDown}
            className={submitted ? "disabled" : ""}
          />
          <img src={emailIcon} alt="email icon" />
          {error && <div className="error-message">{error}</div>}
        </div>
        <button onClick={handleSubmit} className={submitted ? "disabled" : ""}>
          <img src={arrowIcon} alt="arrow icon" />
          <img src={circleIcon} alt="arrow icon" className="img2" />
          <span>Subscribe Now</span>
        </button>
      </section>
    </>
  );
};

export default SubscribePanel;
