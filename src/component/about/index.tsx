import React from "react";
import config from '../../config';
function About(){
    console.log(config.discription,"===");
    return(
<div className="About" id="About">
    <div className="jumbotron">

        <div className="col-lg-10 mx-auto">
            <h2 className="text-center">About Us</h2>
            <p className="text-justify" style = {{
              fontWeight: 500,
              fontSize: "18px"
            }}>
             {config.discription}   
            </p>
        </div>

    </div>
</div>

    )
}
export default About