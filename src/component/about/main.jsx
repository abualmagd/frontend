import React from "react";
import styles from "./about.module.css";

export default function Main() {
    return (
        <div className={styles.main}>
            <section>
                <p className={styles.content}>Constant flow of creative content </p>
                <p className={styles.save}>save time and effort in manage your twitter accounts </p>
                <a className={styles.link_free} href="/#">Get started on Flowfed</a>
            </section>
        </div>
    );
}
