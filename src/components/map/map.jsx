import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React, { useEffect, useState } from "react";

import { Icon } from "leaflet";
import Pointer from "../../common/img/Pointer.png";
import UserPointer from "../../common/img/UserPointer.png";

function Map() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Get current location using Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  }, []);

  return (
    <MapContainer
      center={[27.7313, 85.3371]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "80%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


     <Marker
        position={[27.61838, 85.53283]}
        icon={
          new Icon({
            iconUrl: Pointer,
            iconSize: [40, 40],
            iconAnchor: [12, 41],
          })
        }
      ></Marker>


      
      {currentLocation && (
        <Marker
          position={currentLocation}
          icon={
            new Icon({
              iconUrl: UserPointer,
              iconSize: [40, 40],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;
