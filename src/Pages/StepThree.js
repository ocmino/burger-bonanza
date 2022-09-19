//create step one page

import React from "react";
import { Link } from "react-router-dom";
import styles from "./StepThree.module.css";
import Button from "../Components/Button";

function StepThree() {
  return (
    <div className={styles.step_three}>
      <h1>Steg 3</h1>
      <p className={styles.instruction}>
        Lägg ihop lagren igen, och krydda på undersidan och ovansidan. Nu är
        hela färsen kryddad, samtidigt som du bevarat strukturen på färsen
        vilket är hemligheten till saftiga burgare! Skär nu färsen i fyra delar,
        och forma fyra burgare utan att knåda i onödan. Jämna till kanterna.
      </p>
      <Link to="/step_three">
        <Button>Fortsätt</Button>
      </Link>
    </div>
  );
}

export default StepThree;
