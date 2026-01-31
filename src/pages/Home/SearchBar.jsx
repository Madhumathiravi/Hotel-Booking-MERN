import {DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuCalendarRange } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";


export default function Searchbar() {
  const [location, setLocation] = useState("Bangalore");
  const [country, setCountry] = useState("India");
  const [isEditing, setisEditing] = useState(false);

  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const [guestOpen, setGuestOpen] = useState(false);
  const locations = [
    "New Delhi","Pune","Ahmedabad","Mumbai","Bangalore","Jaipur","Agra","Hyderabad",
  ];
  const internationalLocations = [
    "Dubai",
    "Abu Dhabi",
    "Singapore",
    "Bangkok",
  ];

  const countryByCity = {
    "New Delhi": "India",
    "Pune": "India",
    "Ahmedabad": "India",
    "Mumbai": "India",
    "Bangalore": "India",
    "Jaipur": "India",
    "Agra": "India",
    "Hyderabad": "India",
    "Dubai": "United Arab Emirates",
    "Abu Dhabi": "United Arab Emirates",
    "Singapore": "Singapore",
    "Bangkok": "Thailand",
  };

  const today = new Date();

  const gettomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  };

  const getDayAfterTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d;
  };

  const [checkInDate, setcheckInDate] = useState(gettomorrow());
  const [checkOutDate, setCheckOutDate] = useState(getDayAfterTomorrow());
  const [calendarOpen, setCalendarOpen] = useState(null);

  const formatDay = (date) => date.toLocaleDateString("en-US", {weekday:"long"});
  const formatMonthYear = (date) => date.toLocaleDateString("en-US", {month:"short", year:"numeric"});
  const formatDate = (date) => date.getDate();

  const guests = rooms.reduce(
    (total, room) => total + room.adults + room.children,
    0
  );
 const navigate = useNavigate();

const handleSearch = async () => {
  try {
    const res = await api.get("/hotels/search", {
      params: {
        city: location,
        checkIn: checkInDate.toISOString(),
        checkOut: checkOutDate.toISOString(),
        guests,
        rooms: rooms.length,
      },              
    });

    navigate("/hotels", { state: { hotels: res.data } });

  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="font-poppins bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] pt-10 pb-10">
      <div className="lg:max-w-7xl  mx-auto px-4 ">
        <div className="flex justify-end mb-4 ">
          <h1 className="text-lg sm:text-2xl lg:text-xl font-semibold text-white">
            Same hotel, Cheapest price. Guaranteed!
          </h1>
        </div>

        <div className="bg-white rounded-md shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-12 lg:h-[100px] gap-4 items-start ">

            {/* Location */}
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col py-2 lg:pl-2 lg:ml-4 lg:border-r">
              <div className="flex items-center gap-2">
                <HiOutlineBuildingOffice2 className="text-2xl text-gray-500" />
                <p className="text-xs lg:text-[0.820rem] text-gray-500 font-medium">
                  Enter City Name, Location, or Specific hotel
                </p>
              </div>

              {!isEditing && (
                <div
                  className="cursor-pointer flex flex-col mt-2"
                  onClick={() => setisEditing(true)}
                >
                  <span className="text-md  sm:text-xl lg:text-2xl font-bold pl-4">{location}</span>
                  <span className="text-sm pl-4 overflow-hidden">{country}</span>
                </div>
              )}

              {isEditing && (
                <input
                  type="text"
                  className="w-full bg-white shadow-md outline-none p-3 mt-2"
                  autoFocus
                  onChange={(e) => {setLocation(e.target.value)}}
                />
              )}

              {isEditing && (
                <>
                  {/* overlay catches outside click */}
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setisEditing(false)}
                    aria-hidden
                  />

                  {/* dropdown: full-width on mobile, compact on larger screens */}
                  <div className="relative z-30">
                    <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 mt-2 z-30 w-full sm:w-80 bg-white shadow-md p-4 rounded-sm">
                      <h4 className="pb-2">Popular Search In Domestic</h4>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {locations.map((loc) => (
                          <span
                            key={loc}
                            className="border rounded-sm p-1 border-blue-400 text-blue-400 text-xs cursor-pointer"
                            onMouseDown={() => {
                              setLocation(loc);
                              setCountry(countryByCity[loc]);
                              setisEditing(false);
                            }}
                          >
                            {loc}
                          </span>
                        ))}
                      </div>

                      <h4 className="pb-2">Popular Search In International</h4>

                      <div className="flex flex-wrap gap-2">
                        {internationalLocations.map((loc) => (
                          <span
                            key={loc}
                            className="border rounded-sm p-1 border-blue-400 text-blue-400 text-xs cursor-pointer"
                            onMouseDown={() => {
                              setLocation(loc);
                              setCountry(countryByCity[loc]);
                              setisEditing(false);
                            }}
                          >
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Check-in */}
            <div className="relative col-span-1 sm:col-span-1 lg:col-span-2 lg:border-r py-2 ">
              <div className="flex items-center gap-2 mb-2">
                <LuCalendarRange className="text-gray-500" />
                <p className="text-sm md:text-base lg:text-sm text-gray-500 font-medium">Check-In</p>
              </div>

              <div
                className="flex flex-col cursor-pointer"
                onClick={() => setCalendarOpen("checkin")}
              >
                <div className="flex flex-row">
                  <span className="text-2xl font-bold">
                    {formatDate(checkInDate)}
                  </span>

                  <span className="text-sm font-normal pl-2 mt-2">
                    {formatMonthYear(checkInDate)}
                  </span>
                </div>

                <span className="text-sm">
                  {formatDay(checkInDate)}
                </span>
              </div>

              {calendarOpen === "checkin" && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setCalendarOpen(null)}
                    aria-hidden
                  />

                  {/* calendar container: full width on small screens, centered on larger */}
                  <div className="absolute top-full left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 z-30 mt-4 w-full sm:w-auto sm:max-w-md p-2">
                    <div className="rounded-xl bg-white shadow-lg p-4">
                      <DayPicker
                        mode="single"
                        selected={checkInDate}
                        onSelect={(date) => {
                          if (!date) return;
                          setcheckInDate(date);

                          if (checkOutDate <= date) {
                            const nextDay = new Date(date);
                            nextDay.setDate(nextDay.getDate() + 1);
                            setCheckOutDate(nextDay);
                          }

                          setCalendarOpen(null);
                        }}
                        disabled={{ before: gettomorrow() }}
                        className="w-full"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Check-out */}
            <div className="relative col-span-1 sm:col-span-1 lg:col-span-2 lg:border-r py-2">
              <div className="flex items-center gap-2 mb-2">
                <LuCalendarRange className="text-gray-500" />
                <p className="text-sm md:text-base lg:text-sm text-gray-500 font-medium">Check-Out</p>
              </div>

              <div
                className="flex flex-col cursor-pointer"
                onClick={() => setCalendarOpen("checkout")}
              >
                <div className="flex flex-row">
                  <span className="text-2xl font-bold">
                    {formatDate(checkOutDate)}
                  </span>

                  <span className="text-sm font-normal pl-2 mt-2">
                    {formatMonthYear(checkOutDate)}
                  </span>
                </div>

                <span className="text-sm">
                  {formatDay(checkOutDate)}
                </span>
              </div>

              {calendarOpen === "checkout" && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setCalendarOpen(null)}
                    aria-hidden
                  />

                  <div className="absolute top-full left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 z-30 mt-4 w-full sm:w-auto sm:max-w-md p-2">
                    <div className="rounded-xl bg-white shadow-lg p-4">
                      <DayPicker
                        mode="single"
                        selected={checkOutDate}
                        onSelect={(date) => {
                          if (!date || date <= checkInDate) return;
                          setCheckOutDate(date);
                          setCalendarOpen(null);
                        }}
                        disabled={{
                          before: (() => {
                            const d = new Date(checkInDate);
                            d.setDate(d.getDate() + 1);
                            return d;
                          })(),
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* rooms and guests */}
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col py-2">
              <span className="block text-sm md:text-base lg:text-sm mb-1 text-gray-500 font-medium">Rooms & Guests</span>

              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setGuestOpen(!guestOpen)}
              >
                
                <div className="flex flex-row ">
                  <p className="text-xs">  <sub className="font-bold  text-xl px-2"> {rooms.length}</sub>Room</p>
                  
                  <p className="text-xs">
                    <sub className="font-bold text-xl px-2">{guests}</sub>
                   Guests
                </p>
                </div>
                <IoChevronDownOutline className="text-2xl font-light" />
              </div>

              {guestOpen && (
                <div className="absolute bg-white shadow-md p-3 rounded-lg w-full sm:w-72 z-10 top-full mt-2 left-0">
                  {rooms.map((room, index) => {
                    const isLastRoom = index === rooms.length - 1;

                    return (
                      <div key={index} className="border-b pb-2 mb-3">
                        <h4 className="text-sm font-semibold">Room {index + 1}</h4>

                        {/* Adults */}
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Adults</span>
                          <div className="flex items-center">
                            <button
                              className="px-2 border rounded bg-slate-100"
                              onClick={() => {
                                const updated = [...rooms];
                                if (updated[index].adults > 1)
                                  updated[index].adults--;
                                setRooms(updated);
                              }}
                            >
                              -
                            </button>
                            <span className="px-2 border rounded-0">{room.adults}</span>
                            <button
                              className="px-2 border rounded-none bg-slate-100"
                              onClick={() => {
                                const updated = [...rooms];
                                updated[index].adults++;
                                setRooms(updated);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children */}
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Children</span>
                          <div className="flex items-center">
                            <button
                              className="px-2 border rounded bg-slate-100"
                              onClick={() => {
                                const updated = [...rooms];
                                if (updated[index].children > 0)
                                  updated[index].children--;
                                setRooms(updated);
                              }}
                            >
                              -
                            </button>
                            <span className="px-2 border">{room.children}</span>
                            <button
                              className="px-2 border rounded bg-slate-100"
                              onClick={() => {
                                const updated = [...rooms];
                                updated[index].children++;
                                setRooms(updated);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Add / Remove only on last room */}
                        {isLastRoom && (
                          <div className="flex gap-2 mt-3">
                            <button
                              className="text-xs px-3 py-1 border border-green-500 text-green-600 rounded-2xl"
                              onClick={() =>
                                setRooms([
                                  ...rooms,
                                  { adults: 1, children: 0 },
                                ])
                              }
                            >
                              Add Room
                            </button>

                            {rooms.length > 1 && (
                              <button
                                className="px-2 text-red-500 rounded-2xl border border-red-400"
                                onClick={() =>
                                  setRooms(rooms.slice(0, -1))
                                }
                              >
                                Remove Room
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <button
                    className="w-full py-2 rounded text-white bg-[#ef6614]"
                    onClick={() => setGuestOpen(false)}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Search button - full width on small screens, compact on large */}
            <button
            onClick={handleSearch}
              className="col-span-1 sm:col-span-4 lg:col-span-2 lg:h-[100px] bg-[#ef6614] text-white rounded-r-md sm:rounded-b-md lg:rounded-r-md flex items-center justify-center text-lg font-bold sm:order-last lg:order-none py-3 "
            >
              SEARCH
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}