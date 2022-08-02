import React, { useState } from "react";
import SideBare from "./sideBare";
import View from "./view";
import Post from "./views/post";
import Modal from "react-modal";

export default function DashBoard() {
    const [index, setIndex] = useState(0);
    const [postAlert, showPostAlert] = useState(false);
    const changeIndex = (event, index) => {
        setIndex(index);
    }

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

    return (
        <div className="dashBoard" id="dashBoard">
            <SideBare index={index} function changeNavIndex={changeIndex} />
            <View index={index} />
            <Post className={"dash-post"}/>
            <div className={isActive(postAlert)} onClick={togglePostAlert}> + </div>
            <Modal
                isOpen={postAlert}
                ariaHideApp={false}
                shouldCloseOnEsc={true}
                className="dash-post-alert"
                contentLabel="Example Modal">
                 
                 <Post  className={"alert-dash-post"}/>
                 
                
            </Modal>
        </div>
    );
}