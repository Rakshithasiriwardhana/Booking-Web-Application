import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    ClassName={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-primaryColor text-[16px] leading-7 font-[500] hover:bg-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
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
                    className="w-full  rounded-full"
                    alt="img"
                  />
                </figure>
              </Link>
            </div>

            <Link to ='/login'>

              <button className="bg-primaryColor py-2 px-6 text-white flex items-center">Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
