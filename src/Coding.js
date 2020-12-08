import React from 'react';
import "./Coding.css";
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


export default function Coding(){
    return(
    <Fade bottom>
    <div className="coding" id="coding">
        <h1 className="section-title" > CODING PROJECTS </h1>
        <p className="coding-description col-10"> 💡 While staying inside during quarantine, 
        I thought I would learn a few front-end programming languages. 
        Here are a two projects I built during my learning process. </p>
    <Row>
    <card style={{ width: '400px' }} className="card-1">
            <Card.Body>
            <h5 className="card-title"> Weather App </h5>
            <h6 className="mb-2"> HTML, CSS, Vanilla JavaScript, Bootstrap </h6>
            <p className="card-description">
                 Built a functional forecasting app using tools learned in workshop which includes utilizing API calls.
            </p>
            <a className="card-link" href="https://zen-williams-e221d2.netlify.app/" target="_blank" rel="noreferrer"> Check it out 🌦 </a>
            </Card.Body>
        </card>

        <card style={{ width: '400px' }} className="card-2">
            <Card.Body>
            <h5 className="card-title"> React Weather App </h5>
            <h6 className="mb-2 text-muted"> HTML, CSS, React </h6>
            <p className="card-description">
                 Improved weather app built in previous workshop by implementing React and other tools learned during workshop.
            </p>
            <a className="card-link" href="https://amazing-neumann-ba2ef4.netlify.app/" target="_blank" rel="noreferrer"> Take a peek 👀 </a>
            </Card.Body>
        </card>
        </Row>
    </div>
    </Fade>
    );
}