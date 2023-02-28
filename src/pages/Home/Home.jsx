import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";

import { NavLink } from "react-router-dom";

function MenuItem({ path, children, sideType, src }) {
  return (
    <>
      <NavLink to={path} className={styles.menuLink}>
        <span className={styles.linkText}>{children}</span>
      </NavLink>
      <div className={`${sideType} ${styles.sideWrapper}`}>
        <h1>PREVIEW</h1>
        <img
          src={`frontend-mentor/src/assets/${src}/design/desktop-preview.jpg`}
          alt={children}
          height="660"
          width="900"
        />
      </div>
    </>
  );
}

export default function Home() {
  const menuRef = useRef();

  useEffect(() => {
    Array.from(menuRef.current.getElementsByClassName(styles.menuLink)).forEach((item, index) => {
      item.onmouseover = () => {
        menuRef.current.dataset.activeIndex = index;
      }
    })
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.menu} ref={menuRef} id={styles.menu}>
        <div className={styles.menuItems}>
          <MenuItem path="/faq-accordion" sideType={styles.red} src="faq-accordion">
            Faq Accordion
          </MenuItem>
          <MenuItem path="/intro-component" sideType={styles.green} src="intro-component">
            Intro Component
          </MenuItem>
          <MenuItem
            path="/pricing-component"
            sideType={styles.blue}
            src="pricing-component"
          >
            Pricing Component
          </MenuItem>
          <MenuItem
            path="/social-proof-section"
            sideType={styles.purple}
            src="social-proof-section"
          >
            Social Proof Section
          </MenuItem>
          <MenuItem
            path="/tip-calculator"
            sideType={styles.yellow}
            src="tip-calculator"
          >
            Tip Calculator
          </MenuItem>
        </div>
        <div className={styles.pattern}></div>
      </div>
    </div>
  );
}
