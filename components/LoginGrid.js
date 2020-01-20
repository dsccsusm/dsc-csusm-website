import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoginForm from "../components/LoginForm";

const LoginGrid = () => {
  return (
    <Container className="center-container">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} md={10} lg={6}>
            <LoginForm></LoginForm>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LoginGrid;
