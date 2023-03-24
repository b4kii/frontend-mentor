import React from "react";
import Preview from "../../components/Preview";
import styles from "./SocialProofSection.module.css";

import AnneImage from "/src/assets/social-proof-section/images/image-anne.jpg";
import ColtonImage from "/src/assets/social-proof-section/images/image-colton.jpg";
import IreneImage from "/src/assets/social-proof-section/images/image-irene.jpg";

import SocialDesktopImage from "/src/assets/social-proof-section/design/desktop-design.jpg";
import SocialMobileImage from "/src/assets/social-proof-section/design/mobile-design.jpg";

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
  return (
    <div className={styles.cardContainer}>
      <div className={styles.customerDetails}>
        <img
          src={image}
          alt="name"
          className={styles.customerPhoto}
          width="40"
          height="40"
        />
        <div>
          <p className={styles.customerName}>{name}</p>
          <p style={{ color: "var(--soft-pink)", fontWeight: 500 }}>
            Verified buyer
          </p>
        </div>
      </div>
      <p className={styles.cardContent}>
        <q> {children} </q>
      </p>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <h1>10,000+ of our users love our products.</h1>
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
          <div className={styles.bottom}>
            <div className={styles.cards}>
              <Card image={ColtonImage} name="Colton Smith">
                We needed the same printed design as the one we had ordered a
                week prior. Not only did they find the original order, but we
                also received it in time. Excellent!
              </Card>
              <Card image={IreneImage} name="Irene Roberts">
                Customer service is always excellent and very quick turn around.
                Completely delighted with the simplicity of the purchase and the
                speed of delivery.
              </Card>
              <Card image={AnneImage} name="Anne Wallace">
                Put an order with this company and can only praise them for the
                very high standard. Will definietely use them again and
                recommend them to everyone!
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Preview imageMobile={SocialMobileImage} imageDesktop={SocialDesktopImage} />
    </>
  );
}
