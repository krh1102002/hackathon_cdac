import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBlogs from "./pages/MyBlogs";
import AllBlogs from "./pages/AllBlogs";
import Category from "./pages/Category";
import { ToastContainer } from "react-toastify";
import Container from "./components/Container";

// create a context for auth info
export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="container" element={user ? <Container /> : <Login />}>
            <Route path="my_blogs" element={<MyBlogs />} />
            <Route path="all_blogs" element={<AllBlogs />} />
            <Route path="categories" element={<Category />} />
          </Route>
        </Routes>
        <ToastContainer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
