import Navbar from "../components/Nav";
import "../components/Google.js";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import "../styles/index.scss";
import Google from "../components/Google.js";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Container className="mt-5">
        <Row>
          <Col>
            <p className="h3"><strong>Developer Student Club @ CSUSM</strong></p>
            <p className="mt-3">Developer Student Clubs is a <Google/> Developers program for university students 
              to learn mobile and web development skills, design thinking skills and leadership 
              skills.</p>
            <Button variant="primary">Apply to be a member</Button>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
