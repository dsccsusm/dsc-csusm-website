import Navbar from "../components/Nav";

import Container from "react-bootstrap/Container";

import "../styles/style.scss";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Container>
        <p className="example">Hello Next.js</p>
      </Container>
    </div>
  );
}
