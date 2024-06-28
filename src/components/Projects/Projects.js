import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import stockAppImg from "../../assets/img/projects/stock-trading-img.webp";
import movieAppImg from "../../assets/img/projects/movie-website-img.webp";
import porfolioSiteImg from "../../assets/img/projects/portfolio-img.webp";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Stock Trading Web App",
      description:
        "Full-stack web application written in JavaScript and Java, utilizing MySQL for the database. Retrieves live stock market data using APIs, and includes user-specific portfolio to manage and track their investments effectively.",
      imgURL: stockAppImg,
      link: "#",
    },
    {
      title: "Movie Review Web App",
      description:
        "Collaborated on full-stack web application that allows users to search, review, and rate movies, storing unique information in a database. Integrated git version control and utilized agile development methodologies to ensure project completion.",
      imgURL: movieAppImg,
      link: "https://github.com/anchals7/csci201_finalProj_filmQuest_v2",
    },
    {
      title: "Portfolio Website",
      description:
        "Welcome to my personal portfolio, a dynamic and responsive web application that showcases my projects, skills, and experiences. Meticulously crafted using React, Bootstrap, and Animate.css.",
      imgURL: porfolioSiteImg,
      link: "#",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              A couple of cool things/ideas I've been working on
            </p>
            {/* <TabContainer id="project-tabs" defaultActiveKey="first"> */}
            {/* <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav> */}
            {/* <TabContent>
                <TabPane eventKey="first"> */}
            <Row>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project}></ProjectCard>
              ))}
            </Row>
            {/* </TabPane> */}
            {/* <TabPane eventKey="second">Lorem Ipsum</TabPane> */}
            {/* <TabPane eventKey="third">Lorem Ipsum</TabPane> */}
            {/* </TabContent> */}
            {/* </TabContainer> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
