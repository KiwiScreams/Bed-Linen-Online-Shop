import "./Header.css";
import { Link } from "react-router-dom";
import cartIcon from "../../../assets/img/Shopping.svg";
import userIcon from "../../../assets/img/profile.svg";
import languageIcon from "../../../assets/img/language.svg";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Payment</Link>
            </li>
            <li>
              <Link>Catalog</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
          <ul>
            <li><img src={cartIcon} alt="" /></li>
            <li><img src={userIcon} alt="" /></li>
            <li><img src={languageIcon} alt="" /></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
