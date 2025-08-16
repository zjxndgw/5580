import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`}>查看详情</Link>
    </div>
  );
}

export default ProjectCard;
