import React from 'react';
import { Link } from 'react-router-dom';
import "./Body.css";
import avidplayMockupResized from "./avidplayMockupResized.png";
import impossibleFoodsPresentation from "./impossibleFoodsPresentation.pdf";
import impossibleBurger from "./impossibleBurger.jpg";
import thoughtcloud from "./thoughtcloud.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Body(){
    return(
    
    <div id="portfolio" className="body">
    
    <h1 className="section-title portfolio-title"> PORTFOLIO </h1>
        <Row className="split-feature-1 d-flex align-items-center">
        <Col >
            <img
                width={400}
                height={229}
                className= "mx-auto d-block"
                src={avidplayMockupResized}
                alt="Image of website on a Macbook and an iPhone" />
        </Col>

            <Col className="project-description">
                <h6> UX//Content Strategy </h6>
                <h4>Dolby x AvidPlay</h4>
                <p>
                Lead UX and content strategy for co-branded marketing campaign for the launch of new Dolby enabled music mixing tool on professional.dolby.com.
                </p>
                <Link to={"/Avidplay"} className="case-study-link"> 
                    See More 🎧 
                </Link> 
            </Col>
        </Row>

         <Row className="split-feature-2 flex-row-reverse d-flex align-items-center">
            <Col>
            <img
                width={400}
                height={267}
                className= "mx-auto d-block"
                src={impossibleBurger}
                alt="Image of burgers made from the Impossible Burger meat on a vibrant background" />
            </Col>

            <Col className="project-description">
                <h6> Consumer Behavior//User Analysis </h6>
                <h4> Impossible Foods </h4>
                <p>
                Analyzed consumer behavior patterns and designed data-driven consumer focused strategy to convince meat eaters to try Impossible Burger for competitive course project.</p>
                <a className="case-study-link" href={impossibleFoodsPresentation} target="_blank" rel="noreferrer"> Read About It 🍔 </a>
            </Col>
        </Row>

         <Row className="split-feature-3 d-flex align-items-center">
        <Col >
            <img
                width={400}
                height={215}
                className= "mx-auto d-block"
                src={thoughtcloud}
                alt="test 3" />
        </Col>

            <Col className="project-description">
                <h6> UX/UI Designer//Product Designer </h6>
                <h4>Coming soon: thoughtcloud</h4>
                <p>
                    My work at Thoughtcloud includes UX/UI design, developing user flows, iterating on low fidelity and high fidelity designs, and collaborating with the team to create new features for the platform. </p>
            </Col>
        </Row>
        
    </div>
    )
}

