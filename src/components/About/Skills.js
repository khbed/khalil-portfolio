import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillBar from "src/components/About/SkillBar";

function Skills() {
  return (
    <Row className="skills-section">
      <Col md={{span: 7, offset: 1}}>
        <h1 className="skills-heading">
          Main Skills
        </h1>

        <SkillBar title="Software Development" percentage="95%"/>
        <SkillBar title="Data Analysis and Visualization" percentage="80%"/>
        <SkillBar title="Web Development" percentage="75%"/>
      </Col>

      <Col md={3}>
        <h1 className="skills-heading">
          Secondary Skills
        </h1>

        <SkillBar title="Hardware Development" percentage="100%"/>
        <SkillBar title="Mobile Development" percentage="60%"/>
        <SkillBar title="Git/Github and DevOps" percentage="30%"/>
      </Col>
    </Row>  
  );
}

export default Skills;
