import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import TechSkills from './TechSkills';
import Toolstack from './Toolstack';
import AboutCard from './Aboutcard';
import ParticlesComponent from '../Particles/ParticleComponent'

function About() {
  return (
    <>
      <section>
        <ParticlesComponent/>
        <Container fluid className="about-section">
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px", marginTop: 100, color: 'white' }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Know Who <strong className="purple">I'M</strong>
                </h1>
                <AboutCard />
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "30px", paddingBottom: "20px"}}
                className="about-img"
              >
                <img src='https://gcitconsult.com/assets/img/welcome/thumb_1.png' alt="about" className="img-fluid" />
              </Col>
            </Row>

            <h1 className="project-heading text-center text-white">
              Professional <strong className="purple">Skillset </strong>
            </h1>

            <TechSkills />

            <h1 className="project-heading  text-center text-white">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />

          </Container>
        </Container >
      </section>
    </>
  )
}

export default About