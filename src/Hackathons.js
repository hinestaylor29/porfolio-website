import React from 'react';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import edateCover from "./edateCover.jpg";
import siftCover from "./siftCover.png";
import './Hackathons.css';

export default function Hackathons(){
    return(
    <Fade bottom>
        <div className="hackathons flex">
            <h1 className="section-title flex"> Hackathons </h1>
            <p className="hackathons-description flex col-10"> 👩🏼‍💻 During the continued effort to stay inside, I decided to sign up for a few virtual hackathons. It was an intense learning experience and a fun way to collaborate with others! Check out the projects I was able to work on below. </p>
        
        <Row>
        <Col>
            <div className="protothon flex">
            <a href="https://docs.google.com/presentation/d/1h6QaHtpDbheQdWe5uTqLcrVk_cHwgU4OpCCtSYxKmMY/edit?usp=sharing" target="_blank" rel="noreferrer">

                     <img
                    width={400}
                    className= "protothon_img flex"
                    src={edateCover}
                    alt="cover art for a presentation"
                    />

            <div className="protothon_overlay flex"> <a href= "www.google.com" target="_blank" rel="noreferrer"> </a>
            <div className="protothon_overlay_title flex"> eDate </div>
            <p className="protothon_overlay_description flex"> Check out my team's submission for Protothon 2021, where we placed 2nd in the Valentines Day track. </p>
            </div>
            </a>
            </div>
        </Col>

        <Col>
            <div className="protothon flex">
            <a href="https://docs.google.com/presentation/d/1kryjPRuL4EiRepL9_cQdc1CDhfAl7s3n29HMuPkdCBY/edit?usp=sharing" target="_blank" rel="noreferrer">
                     <img
                    width={400}
                    className= "protothon_img flex"
                    src={siftCover}
                    alt="cover for presentation"
                    />

            <div className="protothon_overlay flex"> <a href= "www.google.com" target="_blank" rel="noreferrer"> </a>
            <div className="protothon_overlay_title flex"> Sift </div>
            <p className="protothon_overlay_description flex"> Learn more about my team's SacHacks submission which won Best Startup Idea. </p>
            </div>
            </a>
            </div>

        </Col>
        </Row>
        </div>
    </Fade>
    )
}