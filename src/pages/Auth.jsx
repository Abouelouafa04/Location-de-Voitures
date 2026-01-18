import { useState } from "react";
import AuthTabs from "../components/AuthTabs";
import "./Auth.css";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="auth-container">
      <div className="auth-card">
        <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "signin" && (
          <>
            <h2>Welcome Back</h2>

            <form className="auth-form">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>

              <div className="form-options">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#">Forgot password?</a>
              </div>

              <button className="btn-primary">Sign In</button>
            </form>
          </>
        )}

        {activeTab === "signup" && (
          <>
            <h2>Create Account</h2>

            <form className="auth-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>

             <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              

              <button className="btn-primary">Sign Up</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
