import React from "react";
import config from '../../config'
function Gallery(){
    return(
        <div className="gallery" id="gallery">
        <h2>Gallery</h2>
        <div className="gallery-row">
            
           {config.gallery.map((value:string)=>{
            return(
<div className="gallery-item">
                <img src={value} width="100%" height="400px" alt="Image 4"/>
            </div>
            )
           })}




        </div>
        


    </div>
   
    )
}
export default Gallery