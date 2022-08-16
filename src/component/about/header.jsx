import React from "react";
import styles from "./about.module.css";


export default function Header(){

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
             <div className={styles.logo_icon}>#</div>
            <h3 className={styles.logo_name}>Flowfed</h3>            
            </div>

            <div className={styles.links}>
                <a href="/#" className={styles.link}>Price</a>
                <a href="/#" className={styles.link}>Learn</a>
                <a href="/#" className={styles.link}>Log in</a>
                <a href="/#" className={styles.link_free}>Start free</a>
            </div>
        </div>
    );
}