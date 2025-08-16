import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Launch from "./pages/Launch";
import ProjectDetail from "./pages/ProjectDetail";
import Ranking from "./pages/Ranking";
import AdminReview from "./pages/AdminReview";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/admin" element={<AdminReview />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
