import React, { useState } from "react";
import { BsImage ,BsPlus} from "react-icons/bs"
export default function Post(props) {


    const [focusedInput, setFocusIndex] = useState(0);
    const [listOfTweets, setTweets] = useState([{
        content: "new tweet",
        image: "",
        video: ""
    }]);


    const addTweet = () => {
        setTweets(listOfTweets => [...listOfTweets, [{
            content: "new tweet",
            image: "",
            video: ""
        }]]);
    }

  
    const addImage = (event) => {
 
        var image=null;
        image = event.target.files[0];
      
        event.preventDefault();
        var newElement = URL.createObjectURL(image);
       
        const newState = listOfTweets.map((obj, index) => {
            // 👇️ if index equals index, update  property
            console.log(focusedInput);
            console.log(index);
            if (index === focusedInput) {
                console.log("   >>>>> if")
                return { ...obj, image: newElement };
            }

            // 👇️ otherwise return object as is
            return obj;
        });

        setTweets(newState);

    }



    const onChanged = (index, e) => {
        const newState = listOfTweets.map((obj, indx) => {
            // 👇️ if index equals indx, update  property
            const value = e.target.value;
            const target = e.target;
            target.style.height = "30px";
            target.style.height = `${target.scrollHeight}px`;
            if (indx === index) {
                return { ...obj, content: value };
            }

            // 👇️ otherwise return object as is
            return obj;
        });

        setTweets(newState);
        console.log('^^^^^^^^^^^^^^')
        console.log("content : " + listOfTweets[index].content)


    }




    const displayArea = listOfTweets.map((tweet, indx) => {
                let opacity=focusedInput===indx?"1":".25";
                console.log(opacity);
        return (
           
                <div className="new-tweet-div" key={indx} style={{opacity:opacity}} >
                    <div className="new-tweet-divider"></div>
                    <textarea className="new-tweet-text-area"  onFocus={() => setFocusIndex(indx)} onChange={(e) => onChanged(indx, e)}
                     placeholder="new tweet"  autoFocus></textarea>
                    {tweet.image &&<div className="image-container">
                    <img className="post-image" src={tweet.image} alt="not found" />
                    <div className="delete-image"><BsPlus/></div>
                    </div> }
                </div>
          

        );
    });

    return (
        <div>
            <div className={props.className}>
                <div />
                <div className="dash-post-header">
                    <select className="dash-post-select" name="defaultAccount" id="#chosenAccount">
                        <option value="account.id">
                            acconut1.name
                        </option>
                        <option value="account.id">
                            acconut2.name
                        </option>
                        <option value="account.id">
                            acconut3.name
                        </option>
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
                    <input type="file" name="myImage" id="fileUp" onChange={(e) => { addImage(e) }} onClick={(e)=>e.target.value=null} />
                    <div onClick={addTweet} className="add-button"><BsPlus></BsPlus></div>
                    <div style={{ display: 'flex' }}>
                        <div className="button-sechudele">Schedule</div>
                        <div className="button">Post</div>
                    </div>

                </div>
            </div>
        </div>

    );

}