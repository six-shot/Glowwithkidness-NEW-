// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";

// import { Icon, divIcon, point } from "leaflet";

// // create custom icon
// const customIcon = new Icon({
//   // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconUrl: require("../../assest/pin.png"),
//   iconSize: [38, 38], // size of the icon
// });

// // custom cluster icon
// const createClusterCustomIcon = function (cluster) {
//   return new divIcon({
//     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//     className: "custom-marker-cluster",
//     iconSize: point(33, 33, true),
//   });
// };

// // markers
// const markers = [
//   {
//     geocode: [32.997, -96.846],
//     popUp: "Glowithkindness",
//   },
 
// ];

// export default function MapComponent() {
//   return (
//     <MapContainer
//       center={[32.997, -96.846]}
//       zoom={13}
//       scrollWheelZoom={false}
//       dragging={false}
//       touchZoom={false}
//       doubleClickZoom={false}
//       boxZoom={false}
//       keyboard={false}
//     >
//       {/* OPEN STREEN MAPS TILES */}
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {/* WATERCOLOR CUSTOM TILES */}
//       {/* <TileLayer
//         attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
//       /> */}
//       {/* GOOGLE MAPS TILES */}
//       {/* <TileLayer
//         attribution="Google Maps"
//         // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
//         // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
//         url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
//         maxZoom={20}
//         subdomains={["mt0", "mt1", "mt2", "mt3"]}
//       /> */}

//       <MarkerClusterGroup
//         chunkedLoading
//         iconCreateFunction={createClusterCustomIcon}
//       >
//         {/* Mapping through the markers */}
//         {markers.map((marker) => (
//           <Marker position={marker.geocode} icon={customIcon}>
//             <Popup>{marker.popUp}</Popup>
//           </Marker>
//         ))}

//         {/* Hard coded markers */}
//         {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
//           <Popup>This is popup 1</Popup>
//         </Marker>
//         <Marker position={[51.504, -0.1]} icon={customIcon}>
//           <Popup>This is popup 2</Popup>
//         </Marker>
//         <Marker position={[51.5, -0.09]} icon={customIcon}>
//           <Popup>This is popup 3</Popup>
//         </Marker>
//        */}
//       </MarkerClusterGroup>
//     </MapContainer>
//   );
// }


import React from 'react'

function MapComponent() {
  return (
    <div>
      <div
        className="relative text-right lg:w-[600px] h-[500px]"

      >
        <div
          className="overflow-hidden bg-none"
          style={{ width: "100%", height: "100%" }}
        >
          <iframe
           
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=3702%20Frankford%20Rd,%20Dallas%20TX,%2075287&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="Google Map"
            className="lg:w-[600px] w-full h-full"
          ></iframe>
        </div>
        <a
          href="https://123movies-to.org"
          className="hidden"
          aria-hidden="true"
        >
          123movies
        </a>
        <style jsx>{`
          .mapouter {
            position: relative;
            text-align: right;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
          }
        `}</style>
        <a
          href="https://www.embedgooglemap.net"
          className="hidden"
          aria-hidden="true"
        ></a>
      </div>
    </div>
  );
}

export default MapComponent;