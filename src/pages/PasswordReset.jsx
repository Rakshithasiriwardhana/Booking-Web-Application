import React, { useState } from "react";
import "./PasswordReset.css"; // Import CSS for styling

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      //  API endpoint for password reset
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to reset password.");
      }

      const data = await response.json();
      setMessage(data.message); // Server response message
      setError("");
    } catch (err) {
      setError("Failed to reset password. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="password-reset-container">
      <h2 className="text-center text-yellowColor" > Reset Your Password</h2>
      <form onSubmit={handleSubmit} className="password-reset-form">
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        <button type="submit" className="reset-button">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;
