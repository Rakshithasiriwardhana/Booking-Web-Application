import React from "react";
import Doctors from "./Doctors";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-[30px] mt-[30px] lg:mt-[55px]">
        {Array.isArray(Doctors) &&
          Doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
       
      </div>
    </div>
  );
};

export default DoctorList;
