import React from "react";
import styles from "./about.module.css";
import Contact from "./contact";
import Feature from "./feature";
import Header from "./header";
import Main from "./main";
import MoreFeature from "./moreFeature";

export default function About(){
    return (
        <div className={styles.about}>
            <Header />
            <Main/>
            <Feature />
            <MoreFeature />
            <Contact />
        </div>

    );
}