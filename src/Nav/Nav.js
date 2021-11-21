import React from "react";
import styles from './Nav.module.css';

export default function Nav () {
    return(
        <div>
            <nav>
                <button href='#contact'>Contact</button><br />
                <button href='#skills'>Skills</button><br />
                <button href='#work'>Work Experience</button><br />
                <button href='#education'>Education</button><br />
            </nav>
        </div>
    );
}