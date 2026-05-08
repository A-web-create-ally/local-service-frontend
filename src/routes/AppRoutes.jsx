import { Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import LogIn from "../pages/logIn";
import ServicesDetails from "../pages/servicesDetails";
import Contact  from "../pages/Contact";
// import About from "../pages/About";
// import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/services" element={<ServicesDetails/>} />
      <Route path="/Contact" element={<Contact />} />

      {/* future pages */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;
