import React, { useState } from "react";
import SideBare from "./sideBare";
import View from "./view";
import Post from "./views/post";


export default function DashBoard(){
const [index,setIndex]=useState(0);

const changeIndex=(event,index)=>{
        setIndex(index);
}


    return (
        <div className="dashBoard">
        <SideBare index={index}  function changeNavIndex={changeIndex} />
        <View  index={index}/>
        <Post />
        <div className="dash-post-float-boaton"> + </div>
        </div>
    );
}