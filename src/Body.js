import React from 'react';
import { Link } from 'react-router-dom';
import "./Body.css";
import avidplayMockupResized from "./avidplayMockupResized.png";
import impossibleFoodsPresentation from "./impossibleFoodsPresentation.pdf";
import impossibleBurgerResized from "./impossibleBurgerResized.jpg";
import claraCover from "./clara_cover.png";

import thoughtcloud from "./thoughtcloud.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';


export default function Body(){
    return(
    
    <div id="portfolio" className="body">
    <Fade bottom>
    <h1 className="section-title portfolio-title"> Portfolio </h1>

    <Fade bottom>
         <Row className="split-feature-1 d-flex align-items-center">
            <Col>
            <img
                width={500}
                className= "mx-auto d-block"
                src={claraCover}
                alt="mock up of theoretical app" />
            </Col>

            <Col className="project-description">
                <h6> UX UI Designer//Product Designer </h6>
                <h4> CLARA </h4>
                <p> Your guide to recycle smarter, not harder. </p>
                <a className="case-study-link" href="https://www.behance.net/gallery/112080673/CLARA-UXUI-Case-study" target="_blank" rel="noreferrer"> Meet CLARA ♻️ </a>
            </Col>
        </Row>
        </Fade>

        <Fade bottom>
        <Row className="split-feature-2 d-flex flex-row-reverse align-items-center">
        <Col >
            <img
                width={500}
                className= "mx-auto d-block"
                src={avidplayMockupResized}
                alt="Website on a Macbook and an iPhone" />
        </Col>

            <Col className="project-description">
                <h6> UX//Content Strategy </h6>
                <h4>Dolby x AvidPlay</h4>
                <p>
                Led UX and content strategy for co-branded marketing campaign for the launch of new Dolby enabled music mixing tool on professional.dolby.com.
                </p>
                <Link to={"/Avidplay"} className="case-study-link"> 
                    See More 🎧 
                </Link> 
            </Col>
        </Row>
        </Fade>

        <Fade bottom>
        <Row className="split-feature-3 d-flex align-items-center">
        <Col >
            <img
                width={500}
                className= "mx-auto d-block"
                src={thoughtcloud}
                alt="image of logo on MacBook Pro" />
        </Col>

            <Col className="project-description">
                <h6> UX UI Designer//Product Designer </h6>
                <h4>Coming soon: thoughtcloud</h4>
                <p>
                    My work at Thoughtcloud includes UX/UI design, developing user flows, iterating on low fidelity and high fidelity designs, and collaborating with the team to create new features for the platform. </p>
            </Col>
        </Row>
        </Fade> 
    </Fade> 
    </div>
    )
}

