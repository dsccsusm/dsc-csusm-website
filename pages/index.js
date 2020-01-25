import Navbar from "../components/Nav";
import Google from "../components/Google.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import "../styles/index.scss";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col sm={true} className="align-self-center">
            <p className="h3"><strong>Developer Student Club @ CSUSM</strong></p>
            <p className="mt-5 grey lead">Developer Student Clubs is a <Google/> Developers program for university students
              to learn <span className="yellow">mobile</span> and
              <span className="blue"> web development</span> skills,
              <span className="red"> design thinking skills</span> and
              <span className="green"> leadership skills</span>.</p>

            <div id="button-center">
              <Button variant="primary">Apply to be a member</Button>
            </div>
          </Col>
          <Col sm={true} className="align-self-center">
          <img className="img-fluid" id="image-illustration" src="/diversity.png"/>
          </Col>
        </Row>
      </Container>
      <Container className = "mt-5" >
        <Row className = "section-header text-center">
          <Col className="section-title">
            <h3><strong>Technologies We're Excited About</strong></h3>
            <p className="section-subtitle" className = "grey"> Opportunities to learn & access deep technical content.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="align-self-center">
            <img className="img-fluid p-5" src="/android.png"/>
          </Col>
          <Col className="align-self-center">
            <p className="h3"><strong>Android Development</strong></p>
            <p className ="mt-5 grey lead">
              Every year Google developers release exciting new
              updates to the world's most popular operating system.
              We always have sessions to keep you updated and
              mastering the latest trends in modern Android
              development.
            </p>
            <Button variant="primary">Codelabs</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className = "justify-content-center">
          <Col className="align-self-center">
             <h3><strong>Web Development</strong></h3>
             <p className = "mt-5 grey lead">
              Learn the core foundations of a delightful web experience both for the
              user and developer. Stay up to tabs with emerging and trending
              technologies. Get access to a guided, tutorial and hands-on coding
              experience.

             </p>
             <Button variant="primary">Codelabs</Button>
          </Col>
          <Col className="align-self-center" >
            <img className="img-fluid p-5" src="/web.png"/>
          </Col>


        </Row>
      </Container>

    </div>

  );
}
