import React from 'react';
import "./Body.css";
import Media from 'react-bootstrap/Media'
import image from './image.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Body(){
    return(
    
    <div className="body">
    
    <h1 className="portfolio-title"> Portfolio </h1>
        <Row className="split-feature-1">
        <Col>
            <img
                width={400}
                height={276}
                className= "mx-auto d-block"
                src={image}
                alt="test image" />
        </Col>

            <Col className="col-7 project-description">
                <h5>Media Heading</h5>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
            </Col>
        </Row>

         <Row className="split-feature-2">
        <Col>
            <img
                width={400}
                height={276}
                className= "mx-auto d-block"
                src={image}
                alt="test image 2" />
        </Col>

            <Col className="col-7 project-description">
                <h5>Media Heading</h5>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
            </Col>
        </Row>

         <Row className="split-feature-3">
        <Col>
            <img
                width={400}
                height={276}
                className= "mx-auto d-block"
                src={image}
                alt="test image 3" />
        </Col>

            <Col className="col-7 project-description">
                <h5>Media Heading</h5>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
            </Col>
        </Row>
        
    </div>
    )
}

