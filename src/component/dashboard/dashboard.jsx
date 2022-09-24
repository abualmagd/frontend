import React, { useState ,useEffect } from "react";
import SideBare from "./sideBare";
import View from "./view";
import Post from "./views/post";
import { useNavigate } from "react-router-dom";
import { newToken } from "../../controller/user";
import { ToastContainer,toast } from "react-toastify";
export default function DashBoard() {
    const [index, setIndex] = useState(0);
    const changeIndex = (event, index) => {
        setIndex(index);
    }
    let navigate = useNavigate();
    const notify=()=>toast.error(' please login again')

    useEffect(() => {
        //load user 
       // console.log('use effect is run ');
        newToken().then(
            function(val){
                localStorage.setItem('secrets',JSON.stringify(val.data));
                console.log(val.data);
            },
            function(r){
                notify();
                
               navigate('/login');  
            }
        );
        // eslint-disable-next-line
        },[]);

    return (
        <div className="dashBoard" id="dashBoard">
            <SideBare index={index} function changeNavIndex={changeIndex} />
            <View index={index} />
            <Post className={"dash-post"}/>
            <ToastContainer />
        </div>

        
    );
}

/*

  const [postAlert, showPostAlert] = useState(false);





    const togglePostAlert = () => {
        console.log('clicked');
        showPostAlert(!postAlert);
    }

    const isActive=(postAlert)=>{
        if(postAlert){
            return "dash-post-float-boaton-active";
        }
        return "dash-post-float-boaton";
    }







            <div className={isActive(postAlert)} onClick={togglePostAlert}> + </div>
            <Modal
                isOpen={postAlert}
                ariaHideApp={false}
                shouldCloseOnEsc={true}
                className="dash-post-alert"
                contentLabel="Example Modal">
                 
                 <Post  className={"alert-dash-post"}/>
            </Modal>

*/