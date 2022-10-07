import React from "react";
import styles from "./authorize.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { saveNewTwitterAccount } from "../../controller/userController";
import { ToastContainer,toast  } from "react-toastify";
export default function Back(){

    const access=JSON.parse(localStorage.getItem("secrets"));

        const search = useLocation().search;
        const notify=(m)=>toast.error(m);
        const navigate=useNavigate();
     
        function cutBackUrl(){
            return new Promise(function(resolve, reject) {
                  const oauth = new URLSearchParams(search).get("oauth_token");
        const verifier = new URLSearchParams(search).get("oauth_verifier"); 
        
        if(oauth!=null){
            resolve(

            saveNewTwitterAccount({outh:oauth,verifier:verifier,access:access}).then(
                function(value){
                    console.log(value.data);
                    navigate("/dashboard");
                           },
                function(error){
                    console.log(error);
                    notify(error.response.data);
                }
            )

           );
           
        }else{
            reject(
            console.log('error ')
        );
        }
       
            });
        
        }




      useEffect(()=>{
    cutBackUrl();
      });

    return (
        <div className={styles.layout}>
            <h1>Loading ....</h1>
            <progress id="file" value={30} max="100"> 32% </progress>
            <ToastContainer />
        </div>
    );
}