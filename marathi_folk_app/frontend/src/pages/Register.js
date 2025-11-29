import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { register, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) navigate("/communityform", { replace: true });
  }, [isLoggedIn, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const success = await register(name, email, password);
    if (success) {
      setMsg("Registration Successful!");
      setTimeout(() => navigate("/login", { replace: true }), 800);
    } else {
      setMsg("Registration failed. Try another email.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg p-8 rounded-lg w-96" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {msg && <p className="text-center text-red-500">{msg}</p>}

        <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded mb-3"
          value={name} onChange={(e) => setName(e.target.value)} required />

        <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded mb-3"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded mb-4"
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
