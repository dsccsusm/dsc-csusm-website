import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Link from "next/link";

const LoginForm = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <h3 className="text-center">Welcome back!</h3>
          <h5 className="text-center mb-4 text-muted">
            We're so excited to see you again!
          </h5>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
            <Link href="/">
              <a>
                <Form.Text>Forgot your password?</Form.Text>
              </a>
            </Link>
          </Form.Group>
          <Button className="login-btn">Login</Button>
          <Form.Text>
            Need an account?{" "}
            <Link href="/">
              <a>Register</a>
            </Link>
          </Form.Text>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
