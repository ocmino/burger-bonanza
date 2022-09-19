//create a footer component


import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footer__text}>© 2022 Burger Bonanza</p>
        </div>
    )
}

export default Footer;