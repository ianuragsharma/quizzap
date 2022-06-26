import React from "react";
import "./auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
import { useAuth } from "../../context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  useDocumentTitle("Login");
  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const guestLoginHandler = () => {
    setEmail("anuragsharma0711@gmail.com");
    setPassword("anurag123");
  };

  return (
    <div>
      <form className="auth-container" onSubmit={loginHandler}>
        <h4 className="text-center">Login</h4>
        <div className="user-details flex-column">
          <label htmlFor="email" className="input-label text-base">
            Email:
          </label>
          <input
            name="email"
            type="email"
            className="input-area text-base"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="input-label text-base">
            Password:
          </label>
          <input
            name="password"
            type="password"
            className="input-area text-base"
            required
            minLength="6"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span class=" error-msg text-sm">{error}</span>}

          <button className="btn btn-solid-primary text-base text-white">
            Login
          </button>
          <button
            className="btn btn-outlined-secondary text-base"
            onClick={guestLoginHandler}
          >
            Login as guest user
          </button>
          <button className="link-btn text-base ">
            <Link to="/signup">
              Create Account <i className="fa-solid fa-angle-right"></i>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export { Login };
