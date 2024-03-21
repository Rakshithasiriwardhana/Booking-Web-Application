import React, { useEffect, useState } from "react";
import starIcon from "../../assets/images/Star.png";
const DoctorCard = (props) => {
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    setDoctor(props.doctor);
  }, [props.doctor]);

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={doctor.photo} alt="" className="w-full" />
      </div>
      <h2 className="text-[18px] leading-normal lg:text-[20px] font-serif font-bold">
        {doctor.name}
      </h2>
      <div className="flex items-center justify-between mt-2 lg:mt-4">
        <span className="flex items-center gap-1 text-irisBlueColor rounded-full py-1 px-2 leading-4 lg:px-4 font-semibold">
          {doctor.specialization}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-4 font-semibold w-5 h-5 lg:w-6 lg:h-6">
            <img src={starIcon} alt="" /> {doctor.avgRating}
          </span>
          <span className="text-[14px] leading-6 font-semibold gap-[6px] lg:leading-6 text-textColor"> ({doctor.totalRating})  </span>
        </div>
      </div>

      <div className="mt-3 lg:mt-5 items-center justify-between">
        <div>
          <h3 className="py-1 px-2 lg:px-4 text-[14px] leading-6 font-semibold text-textColor mt-2">
            {doctor.totalPatients}  Patients
            </h3>
        </div>
       <span className="text-[14px] leading-6 font-semibold gap-[6px] lg:leading-6 text-rose-950 "> ({doctor.hospital})  </span>

      </div>
    </div>
  );
};

export default DoctorCard;
