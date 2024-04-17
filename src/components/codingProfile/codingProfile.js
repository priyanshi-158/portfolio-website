import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import gfg from "../../Assets/gfg.png";
import Leetcode from "../../Assets/leetcode.png";

import "./codingProfiles.css";
import Cards from "./Cards";

function CodingProfile() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My  <strong className="Fluorescent-Blue">Coding Profiles </strong>
        </h1>
        <p>Platforms where I craft the code with clarity and creativity</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <Cards
              imgPath={Leetcode}
              title="Leetcode"
              description="Solved 600+ questions on leetcode which has enhanced my problem solving skills and helped me improve upon data structures,algorithms, databases and other programming concepts. I consistently practice questions on this platform to improve my coding skills"
              ghLink="https://leetcode.com/priyanshi_158/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <Cards
              imgPath={gfg}
              title="Geeks For Geeks"
              description="Solved more than 500 questions on this platform to upskill myself with various topics of data structures. With wide variety of problems available I have been able to consistently practice and perform better in various coding contests."
              ghLink="https://www.geeksforgeeks.org/user/priyanshidhanuka9/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default CodingProfile;
