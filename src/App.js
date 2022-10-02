
import Registration from "./components/Login/Signup";
import Footer from "./components/Navbar-Footer/Footer";
import "./components/home/home.css";
import "react-toastify/dist/ReactToastify.css";
import AboutUS from "./components/Navbar-Footer/AboutUS";
import { Home } from "./components/home/Home";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar-Footer/Navbar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import ExtraSignup from "./components/extra/ExtraSignup";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUS" element={<AboutUS />} />
        <Route path="login" element={<Registration />} />
        <Route path="" element={<Navigate to="home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
