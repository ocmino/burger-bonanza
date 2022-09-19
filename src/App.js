import Ingredients from "./Pages/Ingredients";
import Step_One from "./Pages/Step_One";
import Welcome from "./Pages/Welcome";
import Footer from "./Components/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/step_one" element={<Step_One />} />

    </Routes>
  
   <Footer />
    </Router>
  );
}

export default App;

