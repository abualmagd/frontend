import React from "react";
import {BsImage} from "react-icons/bs"
export default function Post(props){

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
            <textarea name="postTextARea" className="dash-post-text" 
            id="postTextARea" required placeholder="What do you have in your mind?"  rows="100"></textarea>
            <div className="dash-post-actions">
                <div className="photo-button"><BsImage></BsImage> </div>
                <div className="button">Post</div>
            </div>
        </div> 
        </div>
       
    );

}