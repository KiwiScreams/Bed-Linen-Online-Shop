import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import cartIcon from "../../../assets/img/Shopping.svg";
import userIcon from "../../../assets/img/profile.svg";
import languageIcon from "../../../assets/img/language.svg";
import activeIcon from "../../../assets/img/game-icons_feather.png";
import { useState, useEffect, useRef } from "react";
const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileHeaderRef = useRef(null);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleDocumentClick = (event) => {
    if (!mobileHeaderRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/payment", text: "Payment" },
    { to: "/catalog", text: "Catalog" },
    { to: "/shop", text: "Shop" },
    { to: "/blog", text: "Blog" },
  ];
  const icons = [
    { src: cartIcon, alt: "cart icon" },
    { src: userIcon, alt: "user icon" },
    { src: languageIcon, alt: "language icon" },
  ];
  const bars = [
    { className: "bar1" },
    { className: "bar2" },
    { className: "bar3" },
  ];
  return (
    <>
      <header className="desktop">
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? "active-link" : ""}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {icons.map((icon, index) => (
              <li key={index} className="pointer">
                <img src={icon.src} alt={icon.alt} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <header className="mobile">
        <nav
          className={`${isMenuOpen ? "nav-open" : "nav-closed"} `}
          ref={mobileHeaderRef}
        >
          <div
            className={`bar-container ${isMenuOpen ? "change" : ""}`}
            onClick={handleMenuToggle}
          >
            {bars.map((bar, index) => (
              <div key={index} className={bar.className}></div>
            ))}
          </div>
          <ul className={`${isMenuOpen ? "nav-open" : "nav-closed"}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? "active-link" : ""}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {icons.map((icon, index) => (
              <li key={index} className="pointer">
                <img src={icon.src} alt={icon.alt} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
