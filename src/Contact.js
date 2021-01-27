import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';


export default function Contact(){
    return(
        <div className="contact flex" id="contact">
        <h1 className="section-title"> Let's connect </h1>
        <ul className="contact-links">
            <li> <a id="link" href="https://www.linkedin.com/in/taylor-hines/" rel="noreferrer" target="_blank"> <FontAwesomeIcon className="fa-2x" icon={faLinkedinIn} /> </a></li>
            <li> <a id="link" href="https://www.behance.net/taylorhines2?isa0=1" rel="noreferrer" target="_blank"> <FontAwesomeIcon className="fa-2x" icon={faBehance} /> </a></li>
            <li> <a id="link" className="email" href="mailto:hinestaylor29@gmail.com"> Email Me </a></li>
        </ul>

        <footer>
            ⌨️ Coded by Taylor Hines, using React and  <a href="https://github.com/hinestaylor29/porfolio-website" rel="noreferrer" target="_blank"> open sourced </a>
        </footer>
        </div>
    );
}