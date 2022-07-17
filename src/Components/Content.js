import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Experience, Photography, Projects } from "../Pages";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Content;
