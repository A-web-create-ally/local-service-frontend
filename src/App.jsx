// src/App.jsx
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease",
      once: true,
    });
  }, []);

return (
  <>
    <AppRoutes />
    <ToastContainer
      position="top-right"
      autoClose={4000}
      theme="colored"
    />
  </>
);

}

export default App;