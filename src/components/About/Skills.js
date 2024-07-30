import React from "react";
import { Col, Row } from "react-bootstrap";
import SkillBar from "src/components/About/SkillBar";

function Skills() {
  return (
  <Row style={{textAlign: "left", paddingBottom: "10vh"}}>
    <Col md={8}>
      <h1 className="about-heading">
        Main Skills
      </h1>
      <Row style={{textAlign: "left"}}>
        <SkillBar 
          title="Software Development"
          percentage="95%"
        />
      </Row>

      <Row style={{textAlign: "left"}}>
        <SkillBar 
          title="Data Analysis and Visualization"
          percentage="80%"
        />
      </Row>

      <Row style={{textAlign: "left"}}>
        <SkillBar 
          title="Web Development"
          percentage="75%"
        />
      </Row>
  </Col>
  <Col md={4}>
      <h1 className="about-heading">
        Secondary Skills
      </h1>

      <Row style={{textAlign: "left"}}>
        <SkillBar 
          title="Hardware Development"
          percentage="100%"
        />
      </Row>

      <Row style={{textAlign: "left"}}>
        <SkillBar 
          title="Mobile Development"
          percentage="60%"
        />
      </Row>

      <Row style={{textAlign: "left"}}>
        <SkillBar 
          title="Git/Github and DevOps"
          percentage="30%"
        />
      </Row>
    </Col>
  </Row>
  );
}

export default Skills;
