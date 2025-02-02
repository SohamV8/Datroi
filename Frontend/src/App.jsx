import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Business from "./Pages/Business";
import Blogs from "./Pages/Blogs";
import News from "./Pages/News";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import CSR from "./Pages/CSR";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/News" element={<News />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/CSR" element={<CSR />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
