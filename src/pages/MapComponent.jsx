import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker , Popup } from "react-leaflet";
import Icon from "leaflet";
import "./MapComponent.css";

const Data = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "10px 15px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
      height: "100px",
      width: "100px",
    }}
  >
    {text}
  </div>
);
const MapComponent = () => {
  const defaultProps = {
    center: {
      lat: 6.878624818934343,
      lng: 79.88158859399894,
    },
    zoom: 15,
  };
  const locations = [
    {
      geoCode: [6.878471829157796, 79.88158339534716],
      text: "A",
      icon: new Icon.Icon({
        iconUrl:
          "https://lh3.googleusercontent.com/proxy/hVqwrv7cYbuU3ilMNGlQKZ1PtmV1TgBrp7V227Ilme27vpAI5CKMAHtJq2_jrvwrGrwDWhQACdrZ49quT2O-aNhhss4_vZwLjA-FfwYgeAhGqatmRg=s0-d",
        iconSize: [40, 40],
      }),
    },
    {
      geoCode: [6.878427891247572, 79.88183149966437],
      text: "B",
      icon: new Icon.Icon({
        iconUrl:
          "https://freepngimg.com/thumb/map/62763-maps-computer-google-location-icons-download-hd-png.png",
        iconSize: [40, 40],
      }),
    },
    {
      geoCode: [6.878532410209179, 79.88159144197367],
      text: "C",
      icon: new Icon.Icon({
        iconUrl:
          "https://th.bing.com/th/id/R.d24fa6f3a6e93f2953a0d3281c9e50dd?rik=M3FlyO8XqeJwcA&riu=http%3a%2f%2fimages.clipartpanda.com%2fgoogle-location-icon-vector-google-maps-gris.svg&ehk=QqTxZ09VPqRUG8hyO10Vn2OcC3vy08FgZYLc1JlQkbw%3d&risl=&pid=ImgRaw&r=0",
        iconSize: [40, 40],
      }),
    },
    {
      geoCode: [6.877535946007839, 79.88082706678074],
      text: "D",
      icon: new Icon.Icon({
        iconUrl:
          "https://icon-library.com/images/google-location-icon/google-location-icon-9.jpg",
        iconSize: [40, 40],
      }),
    },
  ];

  return (
    <div className="map-location">
      <MapContainer center={defaultProps.center} zoom={defaultProps.zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.geoCode} icon={location.icon}>
            <Popup>{location.text}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
