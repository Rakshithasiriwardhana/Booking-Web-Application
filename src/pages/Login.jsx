import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { AdminContext } from "./admin/AdminContextProvider";
import UserManagement from "../component/UserManagement";


const Login = () => {
  const history = useNavigate();
  const { setLoggedUserDetails } = useContext(AdminContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/auth/login/",
        formData
      );
      const token = response.data.token;
      const decodedToken = jwtDecode(token);

      setLoggedUserDetails(decodedToken);

      if (decodedToken.email === "admin@gmail.com") {
        window.location.href = "/Booking-Web-Application/appointments";
      } else if (decodedToken.email === "patient@gmail.com") {
        window.location.href = "/Booking-Web-Application/login";
      } else if (decodedToken.email === "doctor@gmail.com") {
        window.location.href = "/Booking-Web-Application/appointments";
      } else {
        window.location.href = "/Booking-Web-Application/home";
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span>
        </h3>
        <form className="py-4 md:py-0" onSubmit={handleLogin}>
          <div className="mb-5">
            <input
              required
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 px-4 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-primaryColor text-textColor"
            />
          </div>
          <div className="mb-5">
            <input
              required
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 px-4 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-primaryColor text-textColor"
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-primaryColor rounded-lg text-white"
            >
              Login
            </button>
          </div>
          <p className="text-center mt-5">
            Don't have an account?
            <Link
              to="/Booking-Web-Application/register"
              className="text-primaryColor"
            >
              Register
            </Link>
          </p>
        </form>
       <UserManagement/>
      </div>
    </section>
  );
};

export default Login;
