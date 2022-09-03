import React from "react";
import {BsSlack , BsTwitter , BsMailbox}   from "react-icons/bs";
import styles from "./about.module.css";

export default function Contact(){
    return (
        <footer className={styles.footer}>
            <BsSlack  className={styles.footer_icon}/>
            <BsTwitter  className={styles.footer_icon}/>
            <BsMailbox  className={styles.footer_icon}/>
        </footer>
    );
}