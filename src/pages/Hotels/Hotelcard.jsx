
// // import Filters from "./Filters.jsx"
// // import HotelResult from "./HotelResult.jsx";
// // function Hotelcard(){
// //   return (
// //    <div className="max-w-7xl m-auto flex flex-row gap-8 font-poppins mt-4">
// //      <Filters />
// //       <HotelResult hotels={hotels} />
// //    </div>
// //   );
// // };

// // export default Hotelcard;

// import { useState, useEffect } from "react";
// import Filters from "./Filters.jsx";
// import HotelResult from "./HotelResult.jsx";

// function Hotelcard() {
//   const [hotels, setHotels] = useState([]);
//   const [city, setCity] = useState(""); // optional: to track search/filter

//   // Example: fetch from backend when city changes
//   useEffect(() => {
//     if (!city) return;

//     fetch(`https://your-backend.com/hotels?city=${city}`)
//       .then(res => res.json())
//       .then(data => setHotels(data))
//       .catch(err => console.error("Failed to fetch hotels:", err));
//   }, [city]);

//   return (
//     <div className="max-w-7xl m-auto flex flex-row gap-8 font-poppins mt-4">
//       <Filters setCity={setCity} />
//       <HotelResult hotels={hotels} />
//     </div>
//   );
// }

// export default Hotelcard;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Filters from "./Filters";
import HotelResult from "./HotelResult";

function Hotelcard() {
  const location = useLocation();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const res = await fetch(
        `http://localhost:5000/api/hotels/search${location.search}`
      );

      const data = await res.json();
      setHotels(data);
    };

    fetchHotels();
  }, [location.search]);

  return (
    <div className="max-w-7xl m-auto flex gap-8 mt-4">
      <Filters />
      <HotelResult hotels={hotels} />
    </div>
  );
}

export default Hotelcard;