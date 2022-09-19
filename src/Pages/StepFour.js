//create step one page

import React from "react";
import { Link } from "react-router-dom";
import styles from "./StepFour.module.css";
import Button from "../Components/Button";

function Stepfour() {
  return (
    <div className={styles.step_four}>
      <h1>Steg 4</h1>
      <p className={styles.instruction}>
        Dela upp osten. Grilla burgarna, eller stek i olja och smör. Lägg osten
        på burgarna i slutet av tillagningen. Grilla också på hamburgerbröden
        snabbt. Montera burgarna: Bred på majonnäs på ett bröd, lägg på lite
        lök, placera burgaren ovanpå och lägg på mer lök. Kläm ihop med
        toppbrödet!
      </p>
      <Link to="/lastpage">
        <Button>Fortsätt</Button>
      </Link>
    </div>
  );
}

export default Stepfour;
