
import Filters from "./Filters.jsx"
import HotelResult from "./Hotels.jsx";
function Hotelcard(){
  return (
   <div className="max-w-7xl m-auto flex flex-row gap-8 font-poppins mt-4">
     <Filters />
    <HotelResult />
   </div>
  );
};

export default Hotelcard;
