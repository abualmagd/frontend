import React from "react";
import loginStyle from "./login.module.css";
export default function Login() {
    return (
        <div className={loginStyle.login_page}>
            <div className={loginStyle.shadow}>
                <div className={loginStyle.colored_section}>
                    <img className={loginStyle.img} src="../assets/cont.jpg" alt="welcome back" />
                </div>
                <div className={loginStyle.login_section}>
                    <h4 className={loginStyle.title}>Login Account</h4>
                    <input className={loginStyle.input} placeholder="Email ID" type="email"></input>
                    <input className={loginStyle.input} placeholder="Password" type="password"></input>
                    <div className={loginStyle.btn_div}>
                        <p className={loginStyle.sign_up}>Sign up instead ?</p>
                    </div>
                    <div className={loginStyle.login_btn}>Login</div>
                </div>
            </div>

        </div>
    );
}