import React from "react";
import styles from "./Content.module.css";

export default function Content() {
    return (
        <div className={styles.contentContainer}>
            <h3 className={styles.title}>Experience</h3>
            <div id="work">
                <h4>
                    Microsoft Leap Internal Program | Microsoft |&nbsp;
                    <span className={styles.locationDates}>Redmond, WA | July 2021 - Present</span>
                </h4>
                <h5 className={styles.description}>
                    Studied full stack web development concepts using C#, HTML, CSS, JavaScript, and React
                </h5>
                <h5 className={styles.description}>
                    Completed projects, including console apps, games, and APIs using C#, calculator web page using HTML, CSS, and JavaScript, and a web app game using React
                </h5>
                <h4>
                    Data Center Technician II | Microsoft |&nbsp;
                    <span className={styles.locationDates}>West Des Moines, IA | April 2016 - Present</span>
                </h4>
                <h5 className={styles.description}>
                    Troubleshoots, repairs, and configures 50+ different Dell, HP, Quanta, Wiwynn, Lenovo, and ZT Systems server SKUs within an enterprise data center
                </h5>
                <h5 className={styles.description}>
                    Coordinated work with Network Operations Center to diagnose and repair hardware and connectivity issues on Adva, Arista, Cisco, Dell, and Juniper network devices
                </h5>
                <h5 className={styles.description}>
                    Created training and work guides for ticket documentation and cross-campus network troubleshooting to ensure work is performed and documented in a clear, complete, and standardized format
                </h5>
                <h5 className={styles.description}>
                    Directed a team of 10+ data center technicians part-time to complete tasks within deadlines and to meet data center metrics goals
                </h5>
                <h5 className={styles.description}>
                    Serves as Diversity and Inclusion Ambassador for Des Moines Data Center Campus
                </h5>
            </div>
            <h3 className={styles.title}>Awards and Honors</h3>
            <div id="awards">
                <h4>
                    Spot Award (Microsoft Employee of the Month)&nbsp;
                    <span className={styles.locationDates}>- December 2018, March 2019, April 2019</span>
                </h4>
                <h5 className={styles.description}>
                    Awarded for technical excellence and team leadership
                </h5>
                <h4>
                    Silver Coin Award (Microsoft Employee of the Quarter)&nbsp; 
                    <span className={styles.locationDates}>- April 2019, August 2019, July 2020</span>
                </h4>
                <h5 className={styles.description}>
                    Awarded by Operations Management for commitment to a growth mindset, teamwork, and safe work focus
                </h5>
            </div>
            <h3 className={styles.title}>Certifications</h3>
            <div id="certs">
                <h4>
                    ITIL Foundation v3 Certificate in IT Service Management&nbsp;
                    <span className={styles.locationDates}> - March 2018</span>
                </h4>
                <h4>
                    CompTIA Server+&nbsp;
                    <span className={styles.locationDates}>- May 2020</span>
                </h4>
            </div>
            <h3 className={styles.title}>Education</h3>
            <div id="education">
                <h4>Iowa State University |&nbsp;
                <span className={styles.locationDates}>Ames, IA<br />
                Bachelor of Science, Psychology, May 2013</span>
                </h4>
                <h4>Southwestern Community College |&nbsp;
                <span className={styles.locationDates}>Creston, IA<br />
                Associate of Science, Computer Programming, May 2007</span>
                </h4>
            </div>
        </div>
    );
}