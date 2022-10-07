import React from "react";
import loginStyle from "../login/login.module.css";
import { Link } from "react-router-dom";
import { register } from "../../controller/userController";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
    let email=useRef('');
    let name=useRef('');
    let password=useRef('');
    let navigate = useNavigate();
    const notify = (m) => toast.error(m);
const signUp=()=>{
        notify("Registering ...")
     register({eml:email.current.value,nm:name.current.value,pass:password.current.value}).then(
        function(value){
           navigate('/login')  
        },
        function(error){
          notify(error.response.data)
        }

     );
    
   
         
   
  
    

}
    return (
        <div className={loginStyle.login_page}>
            <div className={loginStyle.shadow}>
                <div className={loginStyle.colored_section}>
                    <img className={loginStyle.img} src="../assets/illustt.png" alt="welcome to Flowfed" />
                </div>
                <div className={loginStyle.login_section}>
                    <h4 className={loginStyle.title}>Create New Account</h4>
                    <input className={loginStyle.input} ref={email} placeholder="Email ID" type="email"></input>
                    <input className={loginStyle.input} ref={name} placeholder="Name" type="text"></input>
                    <input className={loginStyle.input} ref={password} placeholder="Password" type="password"></input>
                    <div className={loginStyle.btn_div}>
                        <Link to={'/login'} className={loginStyle.sign_up}>Sign in instead ?</Link>
                    </div>
                    <div className={loginStyle.login_btn}
                    onClick={()=>signUp()}
                    >Register</div>
                     <ToastContainer position="top-center" />
                </div>
            </div>

        </div>
    );
}