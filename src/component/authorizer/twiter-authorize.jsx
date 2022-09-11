import React from "react";
import { getOuth ,RequestVerifier } from "../../controller/user";
import { ToastContainer,toast } from "react-toastify";
import styles from "./authorize.module.css"
import { access } from "../context/user-data";
export default  function TwitterAuthorize(){
    const notify = (m) => toast.error(m);
    const auth=()=>{
        console.log('access :')
        console.log(access)
        getOuth().then(
            function(value){
                RequestVerifier(value);
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