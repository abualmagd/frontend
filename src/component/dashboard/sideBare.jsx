import React, { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineComment, AiOutlineTeam, AiOutlineCalendar} from "react-icons/ai";
import { BsBookmark, BsGear,BsBoxArrowLeft,BsX,BsList} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../controller/user";

export default function SideBare(props) {
    const [open,setOpen]=useState(true);
    const navigate=useNavigate()

const loggingOut=()=>{
    try {
         logOut(); 
         navigate('/')
    } catch (error) {
        
    }
  
}

    const isActive = (index) => {
        if (props.index === index) {
            return "nav-item-active";
        }
        return "nav-item";
    }

    const showCloseIcon = (open) => {
        if (open === true) {
            return "open-nav-icon-close";
        }
        return "open-nav-icon";
    }

    const wrap = (open) => {
        if (open === true) {
            return "wrapper";
        }
        return "wrapper-close";
    }
    
    const handleClick=()=>{
       setOpen(!open);
    }
    return (
        <div className={wrap(open)} >
             
        <div  className="sidebar">
            <div id="nav-ul">

                <div className="head-logo">
                    <h4>FlowFed</h4>
                    <BsX className="close-icon" onClick={handleClick}/>
                   
                </div>
                <div className="divider">

                </div>
                    <div
                        className={isActive(0)} onClick={() => props.changeNavIndex(Event, 0)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiFillAppstore className="icon" />
                            </div>
                            Home
                        </a>
                    </div>
                    <div className={isActive(1)} onClick={() => props.changeNavIndex(Event, 1)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiOutlineSearch className="icon" />
                            </div>
                            Search
                        </a>
                    </div>

                    <div className={isActive(2)} onClick={() => props.changeNavIndex(Event, 2)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiOutlineComment className="icon" />
                            </div>
                            Spaces
                        </a>
                    </div>
                    <div className={isActive(3)} onClick={() => props.changeNavIndex(Event, 3)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiOutlineTeam className="icon" />
                            </div>
                            Accounts
                        </a>
                    </div>
                    <div className={isActive(4)} onClick={() => props.changeNavIndex(Event, 4)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiOutlineCalendar className="icon" />
                            </div>
                            Calender
                        </a>
                    </div>
                   <div className={isActive(5)} onClick={() => props.changeNavIndex(Event, 5)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <BsBookmark className="icon" />
                            </div>
                            Bookmarks
                        </a>
                    </div>
                
                
                    <div className={isActive(6)} onClick={() => props.changeNavIndex(Event, 6)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <BsGear className="icon" />
                            </div>
                            Settings
                        </a>
                    </div>
                
                <div className="log-out-div">
                          <a className="log-out-a" href="/#">
                <div className="log-icon">
                    <BsBoxArrowLeft className="icon-log-out" />
                </div>
                LogOut
            </a>
            </div>
                
            </div>

  </div>

 <BsList className={showCloseIcon(open)} onClick={handleClick} />
        </div>
    );
}