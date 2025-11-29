import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) navigate("/communityform", { replace: true });
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      setMsg("Login Successful!");
      setTimeout(() => navigate("/communityform", { replace: true }), 500);
    } else {
      setMsg("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg p-8 rounded-lg w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {msg && <p className="text-center text-red-500">{msg}</p>}

        <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded mb-3"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded mb-4"
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
