import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import cryptosite from "../../Assets/cryptosite.png";
import Portfolio from "../../Assets/portfolio.png";
import Pizzerita from "../../Assets/pizzerita.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="Fluorescent-Blue">Project Gallery </strong>
        </h1>
        <p>Coding with passion, deploying with purpose.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Pizzerita}
              title="Pizzarita-Food Ordering Website"
              description="A web-based project that enables users to order their all-time favorite pizzas and explore all varieties
present. This project uses ReactJS to render all the data coming from the backend to the screen and make the website
user-friendly. The Redux Toolkit allows the smooth functioning of the cart page of the website. ExpressJS provides authentication, and Mongo DB is used to store the data of the users and the products."
              ghLink="https://github.com/priyanshi-158/pizza_ordersite"
              demoLink="https://pizza-ordersite.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="A sleek and dynamic portfolio website crafted with React.js and React Bootstrap, seamlessly blending modern aesthetics with robust functionality. Whether showcasing design projects, coding endeavors, or creative ventures, this portfolio website stands out with its minimalist yet impactful design, inviting visitors to explore and engage."
              ghLink="https://github.com/priyanshi-158/Portfolio-Website"
              demoLink="#"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={cryptosite}
              title="CryptoSite"
              description="A website that gives and updates it's users with the latest crypto stats to manage their cryptocurrecy portfolio. It also shows the latest and trending cryptocurrency news across the globe. The usage of React Javascript library makes it fast, efficient and user-friendly. The RapidAPI provides all the data and current news displayed on the site. For the styling of the web application Tailwind CSS proved to be of great help."
              ghLink="https://github.com/priyanshi-158/Cryptosite"
              demoLink="https://cryptosite-gamma.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
