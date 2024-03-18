import React from "react";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import Services from "./Services";

const Home = () => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
              We help patients live a healthy, longer life.
            </h1>
            <br/>
            <br/>
            <button className="btn">Request an Appointment</button>
          </div>
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            <div>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-[700]">
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
          <h2 className="heading text-center">Providing the best Medical Services</h2>
        </div>

        <Services/>
        </section>
    </section>

      
  );
};

export default Home;
