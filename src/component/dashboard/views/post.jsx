import React, { useState } from "react";
import { BsImage } from "react-icons/bs"
export default function Post(props) {
    const [selectedImages, setImages] = useState([]);

    const addImage = (event) => {
        if (selectedImages.length < 7)
       var images=event.target.files;
       event.preventDefault();
       
          var newElement=URL.createObjectURL(images[0]);
                     console.log(URL.createObjectURL(images[0]));
         setImages(selectedImages=>[...selectedImages,[newElement]]);

         console.log(selectedImages.length,newElement);
    }

    const displayImages = selectedImages.map((img,index) => {
        return (
            <div className="image-div" key={index}>
            
            <img src={img} alt="not found" />
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
                  <div className="dash-post-div-media">
                {displayImages}
                </div>
                <textarea name="postTextARea" className="dash-post-text"
                    id="postTextARea" required placeholder="What do you have in your mind?" cols="10" rows="100">
                 </textarea>
                 

                
             
                
                <div className="dash-post-actions">
                    <label htmlFor="fileUp">
                        <div className="photo-button">
                            <BsImage></BsImage>
                        </div>
                    </label>
                    <input type="file" name="myImage" id="fileUp" onChange={(e) =>{ addImage(e)}} />
                    <div style={{ display: 'flex' }}>
                        <div className="button-sechudele">Schedule</div>
                        <div className="button">Post</div>
                    </div>

                </div>
            </div>
        </div>

    );

}