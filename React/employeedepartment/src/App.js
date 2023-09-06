import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Employees from "./pages/Employees";
import MainNavigation from "./components/MainNavigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation></MainNavigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/Employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
