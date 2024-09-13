import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import cartIcon from "../../../assets/img/Shopping.svg";
import userIcon from "../../../assets/img/profile.svg";
import languageIcon from "../../../assets/img/language.svg";
import activeIcon from "../../../assets/img/game-icons_feather.png";
import { useState, useEffect } from "react";
const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              <img src={cartIcon} alt="" />
            </li>
            <li className="pointer">
              <img src={userIcon} alt="" />
            </li>
            <li className="pointer">
              <img src={languageIcon} alt="" />
            </li>
          </ul>
        </nav>
      </header>
      <header className="mobile">
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
              <img src={cartIcon} alt="" />
            </li>
            <li className="pointer">
              <img src={userIcon} alt="" />
            </li>
            <li className="pointer">
              <img src={languageIcon} alt="" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
