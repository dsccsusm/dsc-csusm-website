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
    </div>
  );
}
