import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import LaunchProject from "../components/LaunchProject";
import AdminPanel from "../components/AdminPanel";
import { loadProjectsFromChain } from "./blockchain";

function Home() {
  const [userWords, setUserWords] = useState(() => JSON.parse(localStorage.getItem("user12Words")) || null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleRegister = () => {
    if (!userWords) {
      const words = Array.from({ length: 12 }, () => Math.random().toString(36).substring(2,6));
      setUserWords(words);
      localStorage.setItem("user12Words", JSON.stringify(words));
      alert("注册成功! 你的12个单词: " + words.join(" "));
    } else {
      alert("已注册");
    }
  };

  const ADMIN_WORDS = ["submit","bounce","swift","ski","lumber","undo","never","party","series","grab","leave","anchor"];
  const handleAdminLogin = (inputWords) => {
    if(inputWords.join(" ") === ADMIN_WORDS.join(" ")) {
      setIsAdmin(true);
      alert("管理员登录成功");
    } else {
      alert("管理员密码错误");
    }
  };

  const updateLocalFunds = (projIndex, amount) => {
    const newProjects = [...projects];
    newProjects[projIndex].fundedAmount += amount;
    setProjects(newProjects);
    const localFunds = {};
    newProjects.forEach(p => localFunds[p.index] = p.fundedAmount);
    localStorage.setItem("projects_funds", JSON.stringify(localFunds));
  };

  const loadProjects = async () => {
    const projList = await loadProjectsFromChain();
    setProjects(projList);
  };

  useEffect(() => { loadProjects(); }, []);

  return (
    <div>
      <Header 
        isAdmin={isAdmin} 
        onAdminLogin={handleAdminLogin} 
        userWords={userWords} 
        onRegister={handleRegister} 
      />
      <div style={{display:"flex",padding:"20px"}}>
        <div style={{flex:2, marginRight:"20px"}}>
          <ProjectList projects={projects} updateLocalFunds={updateLocalFunds} userWords={userWords} />
        </div>
        <div style={{flex:1}}>
          <LaunchProject projects={projects} userWords={userWords} loadProjects={loadProjects} />
          {isAdmin && <AdminPanel projects={projects} loadProjects={loadProjects} />}
        </div>
      </div>
    </div>
  );
}

export default Home;