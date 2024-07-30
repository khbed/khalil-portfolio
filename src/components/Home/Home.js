import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "src/components/Home/Type";
import About from "src/components/About/About";
import profilePicture from "src/assets/profile-picture.png";
import Button from "react-bootstrap/Button";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useRef } from "react";

function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <section>
      <Container fluid style={{paddingTop: "25vh"}}>
        <Container className="home-content">
          <Row style={{paddingBottom: "5vh"}}>
            <Col md={7} style={{textAlign: "left", paddingTop: "5vh", paddingBottom: "5vh"}}>
              <h1 style={{paddingBottom: "0.2em"}} className="heading">
                Hi There!{" "}
              </h1>

              <h1 style={{paddingBottom: "1.5em"}} className="heading">
                I'M
                <strong className="main-name"> KHALIL BEDDOUCH</strong>
              </h1>

              <div>
                <Type />
              </div>
            </Col>

            <Col md={5} className="image-section">
              <img
                src={profilePicture}
                alt="home pic"
                style={{ maxHeight: "40vh" }}
              />
            </Col>
          </Row>

          <Row className="home-learn-more-section" style={{justifyContent: "center",  position: "relative"}}>
            <Button
              className="home-learn-more-btn"
              onClick={() => handleClick()}
              style={{ maxWidth: "250px", fontSize: "1.1em"}}
            >
              Discover More &nbsp; <FaAngleDoubleDown/>
            </Button>
          </Row>
        </Container>
      </Container>
      <div ref={ref}>
        <About />
      </div>
    </section>
  );
}

export default Home;