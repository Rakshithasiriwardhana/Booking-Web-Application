import React, { useState } from "react";
import "./Register.css"; 

const Register = () => {
  const [doctorData, setDoctorData] = useState({
    doctorName: "",
    doctorEmail: "",
    doctorPassword: ""
  });
  const [patientData, setPatientData] = useState({
    patientName: "",
    patientEmail: "",
    patientPassword: ""
  });
  const [errors, setErrors] = useState({});

  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handlePatientChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const validateDoctorForm = () => {
    const newErrors = {};
    if (!doctorData.doctorName.trim()) {
      newErrors.doctorName = "Doctor name is required";
    }
    if (!doctorData.doctorEmail.trim()) {
      newErrors.doctorEmail = "Doctor email is required";
    } else if (!/\S+@\S+\.\S+/.test(doctorData.doctorEmail)) {
      newErrors.doctorEmail = "Invalid email address";
    }
    if (!doctorData.doctorPassword.trim()) {
      newErrors.doctorPassword = "Password is required";
    } else if (doctorData.doctorPassword.length < 6) {
      newErrors.doctorPassword = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePatientForm = () => {
    const newErrors = {};
    if (!patientData.patientName.trim()) {
      newErrors.patientName = "Patient name is required";
    }
    if (!patientData.patientEmail.trim()) {
      newErrors.patientEmail = "Patient email is required";
    } else if (!/\S+@\S+\.\S+/.test(patientData.patientEmail)) {
      newErrors.patientEmail = "Invalid email address";
    }
    if (!patientData.patientPassword.trim()) {
      newErrors.patientPassword = "Password is required";
    } else if (patientData.patientPassword.length < 6) {
      newErrors.patientPassword = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDoctorSubmit = (e) => {
    e.preventDefault();
    if (validateDoctorForm()) {
  
      console.log("Doctor registration data:", doctorData);
      // Reset form data
      setDoctorData({
        doctorName: "",
        doctorEmail: "",
        doctorPassword: ""
      });
    }
  };

  const handlePatientSubmit = (e) => {
    e.preventDefault();
    if (validatePatientForm()) {
      
      console.log("Patient registration data:", patientData);
      
      setPatientData({
        patientName: "",
        patientEmail: "",
        patientPassword: ""
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register as Doctor</h2>
        <form onSubmit={handleDoctorSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="doctorName"
              value={doctorData.doctorName}
              onChange={handleDoctorChange}
            />
            {errors.doctorName && <p className="error">{errors.doctorName}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="doctorEmail"
              value={doctorData.doctorEmail}
              onChange={handleDoctorChange}
            />
            {errors.doctorEmail && <p className="error">{errors.doctorEmail}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="doctorPassword"
              value={doctorData.doctorPassword}
              onChange={handleDoctorChange}
            />
            {errors.doctorPassword && <p className="error">{errors.doctorPassword}</p>}
          </div>
          <button className="register-btn" type="submit">Register as Doctor</button>
        </form>
      </div>
      <div className="register-form">
        <h2>Register as Patient</h2>
        <form onSubmit={handlePatientSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="patientName"
              value={patientData.patientName}
              onChange={handlePatientChange}
            />
            {errors.patientName && <p className="error">{errors.patientName}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="patientEmail"
              value={patientData.patientEmail}
              onChange={handlePatientChange}
            />
            {errors.patientEmail && <p className="error">{errors.patientEmail}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="patientPassword"
              value={patientData.patientPassword}
              onChange={handlePatientChange}
            />
            {errors.patientPassword && <p className="error">{errors.patientPassword}</p>}
          </div>
          <button type="submit">Register as Patient</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
