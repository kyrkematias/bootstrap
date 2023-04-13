import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "././assets/img/logo.svg";
import navicon1 from "./assets/img/nav-icon1.svg";
import navicon2 from "./assets/img/nav-icon2.svg";
import navicon3 from "./assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Corporative logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="linkedin.com">
                <img src={navicon1} alt="social icons"></img>
              </a>
              <a href="facebook.com">
                <img src={navicon2} alt="social icons"></img>
              </a>
              <a href="instagram.com">
                <img src={navicon3} alt="social icons"></img>
              </a>
            </div>
            <p>Copyright 2023. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
