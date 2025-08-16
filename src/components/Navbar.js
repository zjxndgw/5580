// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="text-xl font-bold">人人互助共享明天未来</div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-yellow-400">
          首页 / Home
        </Link>
        <Link to="/launch" className="hover:text-yellow-400">
          发起众筹 / Launch
        </Link>
        <Link to="/projects" className="hover:text-yellow-400">
          项目列表 / Projects
        </Link>
        <Link to="/ranking" className="hover:text-yellow-400">
          排行榜 / Ranking
        </Link>
        <Link to="/admin" className="hover:text-yellow-400">
          管理员审核 / Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
