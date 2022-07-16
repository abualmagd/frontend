import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineComment, AiOutlineTeam, AiOutlineCalendar } from "react-icons/ai";
import { BsBookmark, BsGear,BsBoxArrowLeft } from "react-icons/bs";

export default function SideBare(props) {
    console.log(props.index);

    const isActive = (index) => {
        if (props.index === index) {
            return "nav-item-active";
        }
        return "nav-item";
    }

    return (
        <div className="sidebar">
            <ul>
                <li>

                </li>
                <div className="head-logo">
                    <h4>FlowFed</h4>
                </div>
                <div className="divider">

                </div>
                <li>
                    <div
                        className={isActive(0)} onClick={() => props.changeNavIndex(Event, 0)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiFillAppstore className="icon" />
                            </div>
                            Home
                        </a>
                    </div>
                </li>
                <li>
                    <div className={isActive(1)} onClick={() => props.changeNavIndex(Event, 1)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiOutlineSearch className="icon" />
                            </div>
                            Search
                        </a>
                    </div>
                </li>

                <li>
                    <div className={isActive(2)} onClick={() => props.changeNavIndex(Event, 2)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiOutlineComment className="icon" />
                            </div>
                            Spaces
                        </a>
                    </div>
                </li>
                <li>
                    <div className={isActive(3)} onClick={() => props.changeNavIndex(Event, 3)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiOutlineTeam className="icon" />
                            </div>
                            Accounts
                        </a>
                    </div>
                </li>
                <li>
                    <div className={isActive(4)} onClick={() => props.changeNavIndex(Event, 4)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <AiOutlineCalendar className="icon" />
                            </div>
                            Calender
                        </a>
                    </div>
                </li>
                <li>
                    <div className={isActive(5)} onClick={() => props.changeNavIndex(Event, 5)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <BsBookmark className="icon" />
                            </div>
                            Bookmarks
                        </a>
                    </div>
                </li>
                <li>
                    <div className={isActive(6)} onClick={() => props.changeNavIndex(Event, 6)}>
                        <a className="nav-item-a" href="/#">
                            <div className="icon">
                                <BsGear className="icon" />
                            </div>
                            Settings
                        </a>
                    </div>
                </li>
            </ul>
            <div className="log-out-div">
                          <a className="log-out-a" href="/#">
                <div className="log-icon">
                    <BsBoxArrowLeft className="icon-log-out" />
                </div>
                LogOut
            </a>
            </div>
  


        </div>
    );
}