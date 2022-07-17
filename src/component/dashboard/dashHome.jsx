import React, { useState } from "react";
import SideBare from "./sideBare";
import View from "./view";


export default function DashHome(){
const [index,setIndex]=useState(0);

const changeIndex=(event,index)=>{
        setIndex(index);
}


    return (
        <div className="dashHome">
        <SideBare index={index}  function changeNavIndex={changeIndex} />
        <View  index={index}/>
        <div> post right part 888888888 </div>
        </div>
    );
}