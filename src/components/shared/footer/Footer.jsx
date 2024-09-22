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
      src: locationIcon,
    },
    {
      name: "emailIcon",
      alt: "email icon",
      text: "sleepy@shop.com",
      src: emailIcon,
    },
    {
      name: "PhoneIcon",
      alt: "phone icon",
      text: "+1-222-34-sleep",
      src: PhoneIcon,
    },
    { name: "linkedinIcon", alt: "linkedin icon", src: linkedinIcon },
    { name: "pinterestIcon", alt: "pinterest icon", src: pinterestIcon },
    { name: "instagramIcon", alt: "instagram icon", src: instagramIcon },
  ];
  const footerLinks = [
    ["About", "Our Story", "Our Impact", "FAQ"],
    ["Customer Recourses", "E-Catalog", "Request Catalog", "Support"],
    ["Services", "Delivery & Shipping", "Returns", "Guaranlee"],
  ];
  return (
    <>
      <footer>
        <div className="footer-img"></div>
        <div className="footer-top">
          {footerLinks.map((links, index) => (
            <ul key={index}>
              {links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          ))}
          <div className="footer-container">
            <ul>
              {icons.slice(0, 3).map((icon, index) => (
                <li key={index}>
                  <img src={icon.src} alt={icon.alt} />
                  {icon.text}
                </li>
              ))}
            </ul>
            <div className="social-icons-container">
              <span>Social Media: </span>
              {icons.slice(3).map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} />
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
