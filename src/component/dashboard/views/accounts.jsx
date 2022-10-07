import React from "react";
import { useState } from "react";


export default function Accounts(){
const [accountsList]=useState(JSON.parse(localStorage.getItem('accounts')));
   

console.log(accountsList);
const list=accountsList.map(account=>{
    return <h1  key={account.id}>{account.accountName}</h1>
})
    return (
        <div>
           {list}
        </div>
    );
}