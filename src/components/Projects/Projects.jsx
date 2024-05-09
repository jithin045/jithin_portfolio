import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./Projectcards";
import ParticlesComponent from "../Particles/ParticleComponent";


function Projects() {
  return (
    <>
      <section>
        <ParticlesComponent />
        <Container fluid className="project-section">
          <Container style={{ color: "white", marginTop: 120, marginBottom: 115, textAlign: "center" }}>
            <h1 className="project-heading">
              My Recent <strong className="purple">Works </strong>
            </h1>
            <p style={{ color: "white", marginBottom: 50 }}>
              Here are a few projects I've worked on recently.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <ProjectCards
                  imgPath="/mediaplayer.jpg"
                  isBlog={false}
                  title="React MediaPlayer 2024"
                  description="A React.js media player enables users to play video files within a web app. It's built using React's components, offering features like play/pause controls,history tracking, and support for various media formats. The player synchronizes UI updates with media events for a seamless experience."
                  ghLink="https://github.com/jithin045/React-MediaPlayer-2024"
                  demoLink="https://react-media-player-2024.vercel.app/"
                />
              </Col>

              <Col md={4} className="project-card">
                <ProjectCards
                  imgPath="/calculator.jpg"
                  isBlog={false}
                  title="Calculator"
                  description="A JavaScript calculator is a web tool for basic arithmetic operations, built with buttons for numbers, operators, and functions like clear and equal. Implemented using JavaScript, it performs calculations in real-time, providing users with accurate results and a responsive interface directly within a web browser."
                  ghLink="https://github.com/jithin045/calculator"
                  demoLink="https://jithin045.github.io/calculator/"
                />
              </Col>

            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Projects;