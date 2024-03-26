import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Appointment = ({ history }) => {
  const [medicalNeed, setMedicalNeed] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Appointment details:", { medicalNeed, date });
    
    alert(`Appointment for ${medicalNeed} has been scheduled successfully!`);
  
    // Redirect to appointment list page
    window.location.href = "/Booking-Web-Application/appointment-list";
  };

  return (
    <div className="m-5 justify-between">
      <h2 className="text-xl font-bold mb-4 text-center">
        Make an Appointment
      </h2>
      <form
        className="w-full max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="medicalNeed"
            className="block text-sm font-semibold mb-2"
          >
            Medical Type:
          </label>
          <select
            id="medicalNeed"
            value={medicalNeed}
            onChange={(e) => setMedicalNeed(e.target.value)}
            required
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Medical Type</option>
            <option value="General Checkup">General Checkup</option>
            <option value="Dental">Dental</option>
            <option value="Eye">Eye Care</option>
            <option value="Back pain">Back pain</option>
            <option value="Heart">Heart Care</option>
            <option value="Kidney">Kidney Care</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-semibold mb-2"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-semibold mb-2"
          >
            Brief Description:
          </label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Make Appointment
          
        </button>
        {/* <Link to="/Booking-Web-Application/appointment-list">Go to Appointment List</Link> */}

      </form>
    </div>
  );
};

export default Appointment;
