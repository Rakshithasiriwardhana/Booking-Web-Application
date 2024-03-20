import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Icon from "leaflet";

const AnyReactComponent = ({ text }) => (
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
    { geoCode: [6.878471829157796, 79.88158339534716], text: "A" },
    { geoCode: [6.878427891247572, 79.88183149966437], text: "B" },
    { geoCode: [6.878532410209179, 79.88159144197367], text: "C" },
    { geoCode: [6.877535946007839, 79.88082706678074], text: "D" },
  ];

  const customIcon = new Icon.Icon({
    iconUrl:
    "https://freepngimg.com/thumb/map/62661-maps-computer-google-location-icons-free-transparent-image-hq.png",
    iconSize: [40, 40],
  });

  return (
    <div className="map-location">
      <MapContainer center={defaultProps.center} zoom={defaultProps.zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.geoCode} icon={customIcon}>
            <AnyReactComponent text={location.text} />
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
