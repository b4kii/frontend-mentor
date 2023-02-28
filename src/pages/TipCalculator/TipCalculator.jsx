import { useState } from "react";

import styles from "./TipCalculator.module.css";

function TipButton({ children, activeButton, setActiveButton, value }) {
  return (
    <button
      className={
        activeButton === value
          ? `${styles.tipButton} ${styles.activeButton}`
          : styles.tipButton
      }
      value={value}
      onClick={() => {
        setActiveButton(value);
      }}
    >
      {children}
    </button>
  );
}

function NumberInput({
  value,
  setValue,
  id,
  children,
  icon,
  isCustom,
  placeholder,
}) {
  const isValid = (string) => {
    return /^[\d]+[.]?[\d]*$/.test(string);
  };

  return (
    <>
      {!isCustom && (
        <label htmlFor={id} className={styles.numberLabel}>
          {children}
        </label>
      )}
      <input
        id={id}
        className={
          id === "people" && value === "0"
            ? `${styles.numberInput} ${styles.inputError}`
            : styles.numberInput
        }
        placeholder={placeholder}
        type="text"
        value={value}
        style={{
          background: `url(${icon}) no-repeat scroll 5% 50%, var(--very-light-grayish-cyan)`,
        }}
        onChange={(event) => {
          if (isValid(event.target.value)) {
            setValue(event.target.value);
          }
          if (event.target.value === "") {
            setValue("");
          }
        }}
      />
    </>
  );
}

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <span>SPLI</span>
        <span>TTER</span>
      </div>
      <div className={styles.calculatorContainer}>
        <div className={styles.wrapper}>
          <NumberInput
            id="bill"
            value={bill}
            setValue={setBill}
            icon="/src/assets/tip-calculator/images/icon-dollar.svg"
            placeholder="0"
          >
            Bill
          </NumberInput>
          <div className={styles.tipButtonsGroup}>
            <p>Select Tip %</p>
            <div className={styles.buttonsWrapper}>
              <TipButton
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                value="5"
              >
                {" "}
                5%{" "}
              </TipButton>
              <TipButton
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                value="10"
              >
                10%
              </TipButton>
              <TipButton
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                value="15"
              >
                15%
              </TipButton>
              <TipButton
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                value="25"
              >
                25%
              </TipButton>
              <TipButton
                activeButton={activeButton}
                setActiveButton={setActiveButton}
                value="50"
              >
                50%
              </TipButton>
              <NumberInput
                isCustom={true}
                value={customTip}
                setValue={setCustomTip}
                placeholder="Custom"
              />
            </div>
          </div>
          <NumberInput
            id="people"
            value={peopleCount}
            setValue={setPeopleCount}
            icon="/src/assets/tip-calculator/images/icon-person.svg"
            placeholder="0"
          >
            Number of People
          </NumberInput>

          <div className={styles.summaryWrapper}>
            <div className={styles.summaryContent}>
              <p>Tip Amount</p>
              <div className={styles.price}>${tipAmount.toFixed(2)}</div>
            </div>
            <div className={styles.summaryContent}>
              <p>Total</p>
              <div className={styles.price}>${totalAmount.toFixed(2)}</div>
            </div>
            <button
              className={
                totalAmount || tipAmount
                  ? `${styles.resetButton}`
                  : `${styles.resetButton} ${styles.inactiveButton}`
              }
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
