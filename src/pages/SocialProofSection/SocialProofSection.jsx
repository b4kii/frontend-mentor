import React from "react";
import styles from "./SocialProofSection.module.css";

function Rating({ children }) {
  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.stars}>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
        <span className={styles.star}></span>
      </div>
      <p>{children}</p>
    </div>
  );
}

function Card({ image, name, children }) {
  return <div>Card</div>;
}

export default function SocialProofSection() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <h1>
              <span>10,000+</span>of our users love our products.
            </h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className={styles.topRight}>
            <Rating>Rated 5 stars in Reviews</Rating>
            <Rating>Rated 5 stars in Report Guru</Rating>
            <Rating>Rated 5 stars in BestTech</Rating>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}
