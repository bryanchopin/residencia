// import dynamic from "next/dynamic";
// import { useState, useEffect } from "react";
// import "leaflet/dist/leaflet.css";

// const Marker = dynamic(
//   () => import("react-leaflet").then((module) => module.Marker),
//   { ssr: false, loading: () => <p>Loading...</p> }
// );

// const Popup = dynamic(
//   () => import("react-leaflet").then((module) => module.Popup),
//   { ssr: false, loading: () => <p>Loading...</p> }
// );

// export default function Markers({ center }) {
//   return (
//     <>
//       {/* {L && icon && ( */}
//       <Marker position={center}>
//         <Popup>
//           Secretaria de salud mental. <br /> 6647517723.
//         </Popup>
//       </Marker>
//       {/* )}  */}
//     </>
//   );
// }
// // 


// import dynamic from "next/dynamic";
// import { useState, useEffect } from "react";
// import "leaflet/dist/leaflet.css";
// import { divIcon } from "leaflet";

// const Marker = dynamic(
//   () => import("react-leaflet").then((module) => module.Marker),
//   { ssr: false, loading: () => <p>Loading...</p> }
// );

// const Popup = dynamic(
//   () => import("react-leaflet").then((module) => module.Popup),
//   { ssr: false, loading: () => <p>Loading...</p> }
// );

// export default function Markers({ center }) {
//   const [customIcon, setCustomIcon] = useState(null);

//   useEffect(() => {
//     const icon = divIcon({
//       className: "custom-icon",
//       iconSize: [32, 32],
//       html: `<img src="/logoITT.png" width="32" height="32"/>`,
//     });
//     setCustomIcon(icon);
//   }, []);

//   return (
//     <>
//       {customIcon && (
//         <Marker position={center} icon={customIcon}>
//           <Popup>
//             Secretaria de salud mental. <br /> 6647517723.
//           </Popup>
//         </Marker>
//       )}
//     </>
//   );
// }
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Popup = dynamic(
  () => import("react-leaflet").then((module) => module.Popup),
  { ssr: false, loading: () => <p>Loading...</p> }
);

export default function Markers({ center }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    import("leaflet").then((L) => {
      const customIcon = L.icon({
        iconUrl: "/logoITT.png",
        iconSize: [42, 42],
      });
      setIcon(customIcon);
    });
  }, []);

  return (
    <>
      {icon && (
        <Marker position={center} icon={icon}>
          <Popup>
            Secretaria de salud mental. <br /> 6647517723.
          </Popup>
        </Marker>
      )}
    </>
  );
}
