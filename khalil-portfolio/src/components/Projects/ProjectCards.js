import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Row } from "react-bootstrap";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{paddingBottom: "0.5em", minHeight: props.needsNewLine? "3em" : "2em"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left", fontSize: "0.9em", minHeight: props.needsNewLine? "10em" : "8em"}}>
          <p>
          {props.description}
          </p>
          
        </Card.Text>
        
        <div>
          <Button style={{position: "relative"}} variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            GitHub
          </Button>
          {"\n"}
          {"\n"}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {props.hasDevpost ? "Devpost" : "Demo"}
            </Button>
          )}

        </div>
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
