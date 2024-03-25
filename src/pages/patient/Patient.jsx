import React, { useState } from "react";

const Patient = () => {
  const [date, setDate] = useState("");
  const [medicalNeed, setMedicalNeed] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="m-5 justify-between">
      <h2 className="text-xl font-bold mb-4 text-center">Paitient details</h2>
      <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            required
            type="text"
            placeholder="Your Name here"
            name="name"
            className="w-full py-3 px-4 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-primaryColor text-textColor "
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold mb-2">
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

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default Patient;
