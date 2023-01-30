import React from "react";
import { StyledHeader } from "./Styled.Header";
import headerBg from "../../../assets/images/headerBg.png";
import cart from "../../../assets/images/cartIcon.png";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { FaPhoneAlt } from "react-icons/fa"

import useGetApiDataFromEndpoint from "../../../Hooks/useGetApiDataFromEndpoint";
import Breadcrumbs from "./Breadcrumbs";


const Header = () => { 
 
  return (
    <StyledHeader>
      <nav>
        <img src={headerBg} alt="StringsOnlines logo" />
        <ul>
          <li>
            <NavLink to="/">Forside</NavLink>
          </li>
          <li>
            <NavLink to="terms">Salgs- og handelsbetingelser</NavLink>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
      <div className="rightBox">
        <div>
          <a href="mailto:sales@stringsonline.com" target="_blank" rel="noreferrer">
            SALES@STRINGSONLINE.COM
          </a>
          <p><FaPhoneAlt className="phone"/>+45 98 12 22 68</p>
          <img src={cart} alt="Din indkøbskurv" />
        </div>
        <Search />
      </div>
      <div className="breadcrumbs"><Breadcrumbs /></div>
    </StyledHeader>
  );
};

export default Header;
