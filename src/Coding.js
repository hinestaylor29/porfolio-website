import React from 'react';
import "./Coding.css";
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';

export default function Coding(){
    return(
    <div className="coding">
        <h1> Coding Projects </h1>
        <p className="coding-description"> Lorem ipsum </p>
    <Row>
    <Card style={{ width: '400px' }} className="card-1">
            <Card.Body>
            <Card.Title> Project Name </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Languages Used </Card.Subtitle>
            <Card.Text>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Card.Link href="/">Project Link</Card.Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '400px' }} className="card-2">
            <Card.Body>
            <Card.Title> Project Name </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Languages Used </Card.Subtitle>
            <Card.Text className="card-description">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Card.Link href="/">Project Link</Card.Link>
            </Card.Body>
        </Card>
        </Row>
    </div>
    );
}