import React, { useEffect, useState } from "react";
import { getProjects } from "../blockchain";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getProjects();
      setProjects(data);
    }
    load();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>项目列表</h2>
      {projects.length === 0 && <p>暂无项目</p>}
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  );
}

export default Home;
