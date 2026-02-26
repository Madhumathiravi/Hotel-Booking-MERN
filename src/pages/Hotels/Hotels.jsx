
// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../../api/axios";
// import ModifySearchbar from "./ModifySearchbar";
// import Hotelcard from "./Hotelcard";

// export default function Hotels() {
//   const [searchParams] = useSearchParams();

//   const [hotels, setHotels] = useState([]);

//   // ✅ create state here
//   const [location, setLocation] = useState(searchParams.get("city") || "");
//   const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
//   const [checkInDate, setCheckInDate] = useState(new Date());
//   const [checkOutDate, setCheckOutDate] = useState(new Date());

//   const city = searchParams.get("city");
//   const guests = searchParams.get("guests");

//   useEffect(() => {
//     if (!city) return;

//     const fetchHotels = async () => {
//       try {
//         const res = await api.get("/hotels/search", {
//           params: { city, guests },
//         });

//         setHotels(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchHotels();
//   }, [city, guests]);

//   return (
//     <>
//       <ModifySearchbar
//         location={location}
//         setLocation={setLocation}
//         rooms={rooms}
//         setRooms={setRooms}
//         checkInDate={checkInDate}
//         setCheckInDate={setCheckInDate}
//         checkOutDate={checkOutDate}
//         setCheckOutDate={setCheckOutDate}
//       />

//       <Hotelcard hotels={hotels} />
//     </>
//   );
// }

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import ModifySearchbar from "./ModifySearchbar";
import HotelCard from "./HotelCard";

export default function Hotels() {
  const [searchParams] = useSearchParams();

  const [hotels, setHotels] = useState([]);

  // ✅ Sync state with query params
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  useEffect(() => {
    const city = searchParams.get("city");
    const guests = searchParams.get("guests");
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");
    const roomsCount = searchParams.get("rooms");

    if (!city) return;

    // update local state from URL
    setLocation(city);
    setRooms(Array.from({ length: roomsCount || 1 }, () => ({ adults: 1, children: 0 })));
    setCheckInDate(checkIn ? new Date(checkIn) : new Date());
    setCheckOutDate(checkOut ? new Date(checkOut) : new Date());

    // fetch hotels
    const fetchHotels = async () => {
      try {
        const res = await api.get("/hotels/search", {
          params: { city, guests, checkIn, checkOut },
        });
        setHotels(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHotels();
  }, [searchParams]);

  return (
    <>
      <ModifySearchbar
        location={location}
        setLocation={setLocation}
        rooms={rooms}
        setRooms={setRooms}
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
      />

      <HotelCard hotels={hotels} />
    </>
  );
}