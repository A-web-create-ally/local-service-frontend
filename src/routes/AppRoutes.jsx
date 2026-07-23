import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServicesDetails from "../pages/servicesDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Portfoliox from "../pages/protfoliox";
import Profile from "../pages/profile";
import Booking from "../pages/Booking";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/services" element={<ServicesDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Portfolio" element={<Portfoliox/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    
  );
};

export default AppRoutes;