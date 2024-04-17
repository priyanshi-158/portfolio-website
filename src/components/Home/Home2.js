import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.jpg";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
            A Peek Into <span className="primary-header"> My Journey </span>
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a highly skilled <i className="primary-header">
                 problem solver
              </i> with a strong passion in programming.
              <br />
              <br />I am passionate about learning new 
              <i className="primary-header">technologies</i> and love to upskill myself with new development tools and tech stacks.
              <br />
              <br />Alongside my academic pursuits, I've honed a diverse set of technical proficiencies. These include mastery in , 
                <i className="primary-header">data structures and algorithms.</i> along with expertise in frontend technologies like <i className="primary-header">HTML, CSS, JavaScript, and ReactJS</i> as well as backend technologies such as
                <i className="primary-header">ExpressJS, NodeJS, and Mongo-DB.</i>
              <br />
              <br />
              With my consistent efforts I successfully completed two internships as a frontend developer with corporations
              <i className="primary-header">Morff-Prelko Private Limited </i>and 
              <i className="primary-header">CrackDSA </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
