import { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function SearchBar() {
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-white rounded-xl shadow-lg flex flex-wrap items-center p-4 gap-4 max-w-7xl w-full">

        {/* CITY INPUT */}
        <div className="flex-1 min-w-[230px]">
          <label className="text-gray-500 text-sm flex items-center gap-2">
            <HiOutlineBuildingOffice2 size={18} />
            Enter City
          </label>
          <input
            type="text"
            placeholder="Bangalore"
            className="w-full font-semibold text-lg focus:outline-none mt-1"
          />
          <p className="text-gray-500 text-sm">India</p>
        </div>

        {/* CHECK-IN */}
        <div className="border-l pl-4 flex-1 min-w-[180px]">
          <label className="text-gray-500 text-sm flex items-center gap-2">
            <IoCalendarOutline size={18} />
            Check-In
          </label>
          <input
            type="date"
            className="w-full font-semibold text-lg mt-1 focus:outline-none"
          />
        </div>

        {/* CHECK-OUT */}
        <div className="border-l pl-4 flex-1 min-w-[180px]">
          <label className="text-gray-500 text-sm flex items-center gap-2">
            <IoCalendarOutline size={18} />
            Check-Out
          </label>
          <input
            type="date"
            className="w-full font-semibold text-lg mt-1 focus:outline-none"
          />
        </div>

        {/* ROOMS & GUESTS DROPDOWN */}
        <div className="border-l pl-4 relative min-w-[200px]">
          <label className="text-gray-500 text-sm">Rooms & Guests</label>

          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-full text-left font-semibold text-lg mt-1 flex items-center gap-2"
          >
            {rooms} Room {guests} Guests
            <IoPeopleOutline />
          </button>

          {openDropdown && (
            <div className="absolute top-20 left-0 bg-white shadow-lg rounded-xl p-4 w-56 z-20">
              {/* Rooms */}
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Rooms</h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{rooms}</span>
                  <button
                    onClick={() => setRooms(rooms + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Guests */}
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Guests</h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{guests}</span>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SEARCH BUTTON */}
        <button
          className="bg-orange-500 text-white font-semibold px-10 py-4 rounded-lg hover:bg-orange-600 transition-all"
        >
          SEARCH
        </button>

      </div>
    </div>
  );
}

