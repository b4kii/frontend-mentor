import { useEffect, useState } from "react";

import styles from "./TipCalculator.module.css";

function TipButton({
  children,
  activeButton,
  setActiveButton,
  value,
  setCustomTipValue,
}) {
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
        setCustomTipValue("");
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
  setTipValue
}) {
  const isValid = (string) => {
    return /^[\d]+[.]?[\d]*$/.test(string);
  };

  return (
    <>
      {!isCustom && (
        <label
          htmlFor={id}
          className={
            id === "people" && parseInt(value) <= 0
              ? `${styles.numberLabel} ${styles.inputError}`
              : styles.numberLabel
          }
        >
          {children}
        </label>
      )}
      <input
        id={id}
        className={
          id === "people" && parseInt(value) <= 0
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
        onFocus={() => {
          isCustom && setTipValue(0);
        }}
      />
    </>
  );
}

export default function TipCalculator() {
  const tipValuePlaceholder = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [customTipValue, setCustomTipValue] = useState("");
  const [tipValue, setTipValue] = useState(0);

  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (peopleCount !== "" && parseInt(peopleCount) !== 0) {
      const tip = customTipValue !== "" ? parseInt(customTipValue) : tipValue;
      const tipPerPerson =
        (parseFloat(bill) * (tip / 100)) / parseInt(peopleCount);

      setTipAmount(tipPerPerson);

      const totalBill = parseFloat(bill) / parseInt(peopleCount) + tipAmount;
      setTotalAmount(totalBill);
    }
  }, [customTipValue, tipValue, peopleCount, bill]);

  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <span>SPLI</span>
        <span>TTER</span>
      </div>
      <div className={styles.calculatorContainer}>
        <div className={styles.inputsWrapper}>
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
              {tipValuePlaceholder.map((item) => {
                return (
                  <TipButton
                    key={item}
                    activeButton={tipValue}
                    setActiveButton={setTipValue}
                    setCustomTipValue={setCustomTipValue}
                    value={item}
                  >
                    {item}%
                  </TipButton>
                );
              })}
              <NumberInput
                isCustom={true}
                value={customTipValue}
                setValue={setCustomTipValue}
                placeholder="Custom"
                setTipValue={setTipValue}
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
        </div>

        <div className={styles.summaryWrapper}>
          <div>
            <div className={styles.summaryContent}>
              <p>Tip Amount</p>
              <div className={styles.price}>
                ${
                  tipAmount === 0
                  ? tipAmount.toFixed(2)
                  : Math.floor(tipAmount * 100) / 100
                }
                {/* // ${Math.floor(tipAmount * 100) / 100} */}
              </div>
            </div>
            <div className={styles.summaryContent}>
              <p>Total</p>
              <div className={styles.price}>
                ${
                  totalAmount === 0
                  ? totalAmount.toFixed(2)
                  : Math.floor(totalAmount * 100) / 100
                }
              </div>
            </div>
          </div>
          <button
            className={
              totalAmount || tipAmount || bill || peopleCount || customTipValue
                ? `${styles.resetButton}`
                : `${styles.resetButton} ${styles.inactiveButton}`
            }
            onClick={() => {
              setBill("");
              setCustomTipValue("");
              setPeopleCount("");
              setTipAmount(0);
              setTotalAmount(0);
              setTipValue(0);
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
