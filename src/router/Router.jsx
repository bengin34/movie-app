import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useContext, useState, useEffect } from "react";
import { auth } from "../auth/firebase-config";
import { UserContext } from "../context/AuthContext";

const Router = () => {
  const { user, setUser } = useContext(UserContext);
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser?.email));
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/moviedetail" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
