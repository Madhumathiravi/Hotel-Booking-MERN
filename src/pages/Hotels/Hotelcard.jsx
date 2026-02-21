import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";


const Hotelcard =  ({ hotels }) => {
    const [Result, setResult] = useState("Popularity");
    const [showdropdown, setshowdropdown] = useState(false)
  return (
    // <div className="max-w-6xl mx-auto px-4">
    //   <h2>Available Hotels</h2>

    //   {hotels.length === 0 ? (
    //     <p>No hotels found</p>
    //   ) : (
    //     <div style={{ display: "grid", gap: "20px" }}>
    //       {hotels.map((hotel) => (
    //         <div
    //           key={hotel._id}
    //           style={{
    //             border: "1px solid #ddd",
    //             borderRadius: "10px",
    //             overflow: "hidden",
    //             maxWidth: "500px",
    //           }}
    //         >
    //           {/* ✅ HOTEL IMAGE */}
    //           <img
    //             src={hotel.images?.[0]}
    //             alt={hotel.name}
    //             style={{ width: "100%", height: "294px", objectFit: "cover" }}
    //           />

    //           <div style={{ padding: "12px" }}>
    //             <h3>{hotel.name}</h3>
    //             <p>{hotel.city}</p>
    //             <p>⭐ {hotel.rating}</p>
    //             <p>
    //               From <b>₹{hotel.rooms?.[0]?.basePrice}</b> / night
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <div className="max-w-7xl mx-auto px-4 font-poppins">
       <div className="flex justify-between mt-4">
         <h1>Available Hotels</h1>
         <div>
          <div className="border border-1 p-2 rounded-lg shadow-md px-[10px] py-[8px] cursor-pointer flex flex-row item-center gap-2">
            <span 
          onClick={() => setshowdropdown(!showdropdown)}
          >{Result}</span>
          <IoIosArrowDown 
          className={`transition-transform duration-300 ${
          showdropdown ? "rotate-180" : "rotate-0"
        }`}
          />
          </div>
          {showdropdown && (
            <div className="border border-1 p-2 rounded-lg shadow-md">
           <ul className="text-sm">
            <li className="p-2">
               <input type="radio" name="sort" id="popularity"
               value="Popularity"
               checked={Result === "Popularity"}
               onChange={(e) => setResult(e.target.value)}
               />
            <label htmlFor="popularity">Popularity</label>
            </li>
            <li className="p-2">
               <input type="radio" name="sort" id="low" 
               value="Price Low to High"
               checked={Result === "Price Low to High"}
               onChange={(e) => setResult(e.target.value)}
               />
            <label htmlFor="low">Price </label>
            <div className="text-gray-500 text-sm">
              Low to High
            </div>
            </li>
            <li className="p-2">
               <input type="radio" name="sort" id="high" 
               value="Price High to Low"
               checked={Result === "Price High to Low"}
               onChange={(e) => setResult(e.target.value)}
               />
            <label htmlFor="high">Price </label>
            <div className="text-gray-500 text-sm">
              High to Low
            </div>
            </li>
          </ul>
         </div>
          )}
         </div>
       </div>
       <div>
        
       </div>
    </div>
  );
};

export default Hotelcard;
