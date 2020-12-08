import React from 'react';
import Taylor_Hines_Resume from "./Taylor_Hines_Resume.pdf";
import "./Resume.css";
import Fade from 'react-reveal/Fade';

export default function Resume(){
    return(
        <Fade bottom>
        <div className="resume" id="resume">
           <h1 className="section-title"> RESUME </h1>
           <h6 className="resume-description"> Check out my resume  <a className="resume-link" href={Taylor_Hines_Resume}>here</a> 📝 </h6>
        </div>
        </Fade>
    );
}