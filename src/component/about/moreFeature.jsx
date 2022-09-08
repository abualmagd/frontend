import React from "react";
import styles from "./about.module.css";

export default function MoreFeature() {
    return (
        <section id="#review" className={styles.more_feature}>
            <video className={styles.video} width="50%" autoPlay muted loop>
                <source src="./assets/screen-shot.webm" />
            </video>
            <div className={styles.dash_div}>
                <h1 className={styles.dash_div_h1}>
                    easy and simple
                   <br/> dashboard
                </h1>
                <p>

                    Use our dashboard to manage your social accounts,
                    review schedule and more features to discover
                </p>
            </div>

        </section>
    );
}