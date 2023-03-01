import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";

import { NavLink } from "react-router-dom";

import FaqAccordionImage from "/src/assets/faq-accordion/design/desktop-preview.jpg";
import IntroComponentImage from "/src/assets/intro-component/design/desktop-preview.jpg";
import PricingComponentImage from "/src/assets/pricing-component/design/desktop-preview.jpg";
import SocialProofImage from "/src/assets/social-proof-section/design/desktop-preview.jpg";
import TipCalculatorImage from "/src/assets/tip-calculator/design/desktop-preview.jpg";

function MenuItem({ path, children, src }) {
  return (
    <>
      <NavLink to={path} className={styles.menuLink}>
        <span className={styles.linkText}>{children}</span>
      </NavLink>
      <div className={styles.sideWrapper}>
        <h1>PREVIEW</h1>
        <img
          src={src}
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
    Array.from(menuRef.current.getElementsByClassName(styles.menuLink)).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menuRef.current.dataset.activeIndex = index;
        };
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.menu} ref={menuRef} id={styles.menu}>
        <div className={styles.menuItems}>
          <MenuItem
            path="/faq-accordion"
            // src="faq-accordion"
            src={FaqAccordionImage}
          >
            Faq Accordion
          </MenuItem>
          <MenuItem
            path="/intro-component"
            // src="intro-component"
            src={IntroComponentImage}
          >
            Intro Component
          </MenuItem>
          <MenuItem
            path="/pricing-component"
            // src="pricing-component"
            src={PricingComponentImage}
          >
            Pricing Component
          </MenuItem>
          <MenuItem
            path="/social-proof-section"
            // src="social-proof-section"
            src={SocialProofImage}
          >
            Social Proof Section
          </MenuItem>
          <MenuItem
            path="/tip-calculator"
            // src="tip-calculator"
            src={TipCalculatorImage}
          >
            Tip Calculator
          </MenuItem>
        </div>
        <div className={styles.pattern}></div>
      </div>
    </div>
  );
}
