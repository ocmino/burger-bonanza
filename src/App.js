import Ingredients from "./Pages/Ingredients";
import StepOne from "./Pages/StepOne";
import StepTwo from "./Pages/StepTwo";
import StepThree from "./Pages/StepThree";
import StepFour from "./Pages/StepFour";
import LastPage from "./Pages/LastPage";
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
        <Route path="/step_one" element={<StepOne />} />
        <Route path="/step_two" element={<StepTwo />} />
        <Route path="/step_three" element={<StepThree />} />
        <Route path="/step_four" element={<StepFour />} />
        <Route path="/lastpage" element={<LastPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
