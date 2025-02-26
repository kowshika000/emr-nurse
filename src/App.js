import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NurseDashboard from "./NurseDashboard/NurseDashboard";
// import NurseTabs from "./Nurse/Nurse";
import NurseModule from "./nursesheet/NurseModule";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NurseDashboard />} />
          <Route path="/nurse/:patientName" element={<NurseModule />} />
        </Routes>
      </div>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById("nurse-app"));
root.render(<App />);
export default App;
