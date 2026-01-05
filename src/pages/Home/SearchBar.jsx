import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { LuCalendarRange } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import {useState} from "react"
export default function Searchbar(){
  const [location, setLocation] = useState("Bangalore");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [Guestopen, setGuestopen] = useState(false);
  const guests = adults + children;

  return(
    <>
    <div className="bg-gradient-to-r from-[#2f80ed] to-[#56ccf2]  pt-10 pb-20 ">
      <h1 className="text-2xl font-bold text-white text-right px-10 mb-6">Same hotel, Cheapest price. Guaranteed!</h1>
      {/* search place */}
      <div className=" max-w-7xl mx-auto px-2">
        <div className="bg-white rounded-xl shadow-lg flex relative px-4 py-4">
           <div className="flex flex-col w-70 ">
            <div className="flex flex-row items-center gap-2 ">
              <span><HiOutlineBuildingOffice2 /></span>
              <p className="text-sm w-70 ">Enter City Name, Location, or Specific hotel</p>
            </div>
            <div>
              <input type="text"
              className="w-full border-0 outline-none focus:outline-none bg-transparent shadow-md p-3"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              />
            </div>
           </div>

           <div className="px-10 flex flex-col">
             <div className="flex flex-row items-center gap-2">
              <span><LuCalendarRange /></span>
              <p className="text-sm">Check-In</p>
             </div>
             <div>
              <input type="date" name="check-in" id="check-in" 
              value={checkInDate} 
              onChange={(e) => setCheckInDate(e.target.value)} />
             </div>
           </div>

           <div className="px-10 flex flex-col">
             <div className="flex flex-row items-center gap-2">
              <span><LuCalendarRange /></span>
              <p className="text-sm">Check-Out</p>
             </div>
             <div>
              <input type="date" name="check-out" id="check-out" 
              value={checkOutDate} 
              onChange={(e) => setCheckOutDate(e.target.value)} />
             </div>
           </div>

           <div>
            <div>
              <span>Rooms & Guest</span>
              <div className="flex flex-row items-center gap-2 cursor-pointer"
              onClick={() => setGuestopen(!Guestopen)}
              >
                <p>{rooms} Room {guests} Guests</p>
                <span><RiArrowDropDownLine /></span>
              </div>
               
               <div className="relative">
                {Guestopen && (
                  <div className="absolute bg-white shadow-md p-4 rounded-lg w-50 z-10">
                    <h4>Room {rooms}:</h4>

                    <div>
                      <span>Adults</span>
                      <span>(Above 12 years)</span>
                      <div className="flex items-center mb-4">
                        <button onClick={() => setAdults(adults - 1)}>-</button>
                        <span className="px-2">{adults}</span>
                        <button onClick={() => setAdults(adults + 1)}>+</button>
                      </div>
                   </div>

                      <div>
                        <span>Children</span>
                         <span>(Below 12 years)</span>
                        <div className="flex items-center">
                          <button onClick={() => setChildren(children - 1)}>-</button>
                          <span className="px-2">{children}</span>
                          <button onClick={() => setChildren(children + 1)}>+</button>
                        </div>
                      </div>

                     <div>
                      <button onClick={setRooms(rooms + 1)}>Add Room</button>
                     <button onClick={setRooms(rooms-1)}>Remove Room</button>
                     </div>
                     
                    <button>Done</button>
                </div>
                )}
               </div>

            </div>
           </div>

           <div className="bg-[#ef6614] text-white text-center">
            SEARCH
           </div>
        </div>
      </div>
    </div>
    </>
  )
}