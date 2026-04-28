import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./hero";

const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 yahan future me API / auth logic aayega
    console.log(email, password);

    // login ke baad home bhej do
    navigate("/");
  };

  return (
    <>
    <Header/>
    <Hero/>
    <div className="login-wrapper">
      <h2>Login</h2>
     
      
     
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
      
    </div>
    <Footer/>
    </>
  );
};

export default LogIn;
