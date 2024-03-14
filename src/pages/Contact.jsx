import React from "react";
import GoogleMapEmbed from "./GoogleMapEmbed";

function Contact() {
  return (
    <div>
      <div className="flex">
        <div>Contact Us</div>
        <div className="flex align-right">
          <GoogleMapEmbed />
        </div>
      </div>
    </div>
  );
}

export default Contact;
