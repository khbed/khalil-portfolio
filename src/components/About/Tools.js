import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
    SiCplusplus,
    SiCsharp,
    SiGithub,
    SiJavascript,
    SiLinux,
    SiPostgresql,
    SiTypescript,
    SiVisualstudiocode,
    SiWindows,
} from "react-icons/si";
import {
    DiPython,
    DiJava,
    DiPhp,
    DiAngularSimple,
    DiReact,
} from "react-icons/di";
import { FaAws, FaDocker } from "react-icons/fa";

function Tools() {
  return (
    <Col md={{offset: 1}} style={{paddingBottom: "10vh"}}>
      <h1 className="tools-heading">
        Programming <strong className="orange"> Languages </strong>
      </h1>

      <Row style={{ paddingBottom: "5vh" }}>
        <Col xs={2} md={1} className="tech-icons">
          <SiCplusplus title="C++"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiCsharp title="C#"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <DiJava title="Java"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <DiPython title="Python"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <DiPhp title="PHP"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiJavascript title="JavaScript"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiTypescript title="TypeScript"/>
        </Col>
      </Row>

      <h1 className="tools-heading">
      Web Development<strong className="orange"> Technologies</strong>  
      </h1>

      <Row style={{ paddingBottom: "5vh" }}>
        <Col xs={2} md={1} className="tech-icons">
          <DiReact title="React"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <DiAngularSimple title="Angular"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiPostgresql title="PostgreSQL"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <FaAws title="AWS"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <FaDocker title="Docker"/>
        </Col>
      </Row>

      <h1 className="tools-heading">
        <strong className="orange">Other</strong> Tools
      </h1>

      <Row>
        <Col xs={2} md={1} className="tech-icons">
          <SiLinux title="Linux"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiWindows title="Windows"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiVisualstudiocode title="VSCode"/>
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiGithub title="Git/Github"/>
        </Col>
      </Row>
    </Col>
    
  );
}

export default Tools;