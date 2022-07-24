import React, { useState } from "react";
import { AiOutlineComment, AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import Modal from "react-modal";

export default function Tweet(props) {
    const customStyles = {
        content: {
            position:'fixed',
            top: '20%',
            left: '30%',
            right:'50%',
            bottom:'50%',
           maxWidth:"500px"
        
        },
        
        
    };
    console.log(props.tweet);
    const [replayAlert, showReplayAlert] = useState(false);
    function replay() {
        console.log('open alert');
        showReplayAlert(true);
    }

    function closeReplay() {
        showReplayAlert(false);
    }
    return (
        <div className="tweet-card" id="tweetId">
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
                    <div className="tweet-actions-modals">
                        <div className="tweet-actions">
                            <div className="tweet-button" >
                                <AiOutlineHeart className="tweet-icon" />
                                <span className="icon-number">35</span>

                            </div>

                            <div className="tweet-button" onClick={replay}>
                                <AiOutlineComment className="tweet-icon" />
                                <span className="icon-number">5</span>

                            </div>

                            <div className="tweet-button">
                                <AiOutlineRetweet className="tweet-icon" />
                                <span className="icon-number">135</span>
                            </div>
                        </div>
                        <Modal isOpen={replayAlert}
                            style={customStyles}
                            contentLabel="replay modal"
                            id="replay"
                            ariaHideApp={false}
                            shouldCloseOnEsc={true}
                            onRequestClose={closeReplay}
                        
                            >
                                <div className="replay-alert-header">
                                    <div className="replay-to">replay to @ismail</div>
                                    <div className="button-close-replay"  onClick={closeReplay}>close</div>
                                </div>
                            </Modal>
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