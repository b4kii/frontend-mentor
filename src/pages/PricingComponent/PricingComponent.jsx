import Switch from "react-switch";

import {useState} from "react";

import styles from "./PricingComponent.module.css";

export default function PricingComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <main className={styles.container}>
      <Switch 
        onChange={() => {
          setChecked(prev => !prev)
        }}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </main>
  )
}
