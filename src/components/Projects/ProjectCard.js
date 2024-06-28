import { Col } from "react-bootstrap";
import "./Projects.css";

export const ProjectCard = ({ title, description, imgURL, link }) => {
  const style = {
    "--description-content": `"${description}"`, // Note the quotes around the variable value
  };

  return (
    <Col sm={6} md={4}>
      <a href={link} target="_blank" rel="noreferrer" className="links">
        <div className="proj-imgbx" style={style}>
          <img src={imgURL} />
          <div className="proj-txt">
            <span className="proj-title">{title}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
