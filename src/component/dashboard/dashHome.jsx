import React, { useState } from "react";
import SideBare from "./sideBare";


export default function DashHome(){
const [index,setIndex]=useState(0);

const changeIndex=(event,index)=>{
        setIndex(index);
}


    return (
        <div className="dashHome">
        <SideBare index={index}  function changeNavIndex={changeIndex} />
        <div>changable med part</div>
        <div> post right part </div>
        </div>
    );
}