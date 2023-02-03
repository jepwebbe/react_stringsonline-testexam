import React, { useState } from "react";
import { StyledHeader } from "./Styled.Header";
import headerBg from "../../../assets/images/headerBg.png";
import cart from "../../../assets/images/cartIcon.png";
import { Link, NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { FaPhoneAlt } from "react-icons/fa";
import Breadcrumbs from "./Breadcrumbs";
import { useLoginStore } from "../../Login/useLoginStore";
import { useShoppingCartStore } from "../ShoppingCart/useShoppingCart/useShoppingCart";

const Header = () => {
  const { loggedIn, setLoggedIn } = useLoginStore();
  const [searchResults, setSearchResults] = useState([]);
  const { cartItems } = useShoppingCartStore();
  const handleLogout = () => {
    setLoggedIn(false, "", "");
  };
  return (
    <StyledHeader>
      <nav>
        <img src={headerBg} alt="StringsOnlines logo" />
        <ul>
          <li>
            <NavLink to="/">Forside</NavLink>
          </li>
          <li>
            <NavLink to="/terms">Salgs- og handelsbetingelser</NavLink>
          </li>
          <li>
            <button>{loggedIn ?  <span onClick={() => handleLogout()}>Logout</span> : <NavLink to="/login">Login</NavLink>}
            </button>
          </li>
        </ul>
      </nav>
      <div className="rightBox">
        <div>
          <a
            href="mailto:sales@stringsonline.com"
            target="_blank"
            rel="noreferrer"
          >
            SALES@STRINGSONLINE.COM
          </a>
          <p>
            <FaPhoneAlt className="phone" />
            +45 98 12 22 68
          </p>
          <Link to={loggedIn ? "/bruger" : "/login"}>
            <div className="cartContainer">
              <img src={cart} alt="Din indkøbskurv" />
              <div className="cartNumber">
                <p>{cartItems.length}</p>
              </div>
            </div>
          </Link>
        </div>
        <Search />
      </div>
      <div className="breadcrumbs">
        <Breadcrumbs />
        <Link to="/bruger">Ordrehistorik</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
