import React from "react";
import Accounts from "./views/accounts";
import Home from "./views/home";


export default function View(props){

    const switcher=(index)=>{
        switch (props.index){
            case 0:
                return <Home />;

            case 1:
                return <>search</>
            
            case 2:
                return <>Spaces</>
        
            case 3:
                return <Accounts />
   
            case 4:
                return <>Calender</>
      
            case 5:
                return <>Bookmarks</>
      
            case 6:
                return <>Settings</>
           
            default:
                return <>home</>
          


        }
        
    }

    return (
        <section className="dashboard-view">
            {switcher(props.index)}
        </section>
    );
}