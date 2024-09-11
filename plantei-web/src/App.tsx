import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "@Components/Footer/Footer";
import Home from "@Pages/Home/Home";
import Error from "@Pages/Error/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;