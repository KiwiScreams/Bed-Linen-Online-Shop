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
  return (
    <>
      <header className="desktop">
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active-link" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/payment"
                className={
                  location.pathname === "/payment" ? "active-link" : ""
                }
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className={
                  location.pathname === "/catalog" ? "active-link" : ""
                }
              >
                Catalog
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={location.pathname === "/shop" ? "active-link" : ""}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={location.pathname === "/blog" ? "active-link" : ""}
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul>
            <li className="pointer">
              <img src={cartIcon} alt="cart icon" />
            </li>
            <li className="pointer">
              <img src={userIcon} alt="user icon" />
            </li>
            <li className="pointer">
              <img src={languageIcon} alt="language icon" />
            </li>
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
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className={`${isMenuOpen ? "nav-open" : "nav-closed"}`}>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active-link" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/payment"
                className={
                  location.pathname === "/payment" ? "active-link" : ""
                }
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className={
                  location.pathname === "/catalog" ? "active-link" : ""
                }
              >
                Catalog
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={location.pathname === "/shop" ? "active-link" : ""}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={location.pathname === "/blog" ? "active-link" : ""}
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul>
            <li className="pointer">
              <img src={cartIcon} alt="cart icon" />
            </li>
            <li className="pointer">
              <img src={userIcon} alt="user icon" />
            </li>
            <li className="pointer">
              <img src={languageIcon} alt="language icon" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
