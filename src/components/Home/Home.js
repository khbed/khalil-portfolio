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
      <Container fluid className="home-container">
        <Row>
          <Col md={{span: 5, offset: 1}} className="home-title">
            <h1 className="heading">
              Hi There!{" "}
            </h1>

            <h1 style={{paddingBottom: "1.5em"}} className="heading">
              I'M <strong className="orange"> KHALIL BEDDOUCH</strong>
            </h1>

            <div>
              <Type />
            </div>
          </Col>

          <Col md={{span: 3, offset: 2}} className="home-image">
            <img
              src={profilePicture}
              alt="home pic"
              style={{ maxHeight: "40vh" }}
            />
          </Col>
        </Row>

        <Row className="home-learn-more-section">
          <Button
            className="home-learn-more-btn"
            onClick={() => handleClick()}
            style={{ maxWidth: "250px", fontSize: "1.1em"}}
          >
            Discover More &nbsp; <FaAngleDoubleDown/>
          </Button>
        </Row>
      </Container>
      <div ref={ref}>
        <About />
      </div>
    </section>
  );
}

export default Home;