import React from "react";
import Header from "./component/header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/doctor/Doctors";
import DoctorList from "./pages/doctor/DoctorList";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Appointment from "./pages/Appointment";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import Patient from "./pages/patient/Patient";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Booking-Web-Application/" element={<Home />} />
          <Route path="/Booking-Web-Application/login" element={<Login />} />
          <Route path="/Booking-Web-Application/home" element={<Home />} />
          <Route path="/Booking-Web-Application/appointment" element={<Appointment />} />
          <Route path="/Booking-Web-Application/register" element={<SignIn />} />
          <Route path="/Booking-Web-Application/Passreset" element={<PasswordReset/>} />
          <Route path="/Booking-Web-Application/doctors/:id" element={<DoctorList />} />
          <Route path="/Booking-Web-Application/docregister" element={<Register/>} />
          <Route path="/Booking-Web-Application/patient" element={<Patient />} />
          <Route path="/Booking-Web-Application/doctors" element={<Doctors />} />
          <Route path="/Booking-Web-Application/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
