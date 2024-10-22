import React, { useEffect, useRef, useState } from "react";
import { BsImage, BsPlus } from "react-icons/bs";
import * as Scroll from "react-scroll";
import { postThread, postTweet } from "../../../controller/tweetController";
import { ToastContainer,toast } from "react-toastify";
export default function Post(props) {
    const [focusedInput, setFocusIndex] = useState(0);
   
    const [listOfTweets, setTweets] = useState(()=>JSON.parse(localStorage.getItem('underPostTweets'))||[{
        content: "",
        image: "",
        video: ""
    }]);

    const letterCounter=(twt)=>{
        if(280-twt.content.length>0){
            return "letter-counter";
        }else{
            return "letter-counter-red";
        }
    }

    const notify=()=>toast.error("sorry somthing error");
    const notifyOk=()=>toast("your tweet posted succesfully");
    const inputRef=useRef([]);

    useEffect(()=>{
        localStorage.setItem('underPostTweets',JSON.stringify(listOfTweets));
     
    },[listOfTweets]);


    const addTweet = () => {
        setTweets(listOfTweets => [...listOfTweets, [{
            content: "new tweet",
            image: "",
            video: "",
            tweetOrder:focusedInput+1
        }]]);
        setFocusIndex(focusedInput+1)

    }

    const focus = (index) => {
        setFocusIndex(index);
        scroll(index);
    }
    const addImage = (event) => {

        var image = null;
        image = event.target.files[0];

        event.preventDefault();
        var newElement = URL.createObjectURL(image);

        const newState = listOfTweets.map((obj, index) => {
            // 👇️ if index equals index, update  property
            console.log(focusedInput);

            if (index === focusedInput) {

                return { ...obj, image: newElement };
            }

            // 👇️ otherwise return object as is
            return obj;
        });

        setTweets(newState);

    }

    const removeImage = (index) => {
        const newState = listOfTweets.map((obj, indx) => {
            if (index === indx) {
                return { ...obj, image: '' }
            }

            return obj;
        });


        setTweets(newState);
    }


var myScroll=Scroll.animateScroll;
    const scroll = (index) => {
        myScroll.scrollTo(100,{
            containerId:'post'
        })
    };



    const onChanged = (index, e) => {

        const newState = listOfTweets.map((obj, indx) => {
            // 👇️ if index equals indx, update  property
            const value = e.target.value;
            const target = e.target;
            target.style.height = "50px";
            target.style.height = `${target.scrollHeight}px`;
            if (indx === index) {
                return { ...obj, content: value };
            }

            // 👇️ otherwise return object as is
            return obj;
        });

        setTweets(newState);
    }

    const postDirectly = () => {
        ///call api to post tweet or threed directly
            var e = document.getElementById("#chosenAccount");
            var index=e.value;   
        if(listOfTweets.length>0&&listOfTweets.length<2&&listOfTweets[0]["content"]!==''){

            postTweet(listOfTweets[0]["content"],props.accounts[index]).then(
                (value)=>{
                    
                    
                    notifyOk();
                    console.log(value.data);
                   
                }
            ).then(
               (v)=>{
                 clear();
               } 
            ).catch(
                (error)=>{
                    console.error(error);
                    notify();
                }
            );
          console.log(listOfTweets);  
        }else{
            var user=localStorage.getItem('current')
            postThread(listOfTweets,props.accounts[index],user["id"]).then(
                (value)=>{
                    notifyOk();

                    console.log(value);
                }
            ).then(
                (v)=>{
                    clear();
                  } 
            ).catch(
                (error)=>{
                    console.log(error);
                    notify();

                }
            );
        }
        
    }

    const clear=()=>{
    
        setTweets([{
            content: "",
            image: "",
            video: "",
            tweetOrder:0
        }]);

    }
    const clearInput=(index)=>{
        if(inputRef.current[index].value !==""){
         inputRef.current[index].focus();
        inputRef.current[index].value=""; 
        const arr= listOfTweets.map((t,i)=>{
            if(index===i) {
                return { ...t, content: "" };
            }


            return t;
        }
           
        );
        setTweets(arr);  
        }else{
            if(index!==0){
              var arr= listOfTweets.filter(t=>t!==listOfTweets[index]);
            setTweets(arr);   
            setFocusIndex(index-1);
            }
          return null;
        }
    
    }


    const displayArea = listOfTweets.map((tweet, indx) => {
        let opacity = focusedInput === indx ? "1" : ".25";
        let noShow= (indx===0&&tweet.content==="")?false : true;
        return (
           
                          <div className="new-tweet-div" id={"id" + indx} key={indx} style={{ opacity: opacity }} >
                {indx > 0 && <div className="new-tweet-divider"></div>}
                <div  className="area-container">
                   <textarea className="new-tweet-text-area" value={tweet.content} ref={el=>inputRef.current[indx]=el} onFocus={() => focus(indx)} onChange={(e) => onChanged(indx, e)}
                    placeholder="new tweet" autoFocus></textarea>
                   {  noShow&&<div className="clear-one-input" onClick={()=>clearInput(indx)} >
                        <BsPlus/>
                    </div>}
                </div>
                
                {tweet.image && <div className="image-container">
                    <img className="post-image" src={tweet.image} alt="not found" />
                    <div className="delete-image" onClick={() => removeImage(indx)}><BsPlus /></div>
                </div>}
               { tweet.content&&<span className={letterCounter(tweet)}>{280-tweet.content.length}</span> /*edit here css*/}
            </div>
       );
    });

 const options=props.accounts.map((account,index)=>{
return <option value={index} key={index}>{account["accountName"]}</option>
 });

    return (

        <div>
            
            <div className={props.className} id="post" >
                <ToastContainer/>
                <div className="dash-post-header">
                    <select className="dash-post-select" name="defaultAccount" id="#chosenAccount">
                        {options}
                    </select>
                </div>
                <div className="dash-post-area">
                    {displayArea}
                </div>

                <div className="dash-post-actions">
                    <label htmlFor="fileUp" >
                        <div className="photo-button">
                            <BsImage></BsImage>
                        </div>
                    </label>
                    <input type="file" name="myImage" id="fileUp" onChange={(e) => { addImage(e) }} onClick={(e) => e.target.value = null} />
                    <div onClick={addTweet} className="add-button"><BsPlus></BsPlus></div>
                    <div onClick={() =>clear()} className="clear-button"><BsPlus></BsPlus></div>
                    <div style={{ display: 'flex' }}>
                        <div className="button-sechudele">Schedule</div>
                        <div className="button" onClick={() => postDirectly()}>Post</div>
                    </div>

                </div>
            </div>
        </div>

    );

}