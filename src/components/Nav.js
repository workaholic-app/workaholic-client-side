import React from "react";
import styles from "../styles/Nav.module.scss";
import Logo from "../assets/logo.png";

const linkStyle = {
  marginRight: 15
};

const Nav = () => (
  <div>
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <img className="logo" alt="Logo" src={Logo} />
      </div>
    </nav>
  </div>
);

export default Nav;