import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid className="footer mt-auto py-2">
        <Row style={{ textAlign: "center",color:"white"}}>
          <Col md="4" className="footer-copywright">
            <h6>Designed and Developed by Jithin</h6>
          </Col>
          <Col md="4" className="text-center footer-copywright">
            <h6>Copyright © 2025 jithin</h6>
          </Col>
          <Col md="4" className="footer-body">
            <div className='footer-icons d-flex flux-column justify-content-evenly'>

              <div className="social-icons">
                <a
                  href="https://github.com/jithin045"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jithin-t-03592022b/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/jithh_in_/?next=https%3A%2F%2Fwww.instagram.com%2Fjithh_in_%2F"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
