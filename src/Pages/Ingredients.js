//create ingredients page

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Ingredients.module.css";
import Button from "../Components/Button";

function Ingredients() {
  return (
    <div className={styles.ingredients}>
      <h1>Ingredients</h1>
      <Link to="/"><Button>Home</Button></Link>
    </div>
  );
}

export default Ingredients;