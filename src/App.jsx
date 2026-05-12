// src/App.jsx
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease",
      once: true,
    });
  }, []);

  return <AppRoutes />;
}

export default App;