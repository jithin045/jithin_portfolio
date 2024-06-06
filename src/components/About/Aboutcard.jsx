import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jithin T </span>
            from <span className="purple"> Kannur, India.</span>
            <br />
            I have completed Bachelor of Technology (B.TECH) in Information Technology at College of Engineering Trikaripur.
            <br />
            I'm also have Diploma in Mechatronics
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity mb-2">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity mb-5">
              <ImPointRight /> Photography
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;