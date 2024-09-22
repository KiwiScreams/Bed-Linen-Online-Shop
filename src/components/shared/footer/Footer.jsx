import "./Footer.css";
import PhoneIcon from "../../../assets/img/Vector (1).svg";
import linkedinIcon from "../../../assets/img/Vector (2).svg";
import pinterestIcon from "../../../assets/img/Vector (3).svg";
import instagramIcon from "../../../assets/img/Vector (4).svg";
import emailIcon from "../../../assets/img/Vector.svg";
import locationIcon from "../../../assets/img/location.svg";
const Footer = () => {
  const icons = [
    {
      name: "locationIcon",
      alt: "location icon",
      text: "12 jhon Avenue #2, new York",
    },
    { name: "emailIcon", alt: "email icon", text: "sleepy@shop.com" },
    { name: "PhoneIcon", alt: "phone icon", text: "+1-222-34-sleep" },
    { name: "linkedinIcon", alt: "linkedin icon" },
    { name: "pinterestIcon", alt: "pinterest icon" },
    { name: "instagramIcon", alt: "instagram icon" },
  ];
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
              {icons.slice(0, 3).map((icon, index) => (
                <li key={index}>
                  <img src={icon.name} alt={icon.alt} />
                  {icon.text}
                </li>
              ))}
            </ul>
            <div className="social-icons-container">
              <span>Social Media: </span>
              {icons.slice(3).map((icon, index) => (
                <img key={index} src={icon.name} alt={icon.alt} />
              ))}
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
