import Switch from "react-switch";

import { useState } from "react";
import { useSpring, animated } from "react-spring";

import styles from "./PricingComponent.module.css";
import Preview from "../../components/Preview";

import PricingComponentDesktopImage from "/src/assets/pricing-component/design/desktop-design-monthly.jpg";
import PricingComponentMobileImage from "/src/assets/pricing-component/design/mobile-design-monthly.jpg";

const data = [
  {
    type: "Basic",
    price: 19.99,
    storage: "500 GB",
    users: "2 Users Allowed",
    limit: "3 GB",
  },
  {
    type: "Professional",
    price: 24.99,
    storage: "1 TB",
    users: "5 Users Allowed",
    limit: "10 GB",
  },
  {
    type: "Master",
    price: 39.99,
    storage: "2 TB",
    users: "10 Users Allowed",
    limit: "20 GB",
  },
];

function Number({price, checked}) {
  const {number} = useSpring({
    from: {number: checked ?  price * 10 + 0.09 : price },
    number: checked ? price : price * 10 + 0.09,
    delay: 200,
    config: {mass: 5, tension: 30, friction: 20}
  })

  return (
    <animated.span className={styles.price}>
      {number.to((price) => price.toFixed(2))}
    </animated.span>
  );
}

// function PricingCard({ type, price, storage, users, limit }) {
function PricingCard({ type, price, storage, users, limit, checked}) {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.cardTitle}>{type}</p>
      <p className={styles.cardPrice}>
        <span className={styles.dollar}>$</span>
        {/* <span className={styles.price}>{price}</span> */}
        <Number price={price} checked={checked} />
      </p>
      <p className={styles.cardStorage}>{storage} Storage</p>
      <p className={styles.cardStorage}>{users}</p>
      <p className={styles.cardLimit}>Send up to {limit}</p>
      <button className={styles.cardButton}>LEARN MORE</button>
    </div>
  );
}

export default function PricingComponent() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <main className={styles.container}>
        <div className={styles.pricingContainer}>
          <h1 className={styles.pricingTitle}>Our Pricing</h1>
          <div className={styles.subscriptionPlan}>
            <p>Annualy</p>
            <Switch
              onChange={() => {
                setChecked((prev) => !prev);
              }}
              checked={checked}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={20}
            />
            <p>Monthly</p>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          {data.map((card) => {
            return (
              <PricingCard
                key={card.price}
                type={card.type}
                // price={
                //   checked ? card.price : (card.price * 10 + 0.09).toFixed(2)
                // }
                price={card.price}
                checked={checked}
                storage={card.storage}
                users={card.users}
                limit={card.limit}
              />
            );
          })}
        </div>
      </main>
      <Preview
        imageMobile={PricingComponentMobileImage}
        imageDesktop={PricingComponentDesktopImage}
      />
    </>
  );
}
