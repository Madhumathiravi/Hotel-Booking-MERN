import {DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuCalendarRange } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";

export default function Searchbar() {
  const [location, setLocation] = useState("Bangalore");
  const [country, setCountry] = useState("India");
  const [isEditing, setisEditing] = useState(false);

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
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
  // India
  "New Delhi": "India",
  "Pune": "India",
  "Ahmedabad": "India",
  "Mumbai": "India",
  "Bangalore": "India",
  "Jaipur": "India",
  "Agra": "India",
  "Hyderabad": "India",

  // UAE
  "Dubai": "United Arab Emirates",
  "Abu Dhabi": "United Arab Emirates",

  // Singapore
  "Singapore": "Singapore",

  // Thailand
  "Bangkok": "Thailand",
};
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const [selectedDate, setSelectedDate] = useState(tomorrow);
const [calendarOpen, setCalendarOpen] = useState(false);

const formatDay = (date) => date.toLocaleDateString("en-US", {weekday:"long"});
const formatMonthYear = (date) => date.toLocaleDateString("en-US", {month:"short", year:"numeric"});
const formatDate = (date) => date.getDate();

  const guests = rooms.reduce(
    (total, room) => total + room.adults + room.children,
    0
  );

  const [range, setRange] = useState();
  return (
    <div className="font-poppins bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] pt-10 pb-20">
      

      <div className="max-w-7xl mx-auto px-4">
         <div className="flex justify-end mb-4 ">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Same hotel, Cheapest price. Guaranteed!
          </h1>
        </div>
        <div className="bg-white rounded-md shadow-lg ">
          <div className="grid grid-cols-12  sm:grid-cols-2 lg:grid-cols-12 gap-6 items-center">


          {/* Location */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col py-6 pl-2 ml-4">
            <div className="flex items-center gap-2">
              <HiOutlineBuildingOffice2 className="text-2xl text-gray-500" />
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium">
                Enter City Name, Location, or Specific hotel
              </p>
            </div>
           {!isEditing && (
            <div 
             className="cursor-pointer flex flex-col ml-6 mt-2"
             onClick={() => setisEditing(true)}>
            <span className="text-2xl font-bold">{location}</span>
            <span className="text-sm">{country}</span>
            </div>
           )}
           {isEditing && (
             <input
              type="text"
              className="w-full bg-white shadow-md outline-none p-3"
              autoFocus
              onChange={(e) => {setLocation(e.target.value)}}
            />
           )}
            
              {isEditing && (
             <div className="relative">
            <div className="absolute bg-white shadow-md p-4 rounded-sm w-80 z-10 mt-2">
              <h4 className="pb-2 ">Popular Search In Domestic</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {locations.map((loc) => (
                  <span className=" border rounded-sm p-1 border-blue-400 text-blue-400 text-xs cursor-pointer" 
                      onMouseDown={() => {
                      setLocation(loc); 
                      setCountry(countryByCity[loc]); 
                      setisEditing(false); 
                    }}>{loc}</span>
                ))}
              </div>

              <h4 className="pb-2">Popular Search In International</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {internationalLocations.map((loc) => (
                  <span className=" border rounded-sm p-1 border-blue-400 text-blue-400 text-xs font-normal cursor-pointer" 
                   onMouseDown={() => {
                      setLocation(loc); 
                      setCountry(countryByCity[loc]);    
                      setisEditing(false); 
                    }}>{loc}</span>
                ))}
              </div>
            </div>
          </div>
          )}
          </div>
          {/* Country */}
        
          {/* Check-in */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LuCalendarRange className="text-gray-500" />
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium">Check-In</p>
            </div>
         {/* <div className="col-span-2 relative py-6 cursor-pointer"> */}
  <div
    className="flex flex-col"
    onClick={() => setCalendarOpen(true)}
  >
   <div className="flex flex-row ">
     <span className="text-2xl font-bold">
      {formatDate(selectedDate)}
    </span>

    <span className="text-sm font-normal pl-2 mt-2">
      {formatMonthYear(selectedDate)}
    </span>
   </div>

    <span className="text-sm">
      {formatDay(selectedDate)}
    </span>
  </div>

  {calendarOpen && (
    <div className="absolute top-full left-0 z-20 mt-4">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={(date) => {
          if (!date) return;
          setSelectedDate(date);
          setCalendarOpen(false);
        }}
        captionLayout="dropdown"
        className="rounded-xl bg-white shadow-lg p-4"
        classNames={{
          day_selected: "bg-blue-500 text-white",
          day_today: "border border-blue-500",
          caption: "flex justify-center gap-2",
        }}
      />
    </div>
  )}
</div>


          {/* Check-out */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LuCalendarRange className="text-gray-500" />
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium">Check-Out</p>
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
          <div className="col-span-1 lg:col-span-2 relative flex flex-col py-6">
            <span className="block text-sm sm:text-base lg:text-lg mb-1 text-gray-500 font-medium">Rooms & Guests</span>

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
              <div className="absolute bg-white shadow-md p-2 rounded-lg w-72 z-10 top-20 mt-4">

                {rooms.map((room, index) => {
                  const isLastRoom = index === rooms.length - 1;

                  return (
                    <div key={index} className="border-b pb-2 mb-3">
                      <h4 className="text-sm  font-semibold">
                        Room {index + 1}
                      </h4>

                      {/* Adults */}
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Adults</span>
                        <div className="flex items-center">
                          <button
                            className="px-2  border rounded bg-slate-100"
                            onClick={() => {
                              const updated = [...rooms];
                              if (updated[index].adults > 1)
                                updated[index].adults--;
                              setRooms(updated);
                            }}
                          >
                            -
                          </button>
                          <span className="px-2  border rounded-0">{room.adults}</span>
                          <button
                            className="px-2  border rounded-none bg-slate-100"
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
                      <div className="flex justify-between items-center ">
                        <span className="text-sm">Children</span>
                        <div className="flex items-center">
                          <button
                            className="px-2  border rounded bg-slate-100"
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
                            className="px-2  border rounded bg-slate-100"
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
                            className="px-3 py-1  border border-green-500 text-green-600 rounded rounded-2xl"
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
                              className="px-2  text-red-500 rounded border border-red-400"
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
              className="col-span-1 sm:col-span-2 lg:col-span-2 h-full bg-[#ef6614] text-white rounded-r-md

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
