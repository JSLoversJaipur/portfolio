import React from 'react';
import './body.css';
import Education from '../education';
import About from '../about';
import Hero from '../hero';
import Gallery from '../gallery';
function Body(props: any){
  console.log(props.information.firstname)
  
return (
  <>
       <Hero/> 
       <About/>
       <Education/>
       <Gallery/>
</>
    )
    }
    export default Body;
