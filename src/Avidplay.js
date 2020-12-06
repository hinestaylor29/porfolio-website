import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dolbyPortals from "./dolbyPortals.png";
import bedroomRecordingStudio from "./bedroomRecordingStudio.png";

import "./Avidplay.css";

export default function Avidplay(){
    return(
    <Container>
        <div className="avidplay-heading">
            <img src={dolbyPortals} alt="Dolby Brand Logo" width={64} height={45} />
            <h1> Dolby x AvidPlay </h1>
            <h5> UX and Content Strategy </h5>
            <p> Case Study by Taylor Hines </p>
        </div>

        <Row>
            <Col>
                <h6> Overview </h6>
                <p> AvidPlay is a music distribution service for 
                    indie artists to distribute their music through 
                    multiple streaming platforms. This co-branded campaign was developed to celebrate the 
                    launch of Dolby Atmos mixed tracks to be supported and distributed through AvidPlay 
                    to Dolby Atmos Music enabled streaming services like Amazon Music HD and TIDAL HiFi.</p>
            </Col>

            <Col>
                <h6> Objective </h6>
                <p> To educate an indie artist on What AvidPlay is, 
                    Why it is better, and How they can get it.  </p>
            </Col>

            <Col>
                <h6> Role </h6>
                <p> Role - Digital Experience Intern <br />
                    Responsibilities - Content strategy, page build, UX design and flow </p>
            </Col>
        </Row>

         <Row className="flex-row-reverse">
        <Col >
            <img
                width={350}
                height={350}
                className= "mx-auto d-block"
                src={bedroomRecordingStudio}
                alt="test" />
        </Col>

            <Col>
                <h4>User Persona</h4>
                <h6> Emma Poe, 21 <br/>
                Bedroom Pop Artist </h6>
                <p>
                Emma Poe spends her time making music when she’s not busy working her part time job. 
                She dreams of being a touring artist but for now she’s just trying to get gigs in her hometown. 
                <br/>Emma produces and distributes her own music through popular platforms like CDBaby. 
                She’s noticed her music is missing something but doesn’t know exactly what. 
                </p>
            </Col>
        </Row>
    </Container>
    );
}