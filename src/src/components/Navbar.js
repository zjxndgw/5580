import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white" }}>首页</Link>
      <Link to="/launch" style={{ margin: "0 10px", color: "white" }}>发起项目</Link>
      <Link to="/login" style={{ margin: "0 10px", color: "white" }}>登录</Link>
      <Link to="/admin" style={{ margin: "0 10px", color: "white" }}>管理员</Link>
    </nav>
  );
}

export default Navbar;
