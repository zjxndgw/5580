import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();
  return (
    <div style={{ padding: "20px" }}>
      <h2>项目详情 / Project {id}</h2>
      <p>这里显示项目的详细信息。</p>
    </div>
  );
}

export default ProjectDetail;
