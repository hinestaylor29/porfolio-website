import React from 'react';
import "./Body.css";
import Media from 'react-bootstrap/Media'

export default function Body(){
    return(
    
    <div className="body">
    
    <h1> Portfolio </h1>
        <Media>
            <img
                width={600}
                height={600}
                className="col-6"
                src="holder.js/64x64"
                alt="Generic placeholder"
            />
            <Media.Body className="col-6">
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

