import React from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/bag.svg";
import { useState, useRef } from "react";
import navicon from "../assets/navicon.svg";
import FocusLock from "react-focus-lock";
import "../styles/nav.css";
import { useOnClickOutside } from "./hooks";

import { connect, useSelector } from "react-redux";

// import { StyledMenu } from "./Nav.styled";

const Nav = ({ open, ...props }) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const total = useSelector((state) => state.totalAmount);

  const [openCart, setOpenCart] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpenCart(false));

  return (
    // <section className="nav-container">
    <div className={isActive ? "navigation-container" : "open"}>
      <section className="nav-items">
        <section className="menu-icons">
          <img src={navicon} className="navicon" onClick={handleToggle} />

          <div ref={node}>
            <FocusLock disabled={!openCart}>
              <NavLink
                open={openCart}
                setOpen={setOpenCart}
                id={menuId}
                to="/cart"
                className="cart-icon"
                style={{ textDecoration: "none" }}
              >
                <img src={cartIcon} />
                <aside className="aside-cart-number">{total}</aside>
              </NavLink>
            </FocusLock>
          </div>
        </section>

        <ul className={isActive ? "closed" : "menu-items"}>
          <li>
            <NavLink
              activeClassName="current"
              to="/menu"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2 className="menu-title">Meny</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2 className="menu-title">Vårt Kaffe</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to="/profile"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2 className="menu-title">Min profil</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to="/status"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2 className="menu-title">Orderstatus</h2>
            </NavLink>
          </li>
        </ul>
      </section>
      {/* </section> */}
    </div>
  );
};

export default Nav;

//TIDIGARE NAV

// export default Nav;

// export default ({ close }) => (

//   <div className="menu">
//       {/* <img src={navicon} className="menu-icon" onClick={}/> */}
//     <ul id="nav">
// <li>
//   <NavLink onClick={close} activeClassName="current" to="/menu">
//     Meny
//   </NavLink>
// </li>
// <li>
//   <NavLink onClick={close} activeClassName="current" to="/about">
//     Vårt Kaffe
//   </NavLink>
// </li>
// <li>
//   <NavLink onClick={close} activeClassName="current" to="/profile">
//     Min profil
//   </NavLink>
// </li>
// <li>
//   <NavLink onClick={close} activeClassName="current" to="/status">
//     Orderstatus
//   </NavLink>
// </li>
//       {/* <li><NavLink to="/cart">My cart</NavLink></li> */}

//     </ul>

//         <NavLink to="/cart">
//           {/* <i className="material-icons">shopping_cart</i> */}
//           <img src={cartIcon}/>
//         </NavLink>

//   </div>
// );

// // const [isActive, setActive] = useState('false');

// //   const handleToggle = () => {
// //     setActive(!isActive);
// //   }
