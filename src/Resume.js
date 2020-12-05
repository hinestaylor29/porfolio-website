import React from 'react';
import "./Resume.css";

export default function Resume(){
    return(
        <div className="resume" id="resume">
           <h1 className="section-title"> RESUME </h1>
           <h6 className="resume-description"> Check out my resume  <a className="resume-link" href="/"> here </a> </h6>
        </div>
    );
}