import React from 'react'

const DoctorCard = ({doctors}) => {

    const{name, specialization, avgRating, totalRating, photo, totalPatients, hospital} = doctors
  return (
    <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} alt="" className='w-full'/>
        </div>
        <h2 className='text-[18px] leading-normal lg:text-[20px] font-serif font-bold'>{name}</h2>
      <div className='flex items-center justify-between mt-2 lg:mt-4'></div>
    </div>
  )
}

export default DoctorCard
