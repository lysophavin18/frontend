import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <Container fluid>
        <Row className="row">
          <div className="col-1 text-center">
            {new Date().getFullYear()} © Ere - Theme by{" "}
            <b>Team ITE Development</b>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
