import React from "react";
import styles from './Nav.module.css';

export default function Nav () {
    return(
        <div className={styles.navPanel}>
                <a className={styles.links} href='#contact'>Contact</a><br />
                <a className={styles.links} href='#skills'>Skills</a><br />
                <a className={styles.links} href='#work'>Experience</a><br />
                <a className={styles.links} href='#awards'>Awards</a><br />
                <a className={styles.links} href='#certs'>Certifications</a><br />
                <a className={styles.links} href='#education'>Education</a><br />
        </div>
    );
}