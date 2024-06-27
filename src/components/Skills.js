import { Col, Container, Row } from "react-bootstrap";
import python from "../assets/img/tech/python.png";
import cpp from "../assets/img/tech/cpp.png";
import c from "../assets/img/tech/c.png";
import java from "../assets/img/tech/java.png";
import html from "../assets/img/tech/html.png";
import css from "../assets/img/tech/css.png";
import javascript from "../assets/img/tech/javascript.png";
import typescript from "../assets/img/tech/typescript.png";
import sql from "../assets/img/tech/sql.png";

import "./Skills.css";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

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
    { title: "Python", icon: python, invert: false },
    // {title: 'C++', icon: cpp, invert: false },
    // {title: 'C', icon: c, invert: false },
    // {title: 'Java', icon: java, invert: false },
    { title: "HTML", icon: html, invert: false },
    { title: "CSS", icon: css, invert: false },
    { title: "Javascript", icon: javascript, invert: false },
    { title: "TypeScript", icon: typescript, invert: false },
    { title: "SQL", icon: sql, invert: true },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <div className='grid-container skill-icons'>
                {languages.map((language, index) => (
                    <div key={index} className="sphere mud-gradient flex items-center justify-center rounded-circle p-4">
                        <img title={language.title} src={language.icon} alt={language.title} className="hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain" />
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
