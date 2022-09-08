import React from "react";
import loginStyle from "./login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import { login } from "../../controller/user";
import { updateAccess,access } from "../context/user-data";

export default function Login() {
    let email=useRef('');
    let password=useRef('');
    let navigate = useNavigate();
    const notify = (m) => toast.error(m);
  
const sign=()=>{
   
     login({eml:email.current.value,pass:password.current.value}).then(
        function(value){
            console.log(value.data.refreshToken)
           localStorage.setItem('refresh',JSON.stringify(value.data.refreshToken))
           updateAccess(value.data.accessToken);
           console.log("access : ")
           console.log(access)
            console.log("data : ")
            console.log(value.data)
           navigate('/dashboard')  
        },
        function(error){
          notify(error.message)
        }

     );
    }

    return (
        <div className={loginStyle.login_page}>
            <div className={loginStyle.shadow}>
                <div className={loginStyle.colored_section}>
                    <img className={loginStyle.img} src="../assets/contt.png" alt="welcome back" />
                </div>
                <div className={loginStyle.login_section}>
                    <h4 className={loginStyle.title}>Login Account</h4>
                    <input className={loginStyle.input} ref={email} placeholder="Email ID" type="email"></input>
                    <input className={loginStyle.input} ref={password} placeholder="Password" type="password"></input>
                    <div className={loginStyle.btn_div}>
                        <Link to={'/register'} className={loginStyle.sign_up}>Sign up instead ?</Link>
                    </div>
                    <div className={loginStyle.login_btn} onClick={()=>sign()}>Login</div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
}