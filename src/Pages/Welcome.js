//create a welcome page

import React from "react";
import Button from "../Components/Button";
import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";

//create welcome page with a Button that says "Get Started"

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.welcome__text}>Welcome to</h1>
      <p className={styles.welcome__text__small}> Anna's and Jonathan's Burger Bonzanza Evening</p>
      <Link to="/ingredients"><Button>Get Started</Button></Link>
    </div>
  );
};

export default Welcome;
