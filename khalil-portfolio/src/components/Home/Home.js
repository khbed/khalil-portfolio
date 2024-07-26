import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "src/components/Home/Type";
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
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏽
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KHALIL BEDDOUCH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{alignContent: "center"}}>
              <img
                src={profilePicture}
                alt="home pic"
                className="img-fluid"
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
    </section>
  );
}

export default Home;