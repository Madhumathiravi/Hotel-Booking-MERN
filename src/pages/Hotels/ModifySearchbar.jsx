// import { useNavigate } from "react-router-dom";
// import { IoChevronDownOutline } from "react-icons/io5";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import { LuCalendarRange } from "react-icons/lu";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// export default function ModifySearchBar({
//   location,
//   setLocation,
//   rooms,
//   setRooms,
//   checkInDate,
//   setCheckInDate,
//   checkOutDate,
//   setCheckOutDate,
// }) {
//   const [guestOpen, setGuestOpen] = useState(false);
//   const [calendarOpen, setCalendarOpen] = useState(null);

//   const guests = (rooms || []).reduce(
//     (total, room) => total + room.adults + room.children,
//     0
//   );

//   const formatDay = (date) =>
//     date.toLocaleDateString("en-US", { weekday: "long" });

//   // const formatMonthYear = (date) =>
//   //   date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

//   const formatFullDate = (date) => {
//   return date.toLocaleDateString("en-GB"); 
// };

//   const formatDate = (date) => date.getDate();

//   const getTomorrow = () => {
//     const d = new Date();
//     d.setDate(d.getDate() + 1);
//     return d;
//   };

//   const navigate = useNavigate();
//   const handleModifySearch = () => {
//   navigate(
//     `/hotels?city=${location}&checkIn=${checkInDate.toISOString()}&checkOut=${checkOutDate.toISOString()}&guests=${guests}&rooms=${rooms.length}`
//   );
// };
//   return (
//     <div className="w-full bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] py-2 font-poppins">
//       <div className="max-w-7xl mx-auto px-4">
//        <div className="flex flex-row justify-around">
//          <div className="bg-white rounded-md shadow-lg flex flex-col lg:flex-row items-stretch lg:items-center ">
//            {/* LOCATION */}
//           <div className="flex-1 p-2 border-b lg:border-b-0 lg:border">
//             <p className="text-xs text-gray-500">City, location or hotel</p>
//             <input
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="outline-none text-sm"
//             />
//             <span><FaSearch className="text-gray-400" /></span>
//           </div>
//         </div>

//           <div className="bg-white rounded-md shadow-lg flex flex-row items-center overflow-visible">
//             {/* CHECK-IN */}
//           <div className="relative flex-1 p-2  lg:border-b-0 lg:border lg:m-2">
//             <div className="flex items-center gap-2 mb-1 text-gray-500 text-xs">
//               <LuCalendarRange /> Check-In
//             </div>
//             <div
//               onClick={() => setCalendarOpen("checkin")}
//               className="cursor-pointer"
//             >
//               <p className=" text-sm">
//                  {formatFullDate(checkInDate)}
//               </p>
              
//             </div>

//             {calendarOpen === "checkin" && (
//               <>
//                 <div
//                   className="fixed inset-0 z-20"
//                   onClick={() => setCalendarOpen(null)}
//                 />
//                 <div className="absolute z-30 mt-3">
//                   <div className="bg-white shadow-lg rounded-xl p-2">
//                     <DayPicker
//                       mode="single"
//                       selected={checkInDate}
//                       onSelect={(date) => {
//                         if (!date) return;
//                         setCheckInDate(date);
//                         if (checkOutDate <= date) {
//                           const nextDay = new Date(date);
//                           nextDay.setDate(nextDay.getDate() + 1);
//                           setCheckOutDate(nextDay);
//                         }
//                         setCalendarOpen(null);
//                       }}
//                       disabled={{ before: getTomorrow() }}
//                     />
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* CHECK-OUT */}
//           <div className="relative flex-1 p-2
//            lg:border-b-0 lg:border-r">
//             <div className="flex items-center gap-2 mb-1 text-gray-500 text-xs">
//               <LuCalendarRange /> Check-Out
//             </div>
//             <div
//               onClick={() => setCalendarOpen("checkout")}
//               className="cursor-pointer"
//             >
//               <p className=" text-sm">
//                 {formatFullDate(checkOutDate)}
//               </p>
 
//             </div>

//             {calendarOpen === "checkout" && (
//               <>
//                 <div
//                   className="fixed inset-0 z-20"
//                   onClick={() => setCalendarOpen(null)}
//                 />
//                 <div className="absolute z-30 mt-3">
//                   <div className="bg-white shadow-lg rounded-xl p-4">
//                     <DayPicker
//                       mode="single"
//                       selected={checkOutDate}
//                       onSelect={(date) => {
//                         if (!date || date <= checkInDate) return;
//                         setCheckOutDate(date);
//                         setCalendarOpen(null);
//                       }}
//                       disabled={{
//                         before: (() => {
//                           const d = new Date(checkInDate);
//                           d.setDate(d.getDate() + 1);
//                           return d;
//                         })(),
//                       }}
//                     />
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//           </div>
//            <div className="bg-white rounded-md shadow-lg flex flex-col lg:flex-row items-stretch lg:items-center overflow-visible">
//                  {/* ROOMS & GUESTS */}
//           <div className="relative flex-1 p-4 border-b lg:border-b-0 lg:border-r">
//             <p className="text-xs text-gray-500 mb-1">Rooms & Guests</p>
//             <div
//               className="cursor-pointer  flex items-center justify-between"
//               onClick={() => setGuestOpen(!guestOpen)}
//             >
//               <span>{rooms.length} Room · {guests} Guests</span>
//               <IoChevronDownOutline />
//             </div>

//             {guestOpen && (
//               <div className="absolute bg-white shadow-lg rounded-xl p-4 w-72 z-30 mt-3">
//                 {rooms.map((room, index) => (
//                   <div key={index} className="mb-4 border-b pb-2">
//                     <p className=" text-sm mb-2">Room {index + 1}</p>

//                     {/* Adults */}
//                     <div className="flex justify-between items-center mb-2">
//                       <span>Adults</span>
//                       <div className="flex gap-2">
//                         <button onClick={() => {
//                           const updated = [...rooms];
//                           if (updated[index].adults > 1) updated[index].adults--;
//                           setRooms(updated);
//                         }}>-</button>
//                         <span>{room.adults}</span>
//                         <button onClick={() => {
//                           const updated = [...rooms];
//                           updated[index].adults++;
//                           setRooms(updated);
//                         }}>+</button>
//                       </div>
//                     </div>

//                     {/* Children */}
//                     <div className="flex justify-between items-center">
//                       <span>Children</span>
//                       <div className="flex gap-2">
//                         <button onClick={() => {
//                           const updated = [...rooms];
//                           if (updated[index].children > 0) updated[index].children--;
//                           setRooms(updated);
//                         }}>-</button>
//                         <span>{room.children}</span>
//                         <button onClick={() => {
//                           const updated = [...rooms];
//                           updated[index].children++;
//                           setRooms(updated);
//                         }}>+</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//                 <button
//                   className="w-full  py-2 bg-[#ef6614] text-white rounded-lg"
//                   onClick={() => setGuestOpen(false)}
//                 >
//                   Done
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//          <div >
          
//         </div> 

//           {/* BUTTON */}
//           <div className="flex justify-center">
//             <button className="bg-[#2093ef] text-white px-2 rounded-full text-sm font-semibold whitespace-nowrap border border-white"
//             onClick={handleModifySearch}>
//               Modify Search
//             </button>
//           </div>
//        </div>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { LuCalendarRange } from "react-icons/lu";
import { useState } from "react";

export default function ModifySearchBar({
  location,
  setLocation,
  rooms,
  setRooms,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}) {
  const [guestOpen, setGuestOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(null);

  const guests = (rooms || []).reduce(
    (total, room) => total + room.adults + room.children,
    0
  );

  const formatFullDate = (date) =>
    date.toLocaleDateString("en-GB");

  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  };

  const navigate = useNavigate();

  const handleModifySearch = () => {
    navigate(
      `/hotels?city=${location}&checkIn=${checkInDate.toISOString()}&checkOut=${checkOutDate.toISOString()}&guests=${guests}&rooms=${rooms.length}`
    );
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] py-2">
      <div className="max-w-6xl mx-auto px-4">

        {/* MAIN CONTAINER */}
        <div className="g-gradient-to-r from-[#2f80ed] to-[#56ccf2]rounded-md shadow-lg flex items-stretch gap-2 ">

          {/* LOCATION */}
          <div className="flex-1 px-3 py-2 border rounded-md bg-white">
            <p className="text-[11px] text-gray-500">
              City, location or hotel
            </p>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none text-sm font-medium"
            />
          </div>

          {/* CHECK-IN + CHECK-OUT (ATTACHED) */}
          <div className="flex-1 flex border rounded-md overflow-hidden relative">

            {/* CHECK-IN */}
            <div
              className="flex-1 px-3 py-2 border-r cursor-pointer bg-white"
              onClick={() => setCalendarOpen("checkin")}
            >
              <p className="text-[11px] text-gray-500 flex items-center gap-1">
                <LuCalendarRange size={14} /> Check-In
              </p>
              <p className="text-sm font-medium">
                {formatFullDate(checkInDate)}
              </p>
            </div>

            {/* CHECK-OUT */}
            <div
              className="flex-1 px-3 py-2 cursor-pointer bg-white"
              onClick={() => setCalendarOpen("checkout")}
            >
              <p className="text-[11px] text-gray-500 flex items-center gap-1">
                <LuCalendarRange size={14} /> Check-Out
              </p>
              <p className="text-sm font-medium">
                {formatFullDate(checkOutDate)}
              </p>
            </div>

            {/* CALENDAR */}
            {calendarOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setCalendarOpen(null)}
                />
                <div className="absolute top-full mt-2 z-30 bg-white shadow-lg rounded-xl p-4">
                  <DayPicker
                    mode="single"
                    selected={
                      calendarOpen === "checkin"
                        ? checkInDate
                        : checkOutDate
                    }
                    onSelect={(date) => {
                      if (!date) return;

                      if (calendarOpen === "checkin") {
                        setCheckInDate(date);
                        if (checkOutDate <= date) {
                          const next = new Date(date);
                          next.setDate(next.getDate() + 1);
                          setCheckOutDate(next);
                        }
                      } else {
                        if (date > checkInDate) {
                          setCheckOutDate(date);
                        }
                      }

                      setCalendarOpen(null);
                    }}
                    disabled={{
                      before:
                        calendarOpen === "checkin"
                          ? getTomorrow()
                          : new Date(
                              checkInDate.getTime() + 24 * 60 * 60 * 1000
                            ),
                    }}
                  />
                </div>
              </>
            )}
          </div>

          {/* ROOMS */}
          <div className="flex-1 px-3 py-2 border rounded-md relative bg-white">
            <p className="text-[11px] text-gray-500">
              Rooms & Guests
            </p>

            <div
              className="flex items-center justify-between text-sm font-medium cursor-pointer"
              onClick={() => setGuestOpen(!guestOpen)}
            >
              <span>
                {rooms.length} Room · {guests} Guests
              </span>
              <IoChevronDownOutline />
            </div>

            {guestOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-xl p-4 w-72 z-30">
                {rooms.map((room, index) => (
                  <div key={index} className="mb-4 border-b pb-2">
                    <p className="text-sm mb-2">
                      Room {index + 1}
                    </p>

                    <div className="flex justify-between mb-2">
                      <span>Adults</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            const updated = [...rooms];
                            if (updated[index].adults > 1)
                              updated[index].adults--;
                            setRooms(updated);
                          }}
                        >
                          -
                        </button>
                        <span>{room.adults}</span>
                        <button
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

                    <div className="flex justify-between">
                      <span>Children</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            const updated = [...rooms];
                            if (updated[index].children > 0)
                              updated[index].children--;
                            setRooms(updated);
                          }}
                        >
                          -
                        </button>
                        <span>{room.children}</span>
                        <button
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
                  </div>
                ))}

                <button
                  className="w-full py-2 bg-[#ef6614] text-white rounded-lg"
                  onClick={() => setGuestOpen(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* BUTTON */}
          <div className="flex items-center bg-[#56ccf2">
            <button
              onClick={handleModifySearch}
              className="bg-[#56ccf2] text-white px-4 py-2 rounded-full whitespace-nowrap border border-white rounded"
            >
              Modify Search
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}