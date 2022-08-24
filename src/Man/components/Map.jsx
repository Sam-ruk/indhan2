import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import './Map.css';
import {
  TileLayer,
  MapContainer,
  LayersControl, Marker, Popup
} from "react-leaflet";
import RoutingControl from './RoutingControl'

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const Map = (props) => {
  const [map, setMap] = useState(null);
  return (
    <>
      <MapContainer
        className="leaflet-container"
        center={props.start}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "10%", width: "inherit", padding: 0 }}
        whenCreated={map => setMap(map)}
      >
        <RoutingControl 
          position={'topleft'} 
          start={props.start} 
          end={props.end} 
          color={'#028a0f'} 
        />
        <Marker
            position={props.start}>
          <Popup>
              <h6>You</h6>
          </Popup>
        </Marker>
        <Marker
            position={props.end}>
          <Popup>
              <h6>{props.sender}</h6>
          </Popup>
        </Marker>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;
