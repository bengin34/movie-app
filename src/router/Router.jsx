import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { useContext} from "react";
import { auth } from "../auth/firebase-config";
import { UserContext } from "../context/AuthContext";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const { user, setUser } = useContext(UserContext);
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser?.email));
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PrivateRouter user={user} /> }>
          <Route path="" element={<MovieDetail />} />
        </Route>

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
