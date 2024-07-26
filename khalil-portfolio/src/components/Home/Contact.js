import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from 'react-bootstrap/Toast';
import { Col, Row } from "react-bootstrap";
import { FaAt, FaDiscord, FaGithub, FaLinkedinIn, FaRegCopy } from "react-icons/fa";

function Contact() {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);

  const toggleShowB = () => setShowB(!showB);

  function copyDiscord() {
   navigator.clipboard.writeText("khalil2000");
   setShowA(true);
  }

  function copyEmail() {
    navigator.clipboard.writeText("khalilbeddouch44@gmail.com");
    setShowB(true);
   }

  return (
    <section className="contact-section">
      <h1 className="contact-heading">
        Contact me
      </h1>
      <Row style={{justifyContent: "center", position: "relative"}}>
        <Button 
          className="contact-btn-top"
          href="https://www.linkedin.com/in/khalil-beddouch-0534a828a/"
          target="_blank" 
        >
          <Row>
            <Col xs={2}></Col>
            <Col xs={5} style={{textAlign: "left"}}>
              LinkedIn
            </Col>
            <Col xs={5}>
              <FaLinkedinIn />
            </Col>
          </Row>
        </Button>
      </Row>
      <Row style={{justifyContent: "center", position: "relative"}}>
        <Button 
          className="contact-btn"
          href="https://github.com/khbed"
          target="_blank" 
        >
          <Row>
            <Col xs={2}></Col>
            <Col xs={5} style={{textAlign: "left"}}>
              GitHub
            </Col>
            <Col xs={5}>
              <FaGithub />
            </Col>
          </Row>
        </Button>
      </Row>
      <Row style={{justifyContent: "center", position: "relative"}}>
        <Button 
          className="contact-btn"
          onClick={() => copyDiscord()}
        >
          <Row>
            <Col xs={2}></Col>
            <Col xs={5} style={{textAlign: "left"}}>
              Discord
            </Col>
            <Col xs={5}>
              <FaDiscord />
            </Col>
          </Row>
        </Button>
      </Row>
      <Row style={{justifyContent: "center", position: "relative"}}>
        <Button 
          className="contact-btn-bottom"
          onClick={() => copyEmail()}
        >
          <Row>
            <Col xs={2}></Col>
            <Col xs={5} style={{textAlign: "left"}}>
              Email
            </Col>
            <Col xs={5}>
              <FaAt />
            </Col>
          </Row>
        </Button>
      </Row>

      <Row style={{paddingTop: "3vh", justifyContent: "center", position: "relative"}}>
        <Toast onClose={() => setShowA(false)} show={showA} delay={3000} autohide style={{position: "absolute"}}>
          <Toast.Body style={{color: "#E94F37"}}> Discord username copied to clipboard!</Toast.Body>
        </Toast>

        <Toast onClose={() => setShowB(false)} show={showB} delay={3000} autohide style={{position: "absolute"}}>
          <Toast.Body style={{color: "#E94F37"}}> Email address copied to clipboard!</Toast.Body>
        </Toast>
      </Row>
      
    </section>
    
  );
}

export default Contact;
