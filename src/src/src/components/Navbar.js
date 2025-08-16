import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#0f172a", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>首页</Link>
      <Link to="/launch" style={{ margin: "0 10px", color: "#fff" }}>发起项目</Link>
      <Link to="/ranking" style={{ margin: "0 10px", color: "#fff" }}>排行榜</Link>
      <Link to="/admin" style={{ margin: "0 10px", color: "#fff" }}>管理员</Link>
    </nav>
  );
}

export default Navbar;
