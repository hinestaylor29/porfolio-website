import React from 'react';
import "./Body.css";
import Media from 'react-bootstrap/Media'
import image from './image.jpg';

export default function Body(){
    return(
    
    <div className="body">
    
    <h1 className="portfolio-title"> Portfolio </h1>
        <Media className="split-feature-1s">
            <img
                width={400}
                height={276}
                className= "fluid"
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


        <Media className="split-feature-2">
             <Media.Body className="col-6 project-description">
                <h5>Media Heading</h5>
                <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
            
            <img
                width={400}
                height={276}
                className="fluid"
                src={image}
                alt="test image 2"
            />
        </Media>

        <Media className="split-feature-3">
            <img
                width={400}
                height={276}
                className="fluid"
                src={image}
                alt="test image 3"
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

