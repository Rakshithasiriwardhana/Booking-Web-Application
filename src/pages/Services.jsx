import React, { useState } from "react";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Make sure you understand the patient’s needs",
      content:
        "Before providing any care, take time to talk to your patient and get to know them better. Ask questions about their health history, what symptoms they are experiencing, and any other information that will help you provide personalized care. This can help ensure that you address all of their needs during the appointment. For instance, if a patient is     suffering from fatigue, you should ask them what activities they were doing before they started to feel tired. This information can help you determine the underlying cause of their symptoms and provide more effective treatment.",
    },
    {
      title: "Listen to the patient’s concerns",
      content:
        "Patients may have questions or concerns that they want to discuss. This can include asking them what their doctor is saying about their health, what they have been up to, and how they are feeling.",
    },
    {
      title: "Work with a medical answering service",
      content:
        "Answering services can help you provide round-the-clock access to care...",
    },
    {
      title: "Communicate clearly",
      content:
        "It is important to make sure that you communicate clearly with your patients...",
    },
    {
      title: "Respect patient privacy",
      content:
        "Respecting patient privacy is key when providing excellent care...",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <h2 className="text-2xl text-headingColor">
        {slides[currentSlide].title}
      </h2>
      <br />
      <p>{slides[currentSlide].content}</p>
      <br />
      <div className="flex justify-between">
        <button className="btn bg-sky-300" onClick={prevSlide}>
          Previous
        </button>
        <button className="btn bg-sky-300" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Services;
