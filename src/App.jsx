import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation time (ms)
      offset: 100,    // scroll offset
      easing: "ease", // easing type
      once: true,     // sirf ek baar animation
    });
  }, []);


  return <AppRoutes />;
}

export default App;
