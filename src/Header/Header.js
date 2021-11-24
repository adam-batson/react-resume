import React from "react";
import styles from './Header.module.css';

export default function Header() {
    return(
        <div className={styles.header} id="contact">
            <h1>
                Timothy Adam Batson
            </h1>
            <h2>
                Des Moines, IA | (515)-257-3663
            </h2>
            <h2 id={styles.linkedIn}>
                <a href="https://www.linkedin.com/in/t-a-batson/">Visit me on LinkedIn</a>
            </h2>
            <hr className={styles.hr}/>
        </div>
    );
}