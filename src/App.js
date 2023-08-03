import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Dashboard from "./Pages/Dashboard";
import EmployeeList from "./Pages/EmployeeList";
import AttendanceList from "./Pages/AttendanceList";
import AttendanceReport from "./Pages/AttendanceReport";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="flex">
          <Nav />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/attendance" element={<AttendanceList />} />
            <Route path="/report" element={<AttendanceReport />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
