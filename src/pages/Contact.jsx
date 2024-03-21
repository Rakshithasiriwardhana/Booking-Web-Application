import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import MapComponent from "./MapComponent";

function Contact() {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="map-container">
          <MapComponent/>
        </div>
      </div>

      <div className="flex-1 m-5">
        <h2 className="text-[36px] leading-[56px]">Contact Us</h2>
        <ul>
          <li>
            <MdAttachEmail /> info@medical.lk
          </li>
          <li>
            <IoCall /> 077 123 332
          </li>
          <li>
            <SlEnvolopeLetter /> 233, Colombo Road, Kirulapana, Sri Lanka
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
