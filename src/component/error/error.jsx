import React from "react";

export default function NotFound(){

    const style={
display:'flex',
 width:'100% ',
  hieght:'100%',
   justifyContent:'center',
   alignItems:'center',
   flexDirection:'column',
   fontSize:'2rem'

    }
    return (
        <div style={style}>
            <h2>not found </h2>
            <h1>404</h1>
        </div>
    );
}