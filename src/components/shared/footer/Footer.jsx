import "./Footer.css";
import PhoneIcon from "../../../assets/img/Vector (1).svg";
import linkedinIcon from "../../../assets/img/Vector (2).svg";
import pinterestIcon from "../../../assets/img/Vector (3).svg";
import instagramIcon from "../../../assets/img/Vector (4).svg";
import locationIcon from "../../../assets/img/Vector (6).svg";
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
            <li>
              <img src={locationIcon} alt="" />
              Services
            </li>
            <li>Delivery & Shipping</li>
            <li>Returns</li>
            <li>Guaranlee</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
