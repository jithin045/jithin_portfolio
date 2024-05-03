import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiHtml5,
    DiCss3,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";

function TechSkills() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px", color: 'white', marginBottom: 65 }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
        </Row>
    );
}

export default TechSkills;