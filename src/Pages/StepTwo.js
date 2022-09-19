//create step one page

import React from "react";
import { Link } from "react-router-dom";
import styles from "./StepTwo.module.css";
import Button from "../Components/Button";

function StepTwo() {
  return (
    <div className={styles.step_two}>
      <h1>Steg 2</h1>
      <p className={styles.instruction}>
        Forma fyra burgare av nötfärsen och krydda med salt och svartpeppar.
        Tips för goda hamburgare: Låt färsen ligga kvar i tråget. Ofta ligger
        färsen i flera lager. Försök att lyfta första lagret som att du lyfter
        upp ett lock och smaksätt med salt och svartpeppar. 
      </p>
      <Link to="/step_three">
        <Button>Fortsätt</Button>
      </Link>
    </div>
  );
}

export default StepTwo;
