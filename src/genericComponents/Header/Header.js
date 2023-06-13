import React, { useState } from "react";
import HeaderTemplate from "./HeaderTemplate";
import logo from "../../assets/images/logo.svg";
import Navigation from "./components/Navigation/Navigation";
import UserInfo from "./components/UserInfo/UserInfo";
import BurgerMenuNavPanel from "./components/Navigation/BurgerMenuNavPanel";
import "./Header.css";
import burgerNavIcon from "../../assets/images/icon-menu.svg";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let navWidth;
  let navItemDisplay;
  let burgerNavDisplay;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen == false) {
    navWidth = "0";
    navItemDisplay = "none";
    burgerNavDisplay = "none"
  } else {
    navWidth = "75%";
    navItemDisplay = "block";
    burgerNavDisplay = "flex"
  }

  return (
    <HeaderTemplate
      logo={<img src={logo} style={{ zIndex: "2" }}></img>}
      nav={<Navigation />}
      userInfo={<UserInfo handleCart={props.handleCart} />}
      dropdown={props.dropdown}
      burgerNav={
        <nav>
          <button onClick={toggleMenu} id="burger-nav-btn">
            <img src={burgerNavIcon}></img>
          </button>
          <BurgerMenuNavPanel
            navItemDisplay={navItemDisplay}
            burgerNavDisplay ={burgerNavDisplay}
            navWidth={navWidth}
            collections={"Collection"}
            men={"Men"}
            women={"Women"}
            about={"About"}
            contact={"Contact"}
          />
        </nav>
      }
    />
  );
}

export default Header;
