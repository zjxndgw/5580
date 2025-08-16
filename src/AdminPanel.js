import React, { useState } from "react";
import { updateProject } from "./blockchain";

function AdminPanel({ projects, loadProjects }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newCreator, setNewCreator] = useState("");
  const [priority, setPriority] = useState(false);

  const handleUpdate = async () => {
    try {
      await updateProject(parseInt(selectedIndex), newCreator, priority);
      alert("修改成功");
      setNewCreator(""); setPriority(false);
      await loadProjects();
    } catch(e) {
      console.error(e); alert("修改失败");
    }
  };

  return (
    <div style={{marginTop:"20px", border:"1px solid red", padding:"10px"}}>
      <h3>管理员面板</h3>
      <select value={selectedIndex} onChange={e=>setSelectedIndex(e.target.value)}>
        {projects.map(p=> <option key={p.index} value={p.index}>{p.index} - {p.name}</option>)}
      </select><br/>
      <input placeholder="新发起人12单词" value={newCreator} onChange={e=>setNewCreator(e.target.value)} />
      <label>
        <input type="checkbox" checked={priority} onChange={e=>setPriority(e.target.checked)} /> 优先收款
      </label><br/>
      <button onClick={handleUpdate}>修改</button>
    </div>
  );
}

export default AdminPanel;