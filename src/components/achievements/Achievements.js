import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import laptopImg from "../../Assets/tcs.png";
import leetcode from "../../Assets/leetcode-knight.png";

import "./Achievements.css";

function Achievements() {
  return (
    <Container fluid className="achievements-section" id="achievements">
      <h1 style={{ padding: "10px 0px" }}>
        <span className="Fluorescent-Blue">Achieve</span>
        <span className="">ments</span>
      </h1>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em"}}>
              TCS CodeVita Season XI{" "}</h1>
              <p className="Fluorescent-Blue" style={{ fontSize: "1.1em"}}>Secured a global rank of 1108</p>
            
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }} className="sm-text">
              Securing the prestigious global rank of 1108 in <span className="purple">TCS CodeVita Season 11 </span> 
               stands as a testament to my dedication, problem-solving prowess, 
               and perseverance in the realm of competitive coding. 
               Through thorough preparation and strategic execution, 
               I navigated through challenging real world problem scenarios, tackling complex problems with precision. 
               This achievement not only reflects my technical aptitude but also underscores my ability to thrive in high-pressure environments. 
               It serves as a milestone in my journey, fueling my passion for continuous learning and pushing the boundaries of my capabilities in the dynamic landscape of computer science and programming competitions.
              </p>
            </blockquote>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }} className="large">
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={leetcode} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em" }}>
              Knight Badge{" "}
              <strong> @Leetcode </strong>
            </h1>
            <p className="Fluorescent-Blue" style={{ fontSize: "1.1em"}}>Achieved Knight Badge and solved 600+ problems</p>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }} className="sm-text">
                Since September 2023, I've embarked on an exhilarating journey of continuous 
                growth and improvement in the realm of data structures and algorithms. 
                With sheer determination and perseverance, I've successfully tackled over 
                <span className="purple"> 600 problems</span> on platforms like LeetCode, 
                honing my problem-solving skills with each challenge conquered. 
                Maintaining a remarkable <span className="purple">daily challenge completion streak of over 
                200 days</span> on LeetCode has been a testament to my commitment and discipline 
                in consistently sharpening my coding abilities. Alongside this impressive feat, 
                I've also earned recognition for my dedication and proficiency as a problem solver,
                 receiving <span className="purple">more than 10 badges including the Knight badge</span> for consistent 
                 practice. This journey has not only fortified my technical expertise but has also instilled in me a profound sense of accomplishment and readiness to take on even greater coding challenges in the future
              </p>
            </blockquote>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }} className="small ">
          
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em" }}>
              Knight Badge{" "}
              <strong> @Leetcode </strong>
            </h1>
            <p className="Fluorescent-Blue" style={{ fontSize: "1.1em"}}>Achieved Knight Badge and solved 600+ problems</p>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }} className="sm-text">
                Since September 2023, I've embarked on an exhilarating journey of continuous 
                growth and improvement in the realm of data structures and algorithms. 
                With sheer determination and perseverance, I've successfully tackled over 
                <span className="purple"> 600 problems</span> on platforms like LeetCode, 
                honing my problem-solving skills with each challenge conquered. 
                Maintaining a remarkable <span className="purple">daily challenge completion streak of over 
                200 days</span> on LeetCode has been a testament to my commitment and discipline 
                in consistently sharpening my coding abilities. Alongside this impressive feat, 
                I've also earned recognition for my dedication and proficiency as a problem solver,
                 receiving <span className="purple">more than 10 badges including the Knight badge</span> for consistent 
                 practice. This journey has not only fortified my technical expertise but has also instilled in me a profound sense of accomplishment and readiness to take on even greater coding challenges in the future
              </p>
            </blockquote>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={leetcode} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Achievements;
