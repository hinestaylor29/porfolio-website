import React from 'react';
import "./Heading.css";

export default function Heading(){
return(
    <div className="col-12 name-pitch">
        <h1 className="name"> Hi, I'm <span id="name"> Taylor. </span> </h1>
        <p className="col-6 pitch"> I'm a junior UX designer striving to design seamless end to end digital experiences. Currently working at Dolby Labs in San Francisco. </p>
    </div>
);
}