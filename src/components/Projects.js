import {
  Nav,
  Col,
  Container,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgURL: projImg1,
      link: "#",
    },
    {
      title: "Project 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgURL: projImg2,
      link: "#",
    },
    {
      title: "Project 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgURL: projImg3,
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.{" "}
            </p>
            <TabContainer id="project-tabs" defaultActiveKey="first">
              <Nav
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
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project}></ProjectCard>
                    ))}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">Lorem Ipsum</TabPane>
                <TabPane eventKey="third">Lorem Ipsum</TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
