import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Rental from "./pages/Rental";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Help from "./pages/Help";
import Sitemap from "./pages/Sitemap";
import Auth from "./pages/Auth";
import CarDetails from "./pages/CarDetails";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/help" element={<Help />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/carModel/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
