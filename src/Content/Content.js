import React from "react";
import styles from "./Content.module.css";

export default function Content() {
    return (
        <div className={styles.contentContainer}>
            <h3 className={styles.title}>Skills</h3>
            <ul id="skills">
                <li>
                    Leadership of a team of technicians
                </li>
                <li>
                    Troubleshooting and repair of a large variety of cloud servers, including compute-optimized and storage models
                </li>
                <li>
                    Collaborating effectively with local data center team and with remote teams to diagnose complex server and network problems
                </li>
                <li>
                    Improving and developing processes and best practices to maximize efficiency
                </li>
                <li>
                    Promoting diversity and allyship within the local workgroup
                </li>
            </ul>
            <h3 className={styles.title}>Experience</h3>
            <ul id="work">
                <h4>
                    Microsoft Leap Internal Program | Microsoft |&nbsp;
                    <span className={styles.locationDates}>Redmond, WA | July 2021 - Present</span>
                </h4>
                <h4>
                    Data Center Technician II | Microsoft |&nbsp;
                    <span className={styles.locationDates}>West Des Moines, IA | April 2016 - Present</span>
                </h4>
            </ul>
            <h3 className={styles.title}>Awards and Honors</h3>
            <ul id="awards">
                <h4>
                    Spot Award (Microsoft Employee of the Month)&nbsp;
                    <span className={styles.locationDates}>- December 2018, March 2019, April 2019</span>
                </h4>
                <li>Awarded for technical excellence and team leadership</li>
                <h4>
                    Silver Coin Award (Microsoft Employee of the Quarter)&nbsp; 
                    <span className={styles.locationDates}>- April 2019, August 2019, July 2020</span>
                </h4>
                <li>Awarded by Operations Management for commitment to a growth mindset, teamwork, and safe work focus</li>
            </ul>
            <h3 className={styles.title}>Certifications</h3>
            <ul id="certs">
                <h4>
                    ITIL Foundation v3 Certificate in IT Service Management&nbsp;
                    <span className={styles.locationDates}> - March 2018</span>
                </h4>
                <h4>
                    CompTIA Server+&nbsp;
                    <span className={styles.locationDates}>- May 2020</span>
                </h4>
            </ul>
            <h3 className={styles.title}>Education</h3>
            <ul id="education">
                <h4>Iowa State University |&nbsp;
                <span className={styles.locationDates}>Ames, IA<br />
                Bachelor of Science, Psychology, May 2013</span>
                </h4>
                <h4>Southwestern Community College |&nbsp;
                <span className={styles.locationDates}>Creston, IA<br />
                Associate of Science, Computer Programming, May 2007</span>
                </h4>
            </ul>
        </div>
    );
}