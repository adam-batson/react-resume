import React from "react";
import styles from './Sidebar.module.css';

export default function Sidebar () {
    return(
        <div className={styles.navPanel}>
            <a className={styles.links} href='#contact'>Contact</a><br />
            <a className={styles.links} href='#work'>Experience</a><br />
            <a className={styles.links} href='#awards'>Awards</a><br />
            <a className={styles.links} href='#certs'>Certifications</a><br />
            <a className={styles.links} href='#education'>Education</a><br />
            <hr />
            <div className={styles.skills}>
                <h3>Skills</h3>
                <hr id={styles.skillDivider} />
                <div id={styles.skillGrid}>
                    <div className={styles.gridItems} id={styles.box1}>HTML</div>
                    <div className={styles.gridItems} id={styles.box2}>CSS</div>
                    <div className={styles.gridItems} id={styles.box3}>JS</div>
                    <div className={styles.gridItems} id={styles.box4}>ReactJS</div>
                    <div className={styles.gridItems} id={styles.box5}>C#</div>
                    <div className={styles.gridItems} id={styles.box6}>SQL</div>
                    <div className={styles.gridItems} id={styles.box7}>OOP</div>
                    <div className={styles.gridItems} id={styles.box8}>Git</div>
                    <div className={styles.gridItems} id={styles.box9}>GitHub</div>
                </div>
            </div>
        </div>
    );
}