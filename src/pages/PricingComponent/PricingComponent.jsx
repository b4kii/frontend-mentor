import Switch from "react-switch";

import { useState } from "react";

import styles from "./PricingComponent.module.css";

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

function PricingCard({ type, price, storage, users, limit }) {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.cardTitle}>{type}</p>
      <p className={styles.cardPrice}>
        <span className={styles.dollar}>$</span>
        <span className={styles.price}>{price}</span>
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
              price={checked ? card.price : (card.price * 10 + 0.09).toFixed(2)}
              storage={card.storage}
              users={card.users}
              limit={card.limit}
            />
          );
        })}
      </div>
    </main>
  );
}
