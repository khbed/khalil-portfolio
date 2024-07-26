import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiSevenPointedStar } from "react-icons/gi";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ textAlign: "left"}}>
          <Col md={9}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px"}}>
              About <strong className="orange">ME</strong>
            </h1>

            <div style={{paddingLeft: "1.5em"}}>
              <h2 style={{fontSize: "1.3em", paddingBottom: "10px"}}>
              Hello! I'm Khalil Beddouch, a passionate software developer and a first-generation immigrant to Canada from Morocco.
              </h2>

              <h2 style={{fontSize: "1.3em", paddingBottom: "10px"}}>
                I have a Bachelor's in Computer Engineering and over 1 year of practical experience in software development through hands-on work and internships.
              </h2>

              <h2 style={{fontSize: "1.3em", paddingBottom: "50px"}}>
              From developing interactive websites to creating innovative solutions for real-world problems, I thrive on challenges and enjoy working collaboratively to achieve success.
              </h2>
            </div>
            
            <h2 style={{fontSize: "2.1em", paddingBottom: "10px"}}>
              Life Beyond Code - <strong className="orange">My Hobbies</strong>
            </h2>

            <div style={{paddingLeft: "1.5em"}}>
              <h2 style={{fontSize: "1.3em", paddingBottom: "10px"}}>
                <GiSevenPointedStar/> &nbsp; Travelling
              </h2>

              <h2 style={{fontSize: "1.3em", paddingBottom: "10px"}}>
                <GiSevenPointedStar/> &nbsp; Hiking and Running 
              </h2>

              <h2 style={{fontSize: "1.3em", paddingBottom: "10px"}}>
                <GiSevenPointedStar/> &nbsp; Learning new languages 
              </h2>
              
              <h2 style={{fontSize: "1.3em", paddingBottom: "70px"}}>
                <GiSevenPointedStar/> &nbsp; Designing Games
              </h2>
            </div>
          </Col>
        </Row>

        {/* <Skills /> */}

        <h1 className="tools-heading">
          Programming <strong className="orange"> Languages </strong>
        </h1>
        {/* <Languages /> */}

        <h1 className="tools-heading">
          Web Development<strong className="orange"> Technologies</strong>  
        </h1>
        {/* <Techstack /> */}

        <h1 className="tools-heading">
          <strong className="orange">Other</strong> Tools
        </h1>
        {/* <Toolstack /> */}
      </Container>
    </Container>
  );
}

export default About;
