//create ingredients page

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Ingredients.module.css";
import Button from "../Components/Button";

function Ingredients() {
  return (
    <div className={styles.ingredients}>
      <p className={styles.specifications}>🍽 4 portioner 🕚 30 minuter</p>
      <h1 className={styles.title}>Ingredients</h1>
      <ul className={styles.ingredients__list}>
        <li>Gul Lök Stor: 1</li>
        <li>Matolja Att Steka I</li>
        <li>Nötfärs 600 g</li>
        <li>Salt Och Peppar</li>
        <li>Kvibille® Ädel 140 g</li>
        <li>Hamburgerbröd Gärna Brioche</li>
        <li>Majonnäs</li>
      </ul>
      <Link to="/step_one">
        <Button className={styles.button}>Fortsätt</Button>
      </Link>
    </div>
  );
}

export default Ingredients;
