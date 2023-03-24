import { useState } from "react";
import styles from "./FaqAccordion.module.css";

import boxImage from "/src/assets/faq-accordion/images/illustration-box-desktop.svg";
// import FaqAccordionImage from "/src/assets/faq-accordion/design/desktop-preview.jpg";

import Preview from "../../components/Preview";
import FaqAccordionDesktopImage from "/src/assets/faq-accordion/design/desktop-design.jpg";
import FaqAccordionMobileImage from "/src/assets/faq-accordion/design/mobile-design.jpg";

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
    <>
      <main className={styles.container}>
        <div className={styles.faqWrapper}>
          <img src={boxImage} alt="box" className={styles.boxImage} />
          <div className={styles.imagesWrapper}>
            <div className={styles.womanImage}></div>
          </div>
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
      </main>
      <Preview imageMobile={FaqAccordionMobileImage} imageDesktop={FaqAccordionDesktopImage} />
    </>
  );
}
