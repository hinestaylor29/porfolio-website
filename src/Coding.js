import React from 'react';
import "./Coding.css";
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';

export default function Coding(){
    return(
    <div className="coding" id="coding">
        <h1 className="section-title" > CODING PROJECTS </h1>
        <p className="coding-description"> Lorem ipsum </p>
    <Row>
    <card style={{ width: '400px' }} className="card-1">
            <Card.Body>
            <h5 className="card-title"> Project Name </h5>
            <h6 className="mb-2"> Languages Used </h6>
            <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="card-link" href="/">Project Link</a>
            </Card.Body>
        </card>

        <card style={{ width: '400px' }} className="card-2">
            <Card.Body>
            <h5 className="card-title"> Project Name </h5>
            <h6 className="mb-2 text-muted"> Languages Used </h6>
            <p className="card-description">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="card-link" href="/"> Project Link </a>
            </Card.Body>
        </card>
        </Row>
    </div>
    );
}