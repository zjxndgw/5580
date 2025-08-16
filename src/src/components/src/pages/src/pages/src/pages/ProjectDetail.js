import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>项目详情 #{id}</h2>
      <p>这里展示项目的详细信息（从区块链读取）。</p>
    </div>
  );
}

export default ProjectDetail;
