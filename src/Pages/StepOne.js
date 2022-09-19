//create step one page

import React from "react";
import { Link } from "react-router-dom";
import styles from "./StepOne.module.css";
import Button from "../Components/Button";

function StepOne() {
  return (
    <div className={styles.step_one}>
      <h1>Steg 1</h1>
      <p className={styles.instruction}>
        Om du ska grilla, tänd grillen i god tid så att glöden är fin när det är
        dags. Skala och skiva löken tunt. Stek försiktigt i olja på låg
        temperatur, tills den mjuknar. Det tar cirka 15 minuter. Öka sedan
        värmen och klicka i smör, och ge löken färg. Ställ undan.
      </p>
      <Link to="/step_two">
        <Button>Fortsätt</Button>
      </Link>
    </div>
  );
}

export default StepOne;
