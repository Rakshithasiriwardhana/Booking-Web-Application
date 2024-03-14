import React from 'react';

function GoogleMapEmbed() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Map"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          
        ></iframe>
        <a href="https://embedgooglemap.net/124/">what is 123movies</a>
      </div>
      <style>
        {`
          .mapouter {
            position: relative;
            text-align: right;
            height: 500px;
            width: 600px;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            height: 500px;
            width: 600px;
          }
        `}
      </style>
    </div>
  );
}

export default GoogleMapEmbed;
