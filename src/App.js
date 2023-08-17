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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <Router>
      <div className="App">
        <Header
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <div className="flex">
          {isAuthenticated ? (
            <>
              <Nav />
              <Routes>
                {/* Your Routes for authenticated users */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/employees"
                  element={
                    <EmployeeList setSearch={setSearch} search={search} />
                  }
                />
                <Route path="/employees/:id" element={<EmployeeProfile />} />
                <Route path="/attendance" element={<AttendanceList />} />
                <Route path="/report" element={<AttendanceReport />} />
              </Routes>
            </>
          ) : (
            <LandingPage setIsAuthenticated={setIsAuthenticated} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
