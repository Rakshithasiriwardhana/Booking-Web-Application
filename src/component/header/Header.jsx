import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/patient-avatar.png";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  { path: "/Booking-Web-Application/home", display: "Home" },
  { path: "/Booking-Web-Application/doctors", display: "Find a Doctor" },
  { path: "/Booking-Web-Application/appointment", display: "Appointments" },
  { path: "/Booking-Web-Application/contact", display: "Contact Us" },
  {
    display: "Registration",
    dropdown: [
      { path: "/Booking-Web-Application/docregister", display: "For Doctor" },
      { path: "/Booking-Web-Application/patient", display: "For Patients" },
    ],
  },
];

const Header = React.memo(() => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map(({ display, path, dropdown }, index) => (
                <li key={index}>
                  {dropdown ? (
                    <div
                      className="dropdown"
                      onClick={() => toggleDropdown()}
                    >
                      <NavLink
                        to={path}
                        className="text-primaryColor text-[16px] leading-7 font-[600] fa fa-caret-down"
                      >
                        {display}
                      </NavLink>
                      {showDropdown && (
                        <ul className="dropdown-content">
                          {dropdown.map(({ display, path }, index) => (
                            <li key={index}>
                              <NavLink
                                to={path}
                                className="text-primaryColor text-[16px] leading-7 font-[600]"
                              >
                                {display}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={path}
                      className="text-primaryColor text-[16px] leading-7 font-[500]"
                    >
                      {display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    className="w-full rounded-full"
                    alt="userimg"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/Booking-Web-Application/login">
              <button className="btn bg-primaryColor py-2 px-6 text-white h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            <span className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
