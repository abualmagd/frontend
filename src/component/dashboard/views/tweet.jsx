import React from "react";
import { AiOutlineComment, AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";


export default function Tweet() {

    function replay(){
        alert("hi ismail ")
        ///for edit
    }
    return (
        <div className="tweet-card">
            <div className="tweet-head">
                <div className="tweet-avatar">
                    <img src="../assets/profile.jpeg" alt="error" className="tweet-avatar-image" />
                </div>
                <div className="tweet-body">
                    <div className="tweet-display-name">ismail
                        <span className="tweet-user-name">@ismail-123</span>
                         <span className="tweet-created-ago"> 19hr</span>
                    </div>
                    <p className="tweet-content">
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Vero sapiente, tempora expedita
                        obcaecati illum dolorum ipsum, quia aut doloribus labore,
                        omnis deserunt quo id consequuntur
                        similique veritatis blanditiis repellat quisquam!
                    </p>
                    <div className="tweet-actions">
                        <div className="tweet-button" onClick={replay()}>
                            <AiOutlineHeart className="tweet-icon" />
                            <span className="icon-number">35</span>
                        </div>
                        <div className="tweet-button">
                            <AiOutlineComment className="tweet-icon" />
                            <span className="icon-number">5</span>
                        </div>
                        <div className="tweet-button">
                            <AiOutlineRetweet className="tweet-icon" />
                            <span className="icon-number">135</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

/*
wee need update our api to quet tweet 
retweet
and replay to tweet  
*/