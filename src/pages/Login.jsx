import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span>
        </h3>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              required
              type="email"
              placeholder="Enter Your Email"
              name="email *"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 px-4 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-primaryColor text-textColor "
            />
          </div>
          <div className="mb-5">
            <input
              required
              type="password "
              placeholder="Enter Your Password"
              name="Password *"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 px-4 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-primaryColor text-textColor "
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
            Don't have an account ?
            <Link to="/Booking-Web-Application/register" className="text-primaryColor" >
            Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
