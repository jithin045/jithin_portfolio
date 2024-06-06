import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Type from './Type'
import HomeIntro from './HomeIntro'
import ParticlesComponent from '../Particles/ParticleComponent'

function Home() {


    return (
        <>
            <section>
            <ParticlesComponent id="particles" />
                <Container fluid className="home-section" id="home">
                    <Container className="home-content" style={{ marginTop: 120, marginBottom: 115 }}>
                        <Row>
                            <Col sm={12} md={8} className="home-header">
                                <div style={{ textAlign: "center", color: "white", marginTop: 100 }}>
                                    <h1 className="heading">
                                        Hi There!{" "}
                                        <span className="wave" role="img" aria-labelledby="wave">
                                            👋🏻
                                        </span>
                                    </h1>

                                    <h1 className="heading-name" style={{ marginTop: 20 }}>
                                        I'M
                                        <strong className="purple"> JITHIN T</strong>
                                    </h1>

                                    <div style={{ padding: 40, textAlign: "left" }}>
                                        <h1 className='typewriter'><Type /></h1>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={12} md={8}>
                                <img
                                    src="https://openedx.org/wp-content/uploads/2019/01/Community-Develop-Illustration-2.png"
                                    alt="home pic"
                                    className="img-fluid"
                                    style={{ maxHeight: "450px" }}
                                />
                            </Col>
                        </Row>
                    </Container>

                    <HomeIntro />

                </Container>
            </section>


        </>
    )
}

export default Home