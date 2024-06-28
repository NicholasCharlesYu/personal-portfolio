import { Col, Container, Row } from "react-bootstrap";
import python from "../../assets/img/tech/python.png";
import cpp from "../../assets/img/tech/cpp.png";
import java from "../../assets/img/tech/java.png";
import html from "../../assets/img/tech/html.png";
import css from "../../assets/img/tech/css.png";
import javascript from "../../assets/img/tech/javascript.png";
import typescript from "../../assets/img/tech/typescript.png";
import sql from "../../assets/img/tech/sql.png";
import reactjs from "../../assets/img/tech/reactjs.png";
import git from "../../assets/img/tech/git.png";
import bootstrap from "../../assets/img/tech/bootstrap.png";
import scikitlearn from "../../assets/img/tech/scikit-learn.png";
import mysql from "../../assets/img/tech/mysql.png";
import pytorch from "../../assets/img/tech/pytorch.png";
import figma from "../../assets/img/tech/figma.png";
import "./Skills.css";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const languages = [
    { title: "Python", icon: python },
    { title: "C++", icon: cpp },
    { title: "Java", icon: java },
    { title: "HTML", icon: html },
    { title: "CSS", icon: css },
    { title: "Javascript", icon: javascript },
    { title: "TypeScript", icon: typescript },
    { title: "SQL", icon: sql },
  ];

  const frameworks = [
    { title: "React", icon: reactjs, invert: false },
    { title: "Bootstrap", icon: bootstrap, invert: false },
    { title: "Git", icon: git, invert: false },
    { title: "Scikit-learn", icon: scikitlearn},
    { title: "MySQL", icon: mysql},
    { title: "PyTorch", icon: pytorch},
    { title: "Figma", icon: figma}
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>My Skills</h2>
              <h3>Technical Languages</h3>
              <div className="grid-container skill-icons">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="sphere mud-gradient flex items-center justify-center rounded-circle p-4"
                  >
                    <img
                      title={language.title}
                      src={language.icon}
                      alt={language.title}
                      className="hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain"
                    />
                  </div>
                ))}
              </div>
              <h3>Technologies & Frameworks</h3>
              <div className="grid-container skill-icons">
                {frameworks.map((frameworks, index) => (
                  <div
                    key={index}
                    className="sphere mud-gradient flex items-center justify-center rounded-circle p-4"
                  >
                    <img
                      title={frameworks.title}
                      src={frameworks.icon}
                      alt={frameworks.title}
                      className="hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
