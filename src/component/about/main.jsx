import React from "react";
import styles from "./about.module.css";


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
                <a className={styles.link_free} style={styl} href="/#">Get started on Flowfed</a>
            </section>
            <section>
                <img   className={styles.main_img} src="../assets/creative1.png" alt="the power of automation " />
            </section>
        </div>
    );
}
