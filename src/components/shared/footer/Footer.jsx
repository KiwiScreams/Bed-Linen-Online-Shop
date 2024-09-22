import "./Footer.css";
import PhoneIcon from "../../../assets/img/Vector (1).svg";
import linkedinIcon from "../../../assets/img/Vector (2).svg";
import pinterestIcon from "../../../assets/img/Vector (3).svg";
import instagramIcon from "../../../assets/img/Vector (4).svg";
import emailIcon from "../../../assets/img/Vector.svg";
import locationIcon from "../../../assets/img/location.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-img"></div>
        <div className="footer-top">
          <ul>
            <li>About</li>
            <li>Our Story</li>
            <li>Our Impact</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Customer Recourses</li>
            <li>E-Catalog</li>
            <li>Request Catalog</li>
            <li>Support</li>
          </ul>
          <ul>
            <li>Services</li>
            <li>Delivery & Shipping</li>
            <li>Returns</li>
            <li>Guaranlee</li>
          </ul>
          <ul>
            <li>Services</li>
            <li>Delivery & Shipping</li>
            <li>Returns</li>
            <li>Guaranlee</li>
          </ul>
          <div className="footer-container">
            <ul>
              <li>
                <img src={locationIcon} alt="location icon" />
                12 jhon Avenue #2, new York
              </li>
              <li>
                <img src={emailIcon} alt="email icon" />
                sleepy@shop.com
              </li>
              <li>
                <img src={PhoneIcon} alt="phone icon" />
                +1-222-34-sleep
              </li>
            </ul>
            <div className="social-icons-container">
              <span>Social Media: </span>
              <img src={linkedinIcon} alt="linkedin icon" />
              <img src={pinterestIcon} alt="pinterest icon" />
              <img src={instagramIcon} alt="instagram icon" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Created By Elinaui9 </p>
          <p>Copyright 2023 sleepy shop . All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
