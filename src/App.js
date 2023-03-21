import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About-Page/About";
import Home from "./pages/Home-Page/Home";
import ProductDetail from "./pages/ProductDetail-Page/ProductDetail";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
