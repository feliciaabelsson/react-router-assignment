import React from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/bag.svg";
import navicon from "../assets/navicon.svg";
import { useState } from "react";
import { connect, useSelector } from "react-redux";
import "../styles/nav.css";
const MenuToggleButton = ({ open, ...props }) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const total = useSelector((state) => state.total);

  return (
    <section className="menu-icons">
      <img src={navicon} className="navicon" onClick={handleToggle} />
      {/* <img src={cartIcon} className="carticon" onClick={handleToggle} /> */}
      <NavLink
        to="/cart"
        className="cart-icon"
        style={{ textDecoration: "none" }}
      >
        <img src={cartIcon} />
        <aside className="aside-cart-number">{total}</aside>
      </NavLink>
    </section>
  );
};

export default MenuToggleButton;
