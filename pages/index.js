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
          <Col className="align-self-center">
            <p className="h3"><strong>Developer Student Club @ CSUSM</strong></p>
            <p className="mt-3">Developer Student Clubs is a <Google/> Developers program for university students 
              to learn mobile and web development skills, design thinking skills and leadership 
              skills.</p>
            <Button variant="primary">Apply to be a member</Button>
          </Col>
          <Col>
          <img src="/diversity.png" height="auto" width="512"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
