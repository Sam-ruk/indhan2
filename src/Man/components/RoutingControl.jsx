import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({ position, start, end, color }) => {
  var instance = L.Routing.control({
    position,
    waypoints: [start,end
    ],
    lineOptions: {
      styles: [
        {
          color,
        },
      ],
    },
    collapsible: true
  }).on('routesfound', function(e) {
   var routes = e.routes;
   var summary = routes[0].summary;
   // alert distance and time in km and minutes
   console.log(summary);
});

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;