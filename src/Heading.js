import React from 'react';
import "./Heading.css";

export default function Heading(){
return(
<div>
     <div className="col-1 links">
        <a id="portfolio-link" href="/"> Portfolio </a>
        <a id="resume-link" href="/"> Resume </a>
        <a id="contact-link"href="/"> Contact </a>
    </div>

    <div className="col-2 heading">
        <h1> Taylor Hines </h1>
        <p className="title"> UX Designer </p>
        <p> Currently working at Dolby Labs in San Fransico. </p>
    </div>
</div>
);
}