import React from "react";

import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "react-bootstrap";
import resume from "../../Assets/Priyanshi Dhanuka_Resume.pdf"
import { FaCloudDownloadAlt } from "react-icons/fa";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Priyanshi Dhanuka</span> from Varanasi, Uttar Pradesh, India. I am currently pursuing B.Tech in computer science and engineering discipline from Harcourt Butler Technical University,Kanpur.
            <br />
            <br />
            I exhibit some exceptional soft skills.  I am known for my tireless work ethic and dedication, consistently striving to exceed expectations and deliver exceptional results.With a keen problem-solving mindset, I tackle obstacles with creativity and resilience, navigating complexities with ease. Moreover, my flexibility allows me to seamlessly adjust to changing priorities.
            Along with these I too possess a robust array of technical skills such as 
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> ProficieT in C and C++ language
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Skilled in Web Development
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Mastered Computer Science Fundamentals such as DBMS, OOPs etc.
            </li>
          </ul>
        </blockquote>
        <Button variant="primary" href={resume} target="_blank">
        <FaCloudDownloadAlt /> &nbsp;
          Download Resume
        </Button>
      </Card.Body>
     
    </Card>
  );
}

export default AboutCard;
