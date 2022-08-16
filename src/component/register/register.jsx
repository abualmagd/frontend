import React from "react";
import loginStyle from "../login/login.module.css";
export default function Register() {
    return (
        <div className={loginStyle.login_page}>
            <div className={loginStyle.shadow}>
                <div className={loginStyle.colored_section}>
                    <img className={loginStyle.img} src="../assets/illustt.png" alt="welcome to Flowfed" />
                </div>
                <div className={loginStyle.login_section}>
                    <h4 className={loginStyle.title}>Create New Account</h4>
                    <input className={loginStyle.input} placeholder="Email ID" type="email"></input>
                    <input className={loginStyle.input} placeholder="Name" type="text"></input>
                    <input className={loginStyle.input} placeholder="Password" type="password"></input>
                    <div className={loginStyle.btn_div}>
                        <p className={loginStyle.sign_up}>Sign in instead ?</p>
                    </div>
                    <div className={loginStyle.login_btn}>Register</div>
                </div>
            </div>

        </div>
    );
}