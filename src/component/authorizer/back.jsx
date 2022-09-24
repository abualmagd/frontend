import React from "react";
import styles from "./authorize.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { saveNewTwitterAccount } from "../../controller/user";
import { ToastContainer,toast  } from "react-toastify";
export default function Back(){

    const access=JSON.parse(localStorage.getItem("secrets"));

        const search = useLocation().search;
        const notify=(m)=>toast.error(m);
        const navigate=useNavigate();
     
      useEffect(()=>{
        const oauth = new URLSearchParams(search).get("oauth_token");
        const verifier = new URLSearchParams(search).get("oauth_verifier");
        console.log(oauth);
        saveNewTwitterAccount({outh:oauth,verifier:verifier,access:access}).then(
            function(value){
                console.log(value);
                let accounts=JSON.parse(localStorage.getItem("accounts"));
                if(accounts===null){
                 localStorage.setItem("accounts",JSON.stringify([value.data]));    
                }else{
                    accounts.push(value.data);
                    localStorage.setItem("accounts",accounts);  
                }

                navigate("idashboard");
                       },
            function(error){
                console.log(error);
                notify(error.response.data);
            }
        );
        
      });

    return (
        <div className={styles.layout}>
            <h1>Loading ....</h1>
            <progress id="file" value={30} max="100"> 32% </progress>
            <ToastContainer />
        </div>
    );
}