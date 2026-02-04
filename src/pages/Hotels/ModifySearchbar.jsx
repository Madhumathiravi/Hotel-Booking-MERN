// import { IoMdSearch } from "react-icons/io";
// export default function Searchbar(){
//    return(
//      <>
//     <div className="w-full h-24 bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] ">
//        <div className="max-w-7xl mx-auto pt-4">
//             <div className="bg-white flex flex-row justify-between rounded-sm  ">
//             <div className="flex flex-col">
//                 <span>City name, Location or Specfic hotels</span>
//                 <input type="text" className="outline-none rounded-md" />
//             </div>
//             <span className="text-center ">
//                 <IoMdSearch />
//             </span>
//             </div>

//             <div>
//                 <span>Check-In</span>
//                 input
//             </div>
//         </div>
//     </div>
//     </>
//    )
// }

import { IoMdSearch } from "react-icons/io";
import { useHotelSearch } from "../../hooks/useHotelSearch";

export default function ModifySearchBar() {
  const {
    location,
    setLocation,
    guests,
    rooms,
    searchHotels,
  } = useHotelSearch();

  return (
    <div className="w-full bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-md flex items-center justify-between p-4 gap-4">

          {/* Location */}
          <div className="flex flex-col flex-1">
            <span className="text-xs text-gray-500">
              City, location or hotel
            </span>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="outline-none font-semibold"
            />
          </div>

          {/* Rooms & Guests */}
          <div className="text-sm">
            <strong>{rooms.length}</strong> Room ·{" "}
            <strong>{guests}</strong> Guests
          </div>

          {/* Button */}
          <button
            onClick={searchHotels}
            className="bg-[#ef6614] text-white px-6 py-2 rounded-md flex items-center gap-2 font-bold"
          >
            <IoMdSearch />
            MODIFY SEARCH
          </button>

        </div>
      </div>
    </div>
  );
}
