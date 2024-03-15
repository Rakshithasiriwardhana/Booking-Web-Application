import { Route, BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import Home from "../pages/Home"
import Doctors from "../pages/doctor/Doctors";
import DoctorDetails from "../pages/doctor/DoctorDetails";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/contact" element={<Contact />} />
    </Router>
  );
};

export default Routes;

