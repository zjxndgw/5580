import React, { useState } from "react";
import { launchProject } from "./blockchain";

function LaunchProject({ loadProjects }) {
  const [name, setName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleLaunch = async () => {
    if(!name || !totalAmount || !qrCode){ alert("请完整填写"); return; }
    try {
      await launchProject(name, parseInt(totalAmount), qrCode);
      alert("发起项目成功，已写入链上");
      setName(""); setTotalAmount(""); setQrCode("");
      await loadProjects();
    } catch(e) {
      console.error(e);
      alert("发起失败");
    }
  };

  return (
    <div>
      <h2>发起项目</h2>
      <input placeholder="项目名称" value={name} onChange={e=>setName(e.target.value)} /><br/>
      <input placeholder="筹款总额" value={totalAmount} onChange={e=>setTotalAmount(e.target.value)} /><br/>
      <input placeholder="收款二维码/凭证" value={qrCode} onChange={e=>setQrCode(e.target.value)} /><br/>
      <button onClick={handleLaunch}>发起</button>
    </div>
  );
}

export default LaunchProject;