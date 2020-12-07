import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dolbyPortals from "./dolbyPortals.png";
import avidPlayFrame1 from "./avidPlayFrame1.png";
import avidplayFrame2 from "./avidplayFrame2.png";
import avidplayFrame3 from "./avidplayFrame3.png";
import bedroomRecordingStudio from "./bedroomRecordingStudio.png";

import "./Avidplay.css";

export default function Avidplay(){
    
    return(
    <Container className="avidplay">
        <div className="avidplay-heading">
            <img src={dolbyPortals} alt="Dolby Brand Logo" width={64} height={45} />
            <h1> Dolby x AvidPlay </h1>
            <h5> UX and Content Strategy </h5>
            <p> Case Study by Taylor Hines </p>
        </div>

        <Row className="project-context d-flex justify-content-around">
            <Col sm={true} md={true}>
                <h5> Overview </h5>
                <p> AvidPlay is a music distribution service for 
                    indie artists to distribute their music through 
                    multiple streaming platforms. This co-branded campaign was developed to celebrate the 
                    launch of Dolby Atmos mixed tracks to be supported and distributed through AvidPlay 
                    to Dolby Atmos Music enabled streaming services like Amazon Music HD and TIDAL HiFi.</p>
            </Col>

            <Col>
                <h5> Objective </h5>
                <p> To educate an indie artist on What AvidPlay is, 
                    Why it is better, and How they can get it.  </p>
            </Col>

            <Col>
                <h5> Role </h5>
                <p> Digital Experience Intern </p>
                <p>Responsibilities - Content strategy, page build, UX design and flow </p>
            </Col>
        </Row>

         <Row className="flex-row-reverse user-persona d-flex align-items-center">
        <Col >
            <img
                width={350}
                height={350}
                className= "mx-auto d-block"
                src={bedroomRecordingStudio}
                alt="test" />
        </Col>

            <Col>
            <div>
                <h4>User Persona</h4>
                <h6> Emma Poe, 21 <br/>
                Bedroom Pop Artist </h6>
                
                <p>
                Emma Poe spends her time making music when she’s not busy working her part time job. 
                She dreams of being a touring artist but for now she’s just trying to get gigs in her hometown. 
                </p>
                
                <p>
                Emma produces and distributes her own music through popular platforms like CDBaby. 
                She’s noticed her music is missing something but doesn’t know exactly what. 
                </p>
                
                <h5>Pain Point</h5>
                <p>
                Emma is unaware of what AvidPlay and Dolby Atmos are and how AvidPlay and Dolby Atmos 
                can benefit her as an indie musician and take her music to the next level.
                </p>
            </div>
            </Col>
        </Row>

        <div className="page-objective">
        <h2>Page Objective</h2>
        <h4> To get the users like Emma to try AvidPlay
            using the 30-day free trial link. </h4>
        </div>

        <div className="methodology" >
        <h2> Methodology and Page Structure </h2>
        <Row className= "d-flex align-items-center">
        <Col>
                <img
                width={500}
                height={697}
                className= "mx-auto d-block"
                src={avidPlayFrame1}
                alt="test" />
        </Col>

            <Col>
                <div sm={true} md={true} id="frame-1">
                    <p> Product quote from an experienced and well known
                        producer shows credibility and increases curiosity of the target user. 
                        Users see that an established producer endorses this service so they 
                        will want to learn more about it. </p>
                
                    <p> A visual component to give high level explanation of the service. 
                        This doesn’t require a lot of cognitive attention from the user. </p>
                </div>
            </Col>
        </Row>
        </div>

        <Row className= "d-flex flex-row-reverse align-items-center frame-2">
        <Col>
                <img
                width={500}
                height={669}
                className= "mx-auto d-block"
                src={avidplayFrame2}
                alt="test" />
        </Col>

            <Col>
                <div sm={true} md={true} id="frame-2">
                    <p> List of three main benefits of AvidPlay for an indie artist. 
                        The target user will want to scroll to learn deeper details of the service. 
                        The Dolby Atmos Music story is embedded into this section, 
                        as it is apart of the Why AvidPlay is a differentiator 
                        when it comes to DIY music distribution. </p>
                
                    <p> Artist testimonials build on credibility 
                        and triggers more intrigue about what Dolby Atmos Music is.</p>

                    <p>AvidPlay education and main CTA - This completes the core goal for the user, 
                    now they have all of the information on What, Why, and How they can try the service. </p>
                </div>
            </Col>
        </Row>

        <Row className= "d-flex align-items-center frame-3">
        <Col>
                <img
                width={500}
                height={629}
                className= "mx-auto d-block"
                src={avidplayFrame3}
                alt="test" />
        </Col>

            <Col>
                <div  sm={true} md={true} id="frame-3">
                    <p> Dolby Atmos Music education link out offers a 
                        continuation of the user journey to find out more 
                        about Dolby Atmos in music production. </p>
                
                    <p> Email sign up form acts as a secondary CTA of the page. </p>
                </div>
            </Col>
        </Row>

    </Container>
    );
}