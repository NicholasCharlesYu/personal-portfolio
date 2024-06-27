import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import linkedInIcon from "../../assets/img/linkedIn-icon.svg";
import gitHubIcon from "../../assets/img/github-icon.svg";
import instagramIcon from "../../assets/img/instagram-icon.svg";
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActivelink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nick-yu08/" target="_blank">
                <img src={linkedInIcon} alt="LinkedIn Link" />
              </a>
              <a href="https://github.com/NicholasCharlesYu" target="_blank">
                <img src={gitHubIcon} alt="GitHub Link" />
              </a>
              <a href="https://www.instagram.com/nick_yu10/" target="_blank">
                <img src={instagramIcon} alt="Instagram Link" />
              </a>
            </div>
            <a
              href="#connect"
              className="navbtn"
              onClick={() => onUpdateActivelink("connect")}
              style={{ textDecoration: "none", color: "white" }}
            >
              <span>Let's Connect!</span>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
