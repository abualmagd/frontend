import React from "react";
import styles from "./about.module.css";
//import AnimatedText from 'react-animated-text-content';
import { Link } from "react-router-dom";

export default function Header(){

const scrollTo=(id)=>{

    const anchor = document.getElementById(id)
    console.log(anchor)
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });

}



    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <img className={styles.image} src="../assets/ool.png" alt="#" />
            <h1
>
Flowfed
</h1>
                       
            </div>
            <div className={styles.links}>
                <div href="/#" className={styles.link}>Price</div>
                <div href="/#"   onClick={() => {scrollTo("#review")}} className={styles.link}>Review</div>
                <Link to={'/login'} className={styles.link}>Log in</Link>
                <Link to={'/register'} className={styles.link_free}>Start free</Link>
            </div>
        </div>
    );
}