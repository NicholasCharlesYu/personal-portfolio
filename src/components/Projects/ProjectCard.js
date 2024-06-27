import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgURL} />
        <div className="proj-txt">
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
