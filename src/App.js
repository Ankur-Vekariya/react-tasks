
import logo from "./logo.svg";
import "./App.css";
import Employee from "./components/Employee";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("employee");
    data = data ? JSON.parse(data) : [];
    setEmployee(data);
  }, []);

  return (
    <div className="App">
      <button onClick={() => navigate("/edit-employee")}>Add</button>
      <Employee employee={employee} />
    </div>
  );
}

export default App;
