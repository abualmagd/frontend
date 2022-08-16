import React from "react";
import styles from "./about.module.css";
import Header from "./header";
import Main from "./main";

export default function About(){
    return (
        <div className={styles.about}>
            <Header />
            <Main/>
        </div>

    );
}