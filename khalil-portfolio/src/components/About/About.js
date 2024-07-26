import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiSevenPointedStar } from "react-icons/gi";
import Skills from "src/components/About/Skills";
import Tools from "./Tools";
import Contact from "../Home/Contact";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ textAlign: "left", paddingBottom: "10vh"}}>
          <Col md={9}>
            <h1 style={{paddingTop: "1vh"}} className="about-heading">
              About <strong className="orange">ME</strong>
            </h1>

            <div style={{paddingLeft: "2vw"}}>
              <h2 className="about-text">
              Hello! I'm Khalil Beddouch, a passionate software developer and a first-generation immigrant to Canada from Morocco.
              </h2>

              <h2 className="about-text">
                I have a Bachelor's in Computer Engineering and over 1 year of practical experience in software development through hands-on work and internships.
              </h2>

              <h2 className="about-text">
              From developing interactive websites to creating innovative solutions for real-world problems, I thrive on challenges and enjoy working collaboratively to achieve success.
              </h2>
            </div>
            
            <h2 style={{paddingTop: "5vh"}} className="about-heading">
              Life Beyond Code - <strong className="orange">My Hobbies</strong>
            </h2>

            <div style={{paddingLeft: "2vw"}}>
                <h2 className="about-text">
                <GiSevenPointedStar/> &nbsp; Travelling
              </h2>

              <h2 className="about-text">
                <GiSevenPointedStar/> &nbsp; Hiking and Running 
              </h2>

              <h2 className="about-text">
                <GiSevenPointedStar/> &nbsp; Learning new languages 
              </h2>
              
              <h2 className="about-text">
                <GiSevenPointedStar/> &nbsp; Designing Games
              </h2>
            </div>
          </Col>
        </Row>

        <Skills />
        <Tools />
        
        <Contact />
      </Container>
    </Container>
  );
}

export default About;
