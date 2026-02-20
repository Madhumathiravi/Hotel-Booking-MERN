// import ModifySearchbar from './ModifySearchbar.jsx'
// import Hotelcard from './Hotelcard.jsx'
// export default function Hotels(props){
//     return(
//        <>
//         <ModifySearchbar
//           location={props.location}
//           setLocation={props.setLocation}
//           rooms={props.rooms}
//           setRooms={props.setRooms}
//           checkInDate={props.checkInDate}
//           setCheckInDate={props.setCheckInDate}
//           checkOutDate={props.checkOutDate}
//           setCheckOutDate={props.setCheckOutDate}
//         />
//         <Hotelcard/>
//        </>
//     )
// }

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import ModifySearchbar from "./ModifySearchbar";
import Hotelcard from "./Hotelcard";

export default function Hotels() {
  const [searchParams] = useSearchParams();

  const [hotels, setHotels] = useState([]);

  // ✅ create state here
  const [location, setLocation] = useState(searchParams.get("city") || "");
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const city = searchParams.get("city");
  const guests = searchParams.get("guests");

  useEffect(() => {
    if (!city) return;

    const fetchHotels = async () => {
      try {
        const res = await api.get("/hotels/search", {
          params: { city, guests },
        });

        setHotels(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHotels();
  }, [city, guests]);

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

      <Hotelcard hotels={hotels} />
    </>
  );
}