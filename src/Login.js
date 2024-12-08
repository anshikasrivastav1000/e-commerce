import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Login to your account</p>

        <form className="login-form">
          <input
            type="email"
            className="login-input"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="login-input"
            placeholder="Enter your password"
          />
          <button className="login-button">Login</button>
        </form>

        <div className="login-footer">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="login-link">
              Sign Up
            </a>
          </p>
          <p>
            <a href="/forgot-password" className="login-link">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
