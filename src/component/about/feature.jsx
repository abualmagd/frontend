import React from "react";
import styles from"./about.module.css";
import {BsCalendar2Date , BsBarChart ,BsBinoculars ,BsPeople}   from "react-icons/bs";

export default function Feature(){

    return(
        <section className={styles.feature}>
            <h1 className={styles.feature_title}>Power your social team with </h1>
            <div className={styles.features_list}>
                <div  className={styles.card}>
                    <BsCalendar2Date className={styles.card_icon} />
                    <h1 className={styles.card_h1}>schedule posts easily</h1>
                    <h2 className={styles.card_h2}>
                    post your words in
                         the best time to get high engagement 
                    </h2>
                </div>


                <div  className={styles.card}>
                    <BsBarChart className={styles.card_icon} />
                    <h1 className={styles.card_h1}>engage with viral posts</h1>
                    <h2 className={styles.card_h2}>
                    the best way to get more followers is to engage 
                    with the viral posts 
                    </h2>
                </div>


                <div  className={styles.card}>
                    <BsBinoculars className={styles.card_icon} />
                    <h1 className={styles.card_h1}>Building Engagement with Keyword Awareness </h1>
                    <h2 className={styles.card_h2}>
                    Keyword awareness is a valuable strategy for marketers interested in boosting engagement 

                    </h2>
                </div>

                <div  className={styles.card}>
                    <BsPeople className={styles.card_icon} />
                    <h1 className={styles.card_h1}>Build Collaborative Workspaces </h1>
                    <h2 className={styles.card_h2}>
                    Workspace Essentials Starter was built for businesses.
                    Discover how our collaboration platform  can help your social team stay connected

                    </h2>
                </div>
            </div>
        </section>
    );
}