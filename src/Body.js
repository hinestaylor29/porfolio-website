import React from 'react';
import { Link } from 'react-router-dom';
import "./Body.css";
import image from './image.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Body(){
    return(
    
    <div id="portfolio" className="body">
    
    <h1 className="section-title portfolio-title"> PORTFOLIO </h1>
        <Row className="split-feature-1">
        <Col >
            <img
                width={400}
                height={276}
                className= "mx-auto d-block"
                src={image}
                alt="test" />
        </Col>

            <Col className="project-description">
                <h6> Kicker </h6>
                <h4>Media Heading</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to={"/Avidplay"}> 
                    Learn More 
                </Link> 
            </Col>
        </Row>

         <Row className="split-feature-2 flex-row-reverse">
            <Col>
            <img
                width={400}
                height={276}
                className= "mx-auto d-block"
                src={image}
                alt="test 2" />
            </Col>

            <Col className="project-description">
                <h6> Kicker </h6>
                <h4>Media Heading</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Col>
        </Row>

         <Row className="split-feature-3">
        <Col >
            <img
                width={400}
                height={276}
                className= "mx-auto d-block"
                src={image}
                alt="test 3" />
        </Col>

            <Col className="project-description">
                <h6> Kicker </h6>
                <h4>Media Heading</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Col>
        </Row>
        
    </div>
    )
}

