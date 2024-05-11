// routers/Router.js

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import AddStudent from "../pages/AddStudent";
import StudentScores from "../components/Student-Score/StudentScore"; // Corrected import name

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addstudent" element={<AddStudent />} />
      <Route path="/studentscore" element={<StudentScores />} />
    </Routes>
  );
};

export default Routers;
