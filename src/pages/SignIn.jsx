import { Link } from "react-router-dom";
import signupImg from "../assets/images/signup.gif";
import { useState } from "react";

const Signup = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    role: " Patient",
  });

  const handleInputChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-1-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-1-lg" />
            </figure>
          </div>

          <div className="rounded-1-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">Account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  required
                  type="text"
                  placeholder="Name here"
                  name="name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-primaryColor text-textColor "
                />
              </div>
              <div className="mb-5">
                <input
                  required
                  type="email"
                  placeholder="Email here"
                  name="name *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-primaryColor text-textColor "
                />
              </div>
              <div className="mb-5">
                <input
                  required
                  type="password"
                  placeholder="Password here"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-primaryColor text-textColor "
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient </option>
                    <option value="doctor">Doctor</option>
                    <option value="doctor">Admin</option>
                  </select>
                </label>
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-primaryColor rounded-lg text-white"
                >
                  Sign up
                </button>
              </div>
              <p className="text-center mt-5">
                Already have an account ?
                <Link
                  to="/Booking-Web-Application/login"
                  className="text-primaryColor m-2"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
