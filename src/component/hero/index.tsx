import React from "react";
import Social from '../social'
import config from '../../config'

function Hero(){
    return(
        <div className="name" id="name">
        <h1 className="text-dark ">{config.information.firstname}</h1>
        <h1 className="text-danger"> {config.information.lastname}</h1>
        
        {config.information.city.length > 0 && (
         <p className="text-dark m-2"><b>{config.information.city}</b></p>
        )}
        
        <div className="social-links">
           <Social name={"github"} href={"https://github.com/"+config.information.github}/>
           <Social name={"twitter"} href={"https://twitter.com/"+config.information.twitter}/>
           <Social name={"instagram"} href={"https://instagram.com/"+config.information.instagram}/>
           <Social name={"linkedin"} href={"https://lindein.com/"+config.information.linkedin}/>

            
        </div>
        <a className="btn btn-danger m-3"
            href={config.information.resume}
            target="_blank">Download Resume</a>
    </div>
    )
}
export default Hero