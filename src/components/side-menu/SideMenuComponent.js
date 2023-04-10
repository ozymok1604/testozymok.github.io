import React from "react";

import styles from "./styles.css";

import Logo from "../../svg/logo.svg";

const SideMenuComponent = () => {
  return (
    <div className="side-menu">
      <img className="logo" src={Logo} />
      <div className="column-menu">
        <div className="menu-element">Dashboard</div>
        <div className="menu-element">Product</div>

        <div className="menu-element">Customers</div>

        <div className="menu-element">Income</div>
        <div className="menu-element">Promote</div>
        <div className="menu-element">Help</div>
      </div>
    </div>
  );
};

export { SideMenuComponent };
