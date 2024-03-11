import React, { useState } from "react";
import styles from "./Header.module.css";
import { headerLinks, loginSignupCategories } from "../utils/constraints";
import menu from "/src/assets/header_section/menu.svg";
import close from "/src/assets/header_section/close.svg";
import rightArrow from "/src/assets/header_section/right-arrow.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.header}>
      {/*  Brand logo & link */}
      <div className={styles.brand}>
        <a href="/" className={styles.brandLink}>
          <img
            className={styles.brandLogo}
            src="/src/assets/header_section/stethoscope.svg"
            alt="PlateUp Logo"
          />
          <span>ProVital</span>
        </a>
      </div>

      {/* Header Links */}
      <div
        className={`${styles.test} ${styles.headerLinks} ${
          toggle ? "" : styles.hide
        }`}
      >
        {headerLinks.map((link) => (
          <a href={link.path} key={link.id} className={styles.linkContainer}>
            <div className={styles.headerLink}>
              {link.label}

              <span className={styles.space}></span>
            </div>
            <div className={styles.rightArrow}>
              <img src={rightArrow} alt="right" />
            </div>
          </a>
        ))}

        {/* Dropdown */}
        <div className={`${styles.headerLink} ${styles.dropdown}`}>
          <div className={`${styles.dropbtn} `}>
            <span className={styles.loginText}>Login / Signup</span>

            <img
              className={styles.downArrow}
              src="/src/assets/header_section/down-arrow.svg"
              alt="PlateUp Logo"
            />
          </div>
          <div className={styles.dropdownContent}>
            {loginSignupCategories.map((category) => (
              <div key={category.id} className={styles.category}>
                <div>{category.label}</div>
                <div className={styles.categoryLinks}>
                  <a href={category.loginPath}>Login</a>
                  <a href={category.signupPath}>Signup</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${styles.menu} ${toggle ? styles.close : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <img src={toggle ? close : menu} alt="" />
      </div>
    </div>
  );
};

export default Header;
