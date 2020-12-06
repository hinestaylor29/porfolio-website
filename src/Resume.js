import React from 'react';
import Taylor_Hines_Resume from "./Taylor_Hines_Resume.pdf";
import "./Resume.css";

export default function Resume(){
    return(
        <div className="resume" id="resume">
           <h1 className="section-title"> RESUME </h1>
           <h6 className="resume-description"> Peruse my resume  <a className="resume-link" href={Taylor_Hines_Resume}> here </a> </h6>
        </div>
    );
}