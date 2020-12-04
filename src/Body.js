import React from 'react';
import "./Body.css";
import Media from 'react-bootstrap/Media'
import image from './image.jpg';

export default function Body(){
    return(
    
    <div className="body">
    
    <h1 className="portfolio-title"> Portfolio </h1>
        <Media className="split-feature">
            <img
                width={400}
                height={276}
                className="col-4 fluid"
                src={image}
                alt="test image"
            />
            <Media.Body className="col-6 project-description">
                <h5>Media Heading</h5>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
        </Media>
    </div>
    )
}

