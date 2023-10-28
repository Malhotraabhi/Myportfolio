import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl,linkurl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        
        <div className="proj-txtx">
        <a href={linkurl}><h4>{title}</h4></a>
          <span>{description}</span>
          
        </div>
      </div>
    </Col>
  )
}
