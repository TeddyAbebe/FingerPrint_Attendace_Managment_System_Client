import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Dashboard from "./Pages/Dashboard";
import EmployeeList from "./Pages/EmployeeList";
import AttendanceList from "./Pages/AttendanceList";
import AttendanceReport from "./Pages/AttendanceReport";
import EmployeeProfile from "./Pages/EmployeeProfile";
import { useState } from "react";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="flex">
          <Nav />
          <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/employees"
              element={<EmployeeList setSearch={setSearch} search={search} />}
            />
            <Route path="/employees/:id" element={<EmployeeProfile />} />
            <Route path="/attendance" element={<AttendanceList />} />
            <Route path="/report" element={<AttendanceReport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
