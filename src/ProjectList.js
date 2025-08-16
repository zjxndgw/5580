import React from "react";

function ProjectList({ projects, updateLocalFunds, userWords }) {

  const handlePayRandom = () => {
    if (projects.length < 2) { alert("至少2个项目才能付款"); return; }
    const idx1 = Math.floor(Math.random() * projects.length);
    let idx2; do { idx2 = Math.floor(Math.random() * projects.length); } while (idx2 === idx1);
    updateLocalFunds(idx1, 200);
    updateLocalFunds(idx2, 200);
    alert(`付款成功! 每个项目200`);
  };

  return (
    <div>
      <h2>项目列表</h2>
      {projects.map(p => (
        <div key={p.index} style={{
          border: "1px solid #ccc", marginBottom:"10px", padding:"10px",
          backgroundColor: p.creator === (userWords?.join("-")) ? "#e0ffe0" : "#fff"
        }}>
          <p>{p.index} - {p.name}</p>
          <p>发起人: {p.creator}</p>
          <p>筹款: {p.fundedAmount} / {p.totalAmount}</p>
          <p>优先收款: {p.priority ? "是" : "否"}</p>
        </div>
      ))}
      {projects.length >=2 && <button onClick={handlePayRandom}>付款给两个随机项目</button>}
    </div>
  );
}

export default ProjectList;