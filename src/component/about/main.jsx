import React from "react";
import styles from "./about.module.css";
import { Link } from "react-router-dom";

export default function Main() {
    const styl={
        width:"180px",
        height:"60px",
        marginTop:"20px"
    }
    return (
        <div className={styles.main}>
            <section className={styles.main_left}>
                <p className={styles.content}>Continous flow of
                <br/>
                 content creation 
                  </p>
                <p className={styles.save}>save time and effort in 
                 manage your twitter accounts </p>
                <Link to={'/register'}   className={styles.link_free} style={styl} >Get started on Flowfed</Link>
            </section>
            <section>
                <img   className={styles.main_img} src="../assets/creative1.png" alt="the power of automation " />
            </section>
        </div>
    );
}
