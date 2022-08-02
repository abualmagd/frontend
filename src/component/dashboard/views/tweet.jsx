import React,{ useEffect, useState } from "react";
import { AiOutlineComment, AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { CSSTransition } from 'react-transition-group';
//import Modal from "react-modal";
export default function Tweet(props) {
 
    const nodeRef = React.useRef(null);
    const inputRef=React.useRef(null);
    const [replayAlert, showReplayAlert] = useState(false);
    const [retweetAlert, showRetweetAlert] = useState(false);
    function replay() {
        showReplayAlert(!replayAlert);
    }

    function retweet(){
        showRetweetAlert(!retweetAlert);
    }

    function closeReplay() {
        showReplayAlert(false);
        showRetweetAlert(false);
    }
    function getData(){
        console.log(inputRef.current.value);
    }

useEffect(()=>{
    
document.getElementById('dashBoard').addEventListener("click",(event)=>{
    if(event.target.className==='input-reply'||event.target.className==='alert-actions'||event.target.className==='replay-custom-card'){
        event.stopPropagation();
        event.preventDefault();
      //  event.cancelable;
     return   event.stopImmediatePropagation();

    }
    return closeReplay();
});

},[]); 

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
                    
                        <div className="tweet-actions">
                            <div className="tweet-button" >
                                <AiOutlineHeart className="tweet-icon" />
                                <span className="icon-number">35</span>

                            </div>

                            <div className="tweet-button" onClick={replay} id="except">
                                <AiOutlineComment className="tweet-icon" />
                                <span className="icon-number">5</span>

                            </div>

                            <div className="tweet-button" onClick={retweet}>
                                <AiOutlineRetweet className="tweet-icon" />
                                <span className="icon-number">135</span>
                            </div>
                        </div>
                             
                    </div>
                </div>
    
              <CSSTransition
                   key={props.tweet.id}
                   in={replayAlert}
                 timeout={500}
                className="alert"
                unmountOnExit 
                nodeRef={nodeRef}> 
                <div>  
                           <div className="replay-custom-card" id="alertBody" >
                        
                        
                        <textarea type="text" ref={inputRef} className="input-reply" id="#reply-input" maxLength={280} rows={4}  placeholder="replay to @ismail">
                        </textarea>
                        <div className="alert-actions"> 
                        
                        <div className="discard-button" onClick={closeReplay}>cancel</div>
                        <div className="send-button" onClick={getData}>send</div>
                        </div>
                    </div>
                </div>

                </CSSTransition>
                <CSSTransition
                   key={props.tweet.id+12}
                   in={retweetAlert}
                 timeout={500}
                className="alert"
                unmountOnExit 
                nodeRef={nodeRef}> 
                <div>  
                           <div className="replay-custom-card"  >
                        <textarea type="text" ref={inputRef} className="input-reply" id="#reply-input" maxLength={280} rows={4}  defaultValue={props.tweet.content/**tweet.url */}>
                        </textarea>
                        <div className="alert-actions"> 
                        
                        <div className="discard-button" onClick={closeReplay}>cancel</div>
                        <div className="send-button" onClick={getData}>retweet</div>
                        </div>
                    </div>
                </div>

                </CSSTransition>
                
        
        </div>
    );
}

/*
wee need update our api to quet tweet 
retweet
and replay to tweet  
*/