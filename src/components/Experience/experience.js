import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import crackdsa from "../../Assets/crackdsa_logo.jpg";
import morff_logo from "../../Assets/morff_logo.jpg";

import "./experience.css";
import ExperienceCards from "./experienceCard";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
        Unpacking My  <strong className="Fluorescent-Blue">Experiences </strong>
        </h1>
        <p>From classroom to corporation: a journey in learning.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ExperienceCards
              imgPath={morff_logo}
              title="MORFF-PRELKO PRIVATE LIMITED"
              description="I worked on various features such as Proposal Tracking, Status and Deliverables Tab, which helped clients track their proposals easily as a frontend developer intern in the company. I also helped in improving efficiency of the website by fixing bugs and gaining insights from the users"
              ghLink="https://drive.google.com/file/d/1rY38VX2xihBCq7QfnKZODkKxpqM1ec2V/view"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ExperienceCards
              imgPath={crackdsa}
              title="CrackDSA"
              description="I, along with my other teammates designed And developed Job Search crackDSA during my internship at CrackDSA, which significantly helped users to search for new
opportunities. I also worked on building an Admin Page to ease the uploading of new job opportunities."
              ghLink="https://drive.google.com/file/d/1854kXmBF48U5fqYYE7SmF_EWsPPLrVay/view"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Experience;
