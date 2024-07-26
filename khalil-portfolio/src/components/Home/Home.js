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
      <Container fluid>
        <Container className="home-content">
          <Row>
            <Col md={8} style={{textAlign: "left"}}>
              <h1 className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading">
                I'M
                <strong className="main-name"> KHALIL BEDDOUCH</strong>
              </h1>

              <div>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{alignItems: "center", textAlign: "center"}}>
              <img
                src={profilePicture}
                alt="home pic"
                style={{ maxHeight: "300px" }}
              />
            </Col>
          </Row>

          <Row className="home-learn-more-section" style={{justifyContent: "center",  position: "relative"}}>
            <Button
              className="home-learn-more-btn"
              onClick={() => handleClick()}
              style={{ maxWidth: "250px"}}
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