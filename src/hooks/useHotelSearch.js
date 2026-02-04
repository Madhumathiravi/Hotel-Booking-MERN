import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export function useHotelSearch() {
  const [location, setLocation] = useState("Bangalore");
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  };

  const getDayAfterTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d;
  };

  const [checkInDate, setCheckInDate] = useState(getTomorrow());
  const [checkOutDate, setCheckOutDate] = useState(getDayAfterTomorrow());

  const guests = rooms.reduce(
    (total, r) => total + r.adults + r.children,
    0
  );

  const navigate = useNavigate();

  const searchHotels = async () => {
    const res = await api.get("/hotels/search", {
      params: {
        city: location,
        guests,
        rooms: rooms.length,
      },
    });

    navigate("/hotels", { state: { hotels: res.data } });
  };

  return {
    location,
    setLocation,
    rooms,
    setRooms,
    guests,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    searchHotels,
  };
}
