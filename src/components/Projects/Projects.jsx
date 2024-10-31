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
              <Col lg={4} md={6} sm={12} className="project-card">
                <ProjectCards
                  imgPath="/mediaplayer.jpg"
                  isBlog={false}
                  title="React MediaPlayer 2024"
                  description="A React media player app is a user interface built with the React.JS library. It typically provides features like play, pause, stop, volume control, and displaying media metadata. React's component-based architecture makes it easy to organize and customize different elements of the media player interface."
                  ghLink="https://github.com/jithin045/React-MediaPlayer-2024"
                  demoLink="https://react-media-player-2024.vercel.app/"
                />
              </Col>

              <Col lg={4} md={6} sm={12} className="project-card">
                <ProjectCards
                  imgPath="/reduxcart.jpg"
                  isBlog={false}
                  title="Redux-Cart"
                  description="A React Redux shopping cart ecommerce app is a web application built using the React JavaScript library for user interface components and Redux for managing the application's state.
                  In this app, users can browse through a catalog of products, add items to their shopping cart, adjust quantities, and proceed to checkout."
                  ghLink="https://github.com/jithin045/ReduxCart"
                  demoLink="https://redux-cart-gamma-indol.vercel.app/"
                />
              </Col>

              <Col lg={4} md={6} sm={12} className="project-card">
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
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col lg={4} md={6} sm={12} className="project-card">
                <ProjectCards
                  imgPath="/ekart.png"
                  isBlog={false}
                  title="E-Kart"
                  description="The eCommerce Application (E-Kart) offers secure user authentication, detailed product listings, advanced search options. Implemented secure and verified payment section without the leakage of user data. Technologies used: Angular, Node JS, Express JS, MongoDB."
                  ghLink="https://github.com/jithin045/ekart"
                  demoLink="https://ekart-jet.vercel.app/"
                />
              </Col>

              <Col lg={4} md={6} sm={12} className="project-card">
                <ProjectCards
                  imgPath="/projectfair.png"
                  isBlog={false}
                  title="Project Fair"
                  description="Developed a ProjectFair Application to post and display different user projects. The application features a user-friendly interface, robust authentication and security measures. Technologies used: React JS, Node JS, Express JS, MongoDB."
                  ghLink="https://github.com/jithin045/Project-Fair"
                  demoLink="https://project-fair-kohl.vercel.app/"
                />
              </Col>

              <Col lg={4} md={6} sm={12} className="project-card">
                <ProjectCards
                  imgPath="/jmovies.png"
                  isBlog={false}
                  title="J Movies"
                  description="Developed a movie booking system with separate interfaces for users, administrators and theatre owners.The application features a user-friendly interface, robust authentication and security measures.Technologies used: React JS, Node JS, Express JS, MongoDB."
                  ghLink="https://github.com/jithin045/jmovies"
                  demoLink="https://jmovies.onrender.com"
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