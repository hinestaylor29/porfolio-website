import React from "react";
import "./Contact.css";

export default function Contact(){
    return(
        <div className="contact" id="contact">
        <h1 className="section-title"> CONTACT </h1>
        <ul className="contact-links">
            <li> <a id="link" href="/"> LinkedIn </a></li>
            <li> <a id="link" href="/"> Behance </a></li>
            <li> <a id="link" href="/"> Email </a></li>
        </ul>

        <footer>
            ⌨️ Coded by Taylor Hines, using React and  <a href="/"> open sourced </a>
        </footer>
        </div>
    );
}