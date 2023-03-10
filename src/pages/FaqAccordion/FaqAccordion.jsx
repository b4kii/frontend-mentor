import { useState } from "react";
import styles from "./FaqAccordion.module.css";

import womanImage from "/src/assets/faq-accordion/images/illustration-woman-online-mobile.svg";
import illustrationBox from "/src/assets/faq-accordion/images/illustration-box-desktop.svg";

function FaqItem({ question, answer }) {
  const [activeItem, setActiveItem] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div
        className={styles.faqItemTop}
        onClick={() => {
          setActiveItem((prev) => !prev);
        }}
      >
        <p
          className={
            activeItem ? `${styles.question} ${styles.active}` : styles.question
          }
        >
          {question}
        </p>
        <span
          className={
            activeItem
              ? `${styles.arrowIcon} ${styles.active}`
              : styles.arrowIcon
          }
        ></span>
      </div>
      <div className={styles.faqItemBottom}>
        <p
          className={
            activeItem ? `${styles.answer} ${styles.active}` : styles.answer
          }
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <div className={styles.container}>
      <div className={styles.faqWrapper}>
        <div className={styles.imagesWrapper}>
          <div className={styles.womanImage}></div>
          <div className={styles.bgPattern}></div>
          <div className={styles.boxImage}></div>
        </div>
        {/* <img
          src={womanImage}
          alt="Woman image"
          className={styles.womanImage}
        />
        <img
          src={illustrationBox}
          alt="Illustartion box"
          className={styles.illustrationBox}
        /> */}
        <div className={styles.faqItems}>
          <h1 className={styles.mainTitle}>FAQ</h1>
          <FaqItem
            question="How many team members can I invite?"
            answer="Lorem ipsum"
          />
          <FaqItem
            question="What is the maximum file upload size?"
            answer="No more than 2GB. All files in your account must fit you allotted storage space."
          />
          <FaqItem
            question="How do I reset my password?"
            answer="Lorem ipsum"
          />
          <FaqItem
            question="Can I cancel my subscription?"
            answer="Lorem ipsum"
          />
          <FaqItem
            question="Do you provide additional support?"
            answer="Lorem ipsum"
          />
        </div>
      </div>
    </div>
  );
}
