import React from "react";
import {  getAouthRequest ,RequestVerifier } from "../../controller/user";
import { ToastContainer,toast } from "react-toastify";
import styles from "./authorize.module.css"

export default  function TwitterAuthorize(){
   // let access=JSON.parse(localStorage.getItem('access'));
   // let userId=JSON.parse(localStorage.getItem('userId'));
    const notify = (m) => toast.error(m);
    const auth=()=>{
        getAouthRequest().then(
        function(val){
           
            RequestVerifier(val.data['token'])
        },
        function(error){
            notify(error.response.data.error);
        }
       );
   
    }

    return (
        <div className={styles.layout}>
            <h1>Authorize Your Twitter Account</h1>
            <div onClick={auth} className={styles.btn}> Start </div>
            <ToastContainer />
        </div>
    );
}