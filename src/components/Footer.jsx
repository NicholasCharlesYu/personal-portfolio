import { Container, Row, Col } from "react-bootstrap";
import linkedInIcon from "../assets/img/linkedIn-icon.svg";
import gitHubIcon from "../assets/img/github-icon.svg";
import instagramIcon from "../assets/img/instagram-icon.svg";

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
                            <a href="https://www.linkedin.com/in/nick-yu08/" target="_blank"><img src={linkedInIcon} alt="LinkedIn Link" /></a>
                            <a href="https://github.com/NicholasCharlesYu" target="_blank"><img src={gitHubIcon} alt="GitHub Link" /></a>
                            <p className="footer-email">Gmail: ncyu@usc.edu <br />Copyright 2024. All Rights Reserved.</p>
                        </div>
                   </Col>
                </Row>
            </Container>
        </footer>
    );
}