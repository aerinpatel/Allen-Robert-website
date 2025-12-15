import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import NGO from "./pages/NGO";
import React from "react";
import Blogs from "./pages/blogs";
import Journey from "./pages/Journey";
import NotFound from './pages/NotFound';
import Layout from "./components/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>

        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}


export default App
