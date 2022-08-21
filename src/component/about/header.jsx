import React from "react";
import styles from "./about.module.css";
import AnimatedText from 'react-animated-text-content';

export default function Header(){

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="diagonal" //float diagonal   lights  rifle
  interval={0.06}
  duration={0.8}
  tag="p"
  className={styles.logo_name}
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
Flowfed
</AnimatedText>
                       
            </div>
            <div className={styles.links}>
                <a href="/#" className={styles.link}>Price</a>
                <a href="/#" className={styles.link}>Learn</a>
                <a href="/#" className={styles.link}>Log in</a>
                <a href="/#" className={styles.link_free}>Start free</a>
            </div>
        </div>
    );
}