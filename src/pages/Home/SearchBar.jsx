
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuCalendarRange } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";

export default function Searchbar() {
  const [location, setLocation] = useState("Bangalore");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const [guestOpen, setGuestOpen] = useState(false);
  const locations = [
    "New Delhi",
    "Pune",
    "Ahmedabad",
    "Mumbai",
    "Bangalore",
    "Jaipur",
    "Agra",
    "Hyderabad",
  ];
  const internationalLocations = [
    "Dubai",
    "Abu Dhabi",
    "Singapore",
    "Bangkok",
  ];

  const guests = rooms.reduce(
    (total, room) => total + room.adults + room.children,
    0
  );

  return (
    <div className="font-poppins bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] pt-10 pb-20">
      

      <div className="max-w-7xl mx-auto px-4">
         <div className="flex justify-end mb-4 ">
          <h1 className="text-xl font-bold text-white">
            Same hotel, Cheapest price. Guaranteed!
          </h1>
        </div>
        <div className="bg-white rounded-md shadow-lg ">
          <div className="grid grid-cols-12 gap-6 items-center">


          {/* Location */}
          <div className="col-span-4 flex flex-col py-6 pl-2">
            <div className="flex items-center gap-2">
              <HiOutlineBuildingOffice2 className="text-2xl text-gray-500" />
              <p className="text-sm text-gray-500 font-medium">
                Enter City Name, Location, or Specific hotel
              </p>
            </div>
           
            <input
              type="text"
              className="w-full outline-none p-3"
              

              onChange={(e) => setLocation(e.target.value)}
            />
             <span className="text-md ">{location}</span>
            <span>India</span>
          </div>
          {/* Country */}
          <div className="relative">
            <div className="absolute bg-white shadow-md p-4 rounded-lg w-72 z-10">
              <h4>Popular Search In Domestic</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {locations.map((loc) => (
                  <span className=" border rounded-md p-1 border-blue-400 text-blue-400 text-xs" key={loc}>{loc}</span>
                ))}
              </div>

              <h4>Popular Search In International</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {internationalLocations.map((loc) => (
                  <span className=" border rounded-md p-1 border-blue-400 text-blue-400 text-xs font-normal" key={loc}>{loc}</span>
                ))}
              </div>
            </div>
              </div>
          {/* Check-in */}
          <div className="col-span-2 flex flex-col py-6">
            <div className="flex items-center gap-2">
              <LuCalendarRange className="text-gray-500" />
              <p className="text-sm text-gray-500 font-medium">Check-In</p>
            </div>
            <input
              type="date"
              className="p-2 border rounded"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>

          {/* Check-out */}
          <div className="col-span-2 flex flex-col py-6">
            <div className="flex items-center gap-2">
              <LuCalendarRange className="text-gray-500" />
              <p className="text-sm text-gray-500 font-medium">Check-Out</p>
            </div>
            <input
              type="date"
              className="p-2 border rounded"
              min={checkInDate}
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>

          {/* Rooms & Guests */}
          <div className="col-span-2 relative flex flex-col py-6">
            <span className="block text-sm mb-1 text-gray-500 font-medium">Rooms & Guests</span>

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setGuestOpen(!guestOpen)}
            >
              <p className="text-sm ">
                {rooms.length} Room · {guests} Guests
              </p>
              <IoChevronDownOutline  className="text-2xl font-light" />
             
            </div>

            {guestOpen && (
              <div className="absolute bg-white shadow-md p-4 rounded-lg w-72 z-10 top-20 ">

                {rooms.map((room, index) => {
                  const isLastRoom = index === rooms.length - 1;

                  return (
                    <div key={index} className="border-b pb-3 mb-3">
                      <h4 className="font-medium mb-3">
                        Room {index + 1}
                      </h4>

                      {/* Adults */}
                      <div className="flex justify-between items-center mb-2">
                        <span>Adults</span>
                        <div className="flex items-center">
                          <button
                            className="px-3 py-1 border rounded"
                            onClick={() => {
                              const updated = [...rooms];
                              if (updated[index].adults > 1)
                                updated[index].adults--;
                              setRooms(updated);
                            }}
                          >
                            -
                          </button>
                          <span className="px-3">{room.adults}</span>
                          <button
                            className="px-3 py-1 border rounded"
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
                      <div className="flex justify-between items-center mb-2">
                        <span>Children</span>
                        <div className="flex items-center">
                          <button
                            className="px-3 py-1 border rounded"
                            onClick={() => {
                              const updated = [...rooms];
                              if (updated[index].children > 0)
                                updated[index].children--;
                              setRooms(updated);
                            }}
                          >
                            -
                          </button>
                          <span className="px-3">{room.children}</span>
                          <button
                            className="px-3 py-1 border rounded"
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
                            className="px-3 py-1 border border-green-500 text-green-600 rounded"
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
                              className="px-3 py-1 text-red-500 rounded"
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

          {/* Search */}
          <button
              className="col-span-2 h-full bg-[#ef6614] text-white rounded-r-md

                        flex items-center justify-center text-lg font-bold"
            >
              SEARCH
            </button>


          </div>
        </div>
      </div>
    </div>
  );
}
