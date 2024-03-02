import React from "react";
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((name, index) => {
        return (<button key={index} className={styles.button} onClick={()=>onClick(name)}>
          {name}
        </button>);
})}
    </div>
  );
};

export default ButtonsContainer;
