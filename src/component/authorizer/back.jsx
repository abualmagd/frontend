import React from "react";
import { useState } from "react";
import styles from "./authorize.module.css"
export default function Back(){
const [value,setValue]=useState(10);
    var intervalId = window.setInterval(function(){
        /// call your function here
        if(value!==100){
              setValue(value+5); 
        }
        clearInterval(intervalId) ;
            
      }, 500);

    return (
        <div className={styles.layout}>
            <h1>Loading ....</h1>
            <progress id="file" value={value} max="100"> 32% </progress>
        </div>
    );
}