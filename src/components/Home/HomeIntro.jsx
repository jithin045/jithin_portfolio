import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function HomeIntro() {
    return (
        <>
            <Container fluid className="home-about-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="home-about-description" style={{ textAlign: "center", color: "white", marginTop: 100, marginBottom: 100 }}>
                            <div>
                                <h1 style={{ fontSize: "2.6em", marginBottom: 50 }}>
                                    LET ME <span className="purple text-primary"> INTRODUCE </span> MYSELF
                                </h1>
                                <p className="home-about-body">
                                    I'm very much interested in programming and I have at least learnt
                                    something, I think… 🤷‍♂️
                                    <br />
                                    <br />I am good in classics like
                                    <i>
                                        <b className="purple"> Javascript and Python. </b>
                                    </i>
                                    <br />
                                    <br />
                                    My field of Interest's are building new &nbsp;
                                    <i>
                                        <b className="purple">Web Technologies and Products </b>
                                    </i>
                                    <br />
                                    <br />
                                    I also apply my passion for developing products
                                    with
                                    <i>
                                        <b className="purple">
                                            {" "}
                                            Modern Javascript Library and Frameworks
                                        </b>
                                    </i>
                                    &nbsp; like
                                    <i>
                                        <b className="purple"> React.js and Angular</b>
                                    </i>
                                </p>
                            </div>
                        </Col>
                        {/* <Col md={4} className="myAvtar">
                            <img src="/character.png" className="img-fluid" alt="avatar" />
                        </Col> */}
                    </Row>
                    <Row>
                        <Col md={12} className="home-about-social" style={{ marginBottom: 100 }}>
                            <div style={{ textAlign: "center", color: "white" }}>
                                <h1>FIND ME ON</h1>
                                <p>
                                    Feel free to <span className="purple">connect </span>with me
                                </p>
                            </div>
                            <div className='d-flex flux-column justify-content-center'>
                                <div className="social-icons p-5">
                                    <a
                                        href="https://github.com/jithin045"
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-github fa-2xl"></i>
                                    </a>
                                </div>
                                <div className="social-icons p-5">
                                    <a
                                        href="https://www.linkedin.com/in/jithin-t-03592022b/"
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                                    </a>
                                </div>
                                <div className="social-icons p-5">
                                    <a
                                        href="https://www.instagram.com/jithh_in_/?next=https%3A%2F%2Fwww.instagram.com%2Fjithh_in_%2F"
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-instagram fa-2xl"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default HomeIntro