import React, { useState ,useEffect } from "react";
import SideBare from "./sideBare";
import View from "./view";
import Post from "./views/post";
import { useNavigate } from "react-router-dom";
import { newToken } from "../../controller/userController";
import { ToastContainer,toast } from "react-toastify";
import { getCurrentUser } from "../../controller/userController";


export default function DashBoard() {
    const [index, setIndex] = useState(0);
    const [userAcc,setUserAcc]=useState(null)
 
    const changeIndex = (event, index) => {
        setIndex(index);
    }
    let navigate = useNavigate();
    const notify=()=>toast.error(' please login again')

   

const fetchUserAccounts=()=>{

    getCurrentUser().then(
        (value)=>{
                console.log(value.data);
                 localStorage.setItem('current',value.data); 
               setUserAcc(value.data["managedAcounts"])
            }
        ).catch(
            
            (error)=>{
                console.log('error : >>>>');
               console.log(error);
              }
        );
} 
    useEffect(()=> {
     
        const fetchRefreshAccess=()=>{
            newToken().then(
                (val)=>{
                    localStorage.setItem('secrets',JSON.stringify(val.data));
                    console.log(val.data);
                    fetchUserAccounts();
           fetchUserAccounts();
        
                }
            ).catch((r)=>{
                    notify();    
                   navigate('/login');  
                });
        }
         fetchRefreshAccess()
        
     
         

    
      
},[navigate]);

    return (
        <div className="dashBoard" id="dashBoard" >
            <SideBare index={index} function changeNavIndex={changeIndex} />
            <View index={index} />
          {userAcc&&<Post accounts={userAcc} className={"dash-post"}/>}
            <ToastContainer />
        </div>

        
    );
}

