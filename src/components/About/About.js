import React from "react";
import { Container, Col } from "react-bootstrap";
import { GiSevenPointedStar } from "react-icons/gi";
import Skills from "src/components/About/Skills";
import Tools from "src/components/About/Tools";

function About() {
  return (
    <Container fluid className="about-section">
      <Col md={{offset: 1}}>
        <h1 className="about-heading">
          About <strong className="orange">ME</strong>
        </h1>
      </Col>
      
      <Col style={{paddingBottom: "5vh"}} md={{span: 8, offset: 1}}>
        <h2 className="about-text">
          Hello! I'm Khalil Beddouch, a passionate software developer and a first-generation immigrant to Canada from Morocco.
        </h2>

        <h2 className="about-text">
          I have a Bachelor's in Computer Engineering and over 1 year of practical experience in software development through hands-on work and internships.
        </h2>

        <h2 className="about-text">
          From developing interactive websites to creating innovative solutions for real-world problems, I thrive on challenges and enjoy working collaboratively to achieve success.
        </h2>
      </Col>

      <Col md={{offset: 1}}>
        <h1 className="about-heading">
          Life Beyond Code - <strong className="orange">My Hobbies</strong>
        </h1>
      </Col>
      
      <Col style={{paddingBottom: "10vh"}} md={{span: 8, offset: 1}}>
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
      </Col>

      <Skills />
      <Tools />
    </Container>
  );
}

export default About;