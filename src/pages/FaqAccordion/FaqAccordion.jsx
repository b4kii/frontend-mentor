import React from "react";
import styles from "./FaqAccordion.module.css";

import WomanMobile from "/src/assets/faq-accordion/images/illustration-woman-online-mobile.svg";
import BgPatternMobile from "/src/assets/faq-accordion/images/bg-pattern-mobile.svg";

function FaqItem({ question, answer }) {
  return (
    <div className={styles.faqItem}>
      <div className={styles.faqItemTop}>
        <p className={styles.question}>{question}</p>
        <span className={styles.arrowIcon}></span>
      </div>
      <div className={styles.faqItemBottom}>{answer}</div>
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <div className={styles.container}>
      <div className={styles.faqWrapper}>
        <img
          src={WomanMobile}
          alt="Woman mobile"
          className={styles.womanMobile}
        />
        <img src={BgPatternMobile} alt="" className={styles.bgPattern} />
        <div className={styles.faqItems}>
          <h1 className={styles.mainTitle}>FAQ</h1>
          <FaqItem
            question="How many team members can I invite?"
            answer="Idk"
          />
          <FaqItem
            question="What is the maximum file upload size?"
            answer="No more than 2GB. All files in your account must fit you allotted storage space."
          />
        </div>
      </div>
    </div>
  );
}
