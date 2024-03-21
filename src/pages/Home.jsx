import React from "react";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { LuArrowRightCircle } from "react-icons/lu";
// import DoctorList from "./doctor/DoctorList";
// import Services from "./Services";

const Home = () => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
              We help patients live a healthy, longer life.
            </h1>
            <br />
            <br />
            <button className="btn justify-betweens">Request an Appointment</button>
          </div>
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                30+
              </h2>
              <p className="text_para">Years of Experience</p>
            </div>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                15+
              </h2>
              <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
              <p className="text_para">Clinic Location</p>
            </div>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                100%
              </h2>
              <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
              <p className="text_para">Patient Satisfaction</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[30px] justify-end">
            <div>
              <img src={heroImg2} alt="" className="w-full mb-[30px]" />
            </div>
            <div>
              <img src={heroImg3} alt=" w-full" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container mx-auto mt-10">
          <h2 className="heading text-center">
            Providing the best Medical Services
          </h2>
        </div>

        {/* <Services/> */}
        <div className="flex flex-raw lg:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a Doctor
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers the best
                doctors, clinics, and expert health care. From the lab to the
                clinic.
              </p>
              <Link
                to="/Booking-Web-Application/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-`[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <LuArrowRightCircle className="group-hover:text-white w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center height-[150px] width-[150px]">
              <img src={icon02} alt="" />

            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a clinic
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers the best
                doctors, clinics, and expert health care. From the lab to the
                clinic.
              </p>
              <Link
                to="/Booking-Web-Application/contact"
                className="w-[44px] h-[44px] rounded-full border border-solid border-`[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <LuArrowRightCircle className="group-hover:text-white w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book an Appointment
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone. Our health System offers the best
                doctors, clinics, and expert health care. From the lab to the
                clinic.
              </p>
              <Link
                to="/Booking-Web-Application/appointment"
                className="w-[44px] h-[44px] rounded-full border border-solid border-`[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <LuArrowRightCircle className="group-hover:text-white w-6 h-6" />
              </Link>
            </div>
          </div>

          <div></div>

          {/* <DoctorList /> */}
        </div>
      </section>
    </section>
  );
};

export default Home;
