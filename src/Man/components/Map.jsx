import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl, Marker, Popup
} from "react-leaflet";
import RoutingControl from './RoutingControl';

const Map = (props) => {
  const [map, setMap] = useState(null);
  return (
    <>
      <MapContainer
        maxZoom={25}
        center={props.start}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "400px",width:"100%"}}
        whenCreated={map => setMap(map)}
      >
        <RoutingControl 
          position={'topleft'} 
          start={props.start} 
          end={props.end} 
          color={'#1d713f'}
        />
        <Marker
            position={props.start}
        >
        <Popup>
              <h6>{props.self}</h6>
          </Popup>
        </Marker>
        <Marker
            position={props.end}
        >
          <Popup>
              <h6>{props.other}</h6>
          </Popup>
        </Marker>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;
