import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "src/components/Projects/ProjectCards";
import qwandle from "src/assets/Projects/qwandle-3.jpg";
import myParking from "src/assets/Projects/my-parking-2.jpg";
import snake from "src/assets/Projects/snake-1.jpg";
import neurostim from "src/assets/Projects/neuro-stim-3.jpg";
import realEstateViz from "src/assets/Projects/real-estate-1.jpg";
import water from "src/assets/Projects/water-2.jpg";

function Projects() {
  return (
    <Container fluid>
      <Row className="project-title">
        <h1 className="project-heading">
          My Recent <strong className="orange">Work </strong>
        </h1>
        <p className="project-subtitle">
          Here are a few projects I've worked on recently.
        </p>
      </Row>

      <Row className="project-cards-row">
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={neurostim}
            hasDevpost={false}
            needsNewLine={true}
            title="Parkinson's Treatment Assistance Platform"
            description="A comprehensive platform consisting of a smartwatch application to monitor and measure patient trembling, a Python server hosting a machine learning model to suggest optimal electric pulse values for spinal cord stimulation and a tablet application that provides a user-friendly interface for doctors."
            ghLink="https://github.com/neurostim-hiv24/neurostim"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={realEstateViz}
            hasDevpost={false}
            needsNewLine={true}
            title="Interactive Real Estate Data Visualization for Quebec"
            description="A web platform built using React.js and the D3 library for the journal Le Devoir, featuring dynamic visualizations of various real estate statistics for the Quebec region, offering users an interactive and informative experience."
            ghLink="https://github.com/Alpyg/inf8808e-project"
            demoLink="https://inf8808e-project-team01.pages.dev"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={myParking}
            hasDevpost={true}
            needsNewLine={true}
            title="MyParking"
            description="Web application built using Angular to assist users find free parking spots in Montreal. Leveraging the Google Maps API and GeoTIFF data from public databases, the application will provide the nearest parking spots to the user's destination."
            ghLink="https://github.com/adam47/myParking"
            demoLink="https://devpost.com/software/my-parking"              
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={qwandle}
            hasDevpost={true}
            needsNewLine={false}
            title="Qwandle"
            description="puzzle game themed around quantum computing, entirely in Python using the Pygame library. In this game, users place quantum gates to achieve desired outputs. The project was developed during the McGill Physics Hackathon."
            ghLink="https://github.com/SaraBedd/physicHacks"
            demoLink="https://devpost.com/software/qwandle"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={snake}
            hasDevpost={false}
            needsNewLine={false}
            title="Snake"
            description="Clone of Snake using Angular. This project helped me understand canvas rendering and game development fundamentals within the Angular framework."
            ghLink="https://github.com/khbed/snake"
            demoLink="https://snake-4246c.web.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={water}
            hasDevpost={true}
            needsNewLine={false}
            title="Water"
            description="Fun web application that tracks daily water intake. It was built in React for the PolyHacks 2023 hackathon. Emphasizing animations and overall graphic design, the app provides an engaging and visually appealing way for users to monitor their hydration habits."
            ghLink="https://github.com/quentinguidee/water"
            demoLink="https://devpost.com/software/water-p39rfa" 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
