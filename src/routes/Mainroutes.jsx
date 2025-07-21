import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Post from "../pages/Post";
import Pagenotfound from "../pages/Pagenotfound";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const Mainroutes = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={user ? <Profile/> : <Login />} />
        <Route path="/*" element={<Pagenotfound />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Mainroutes;