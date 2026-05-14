import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/logIn";
import ServicesDetails from "../pages/servicesDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";
const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/services" element={<ServicesDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
};

export default AppRoutes;