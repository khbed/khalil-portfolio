import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6">
          <h3 style={{paddingLeft: "20px"}}>Copyright © {year} Khalil Beddouch</h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/khbed"
                style={{ color: "white", textDecorationLine: "none" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub style={{paddingBottom: "0.2em"}}/> &nbsp; GitHub
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/khalil-beddouch-0534a828a/"
                style={{ color: "white", textDecorationLine:"none"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn style={{paddingBottom: "0.1em"}}/> &nbsp; LinkedIn
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
