import React, { useState } from "react";
import { createProject } from "../blockchain";

function Launch() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProject(name, desc);
    alert("项目已提交到区块链！");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>发起项目</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="项目名称"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          placeholder="项目描述"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default Launch;
