import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                   <Col sm={12} md={6} className="footer-name-wrapper">
                    <p className="footer-title">Nicholas Yu</p>
                   </Col>
                   <Col sm={12} md={6} className="text-center text-sm-end footer-social-wrapper">
                   <div className="social-icon">
                            <a href="https://www.linkedin.com/in/nick-yu08/" target="_blank"><img src={navIcon1} alt="LinkedIn Link" /></a>
                            <a href="https://github.com/NicholasCharlesYu" target="_blank"><img src={navIcon2} alt="GitHub Link" /></a>
                            <a href="https://www.instagram.com/nick_yu10/" target="_blank"><img src={navIcon3} alt="Instagram Link" /></a>
                        </div>
                        <p className="footer-copyright">Copyright 2024. All Rights Reserved.</p>
                   </Col>
                </Row>
            </Container>
        </footer>
    );
}