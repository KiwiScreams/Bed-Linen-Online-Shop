import "./Footer.css";
import PhoneIcon from "../../../assets/img/Vector (1).svg";
import linkedinIcon from "../../../assets/img/Vector (2).svg";
import pinterestIcon from "../../../assets/img/Vector (3).svg";
import instagramIcon from "../../../assets/img/Vector (4).svg";
// import locationIcon from "../../../assets/img/Vector (6).svg";
import arrowLeft from "../../../assets/img/Vector (6).svg";
import arrowRight from "../../../assets/img/Vector (5).svg";
import emailIcon from "../../../assets/img/Vector.svg";
import locationIcon from "../../../assets/img/location.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-img"></div>
        <div>
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
          <div>
            <ul>
              <li>
                <img src={locationIcon} alt="" />
                12 jhon Avenue #2, new York
              </li>
              <li>
                <img src={emailIcon} alt="" />
                sleepy@shop.com
              </li>
              <li>
                <img src={PhoneIcon} alt="" />
                +1-222-34-sleep
              </li>
            </ul>
            <div>
              <span>Social Media: </span>
              <img src={linkedinIcon} alt="" />
              <img src={pinterestIcon} alt="" />
              <img src={instagramIcon} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
