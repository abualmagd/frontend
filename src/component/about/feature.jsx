import React from "react";
import styles from"./about.module.css";
export default function Feature(){

    return(
        <section className={styles.feature}>
            <h3>Power your social team with </h3>
            <div className={styles.features_list}>
                <div  className={styles.card}>
                    <img className={styles.card_image} src="../assets/ool.png" alt="##" />
                    <p> schedule tweet posting </p>
                </div>
                <div  className={styles.card}>
                    <img src="" alt="##" />
                    <p> making  thread easly </p>
                </div>
                <div  className={styles.card}>
                    <img src="" alt="##" />
                    <p> search for key words </p>
                </div>
                <div  className={styles.card}>
                    <img src="" alt="##" />
                    <p> engage with viral posts </p>
                </div>
            </div>
        </section>
    );
}