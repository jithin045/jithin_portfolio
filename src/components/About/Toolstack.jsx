import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiNetlify
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", color: 'white',marginBottom:100 }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <SiPostman />
      </Col>
      
      <Col xs={3} md={3} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;