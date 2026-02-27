import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
// import image1 from "../../assets/spree-pune.png";
function HotelResult({hotels = []}){
    
    const [Result, setResult] = useState("Popularity");
    const [showdropdown, setshowdropdown] = useState(false)
       const locationData = useLocation();

  const params = new URLSearchParams(locationData.search);

  const city = params.get("city");
    
// const params = new URLSearchParams(locationData.search);


const getReviewInfo = (review) => {
  if (review >= 4.2) return { label: "Excellent", color: "bg-green-600" };
  if (review >= 3.5) return { label: "Very Good", color: "bg-green-500" };
  if (review >= 3) return { label: "Good", color: "bg-yellow-500" };
  return { label: "Average", color: "bg-gray-400" };
};
    return(

    <div>
      <div className="flex flex-col justify-between item-center w-full ">
       <div className="flex justify-between ">
        <div className="font-bold" >476 Properties found in {city}</div>
         <div  className="relative">
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
            <div className="border border-1 p-2 rounded-lg shadow-md absolute bordered bg-white shadow-md">
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
         
      <div className="flex flex-col">
        {hotels.map((hotel, index) => {
           console.log("HOTEL OBJECT:", hotel);
         const reviewInfo = getReviewInfo(hotel.review);
        

  return (
    <div key={index} className="flex items-stretch m-4 border border-gray-300 rounded-xl w-full">
     <div className="w-64 flex-shrink-0">
  {/* <img
    src={hotel.imgage1}
    alt={hotel.name}
    className="w-full h-full object-cover rounded-l-xl"
  /> */}
  {/* <img src={hotel.images?.[0]} alt={hotel.name} /> */}
  <img
  src={`http://localhost:5000${hotel.images?.[0]}`}
  alt={hotel.name}
  className="w-full h-full object-cover rounded-l-xl"
/>

</div>

    <div className="p-2">
      <div >
        <h3 className="text-lg font-bold ">{hotel.name}</h3>


        <div className="flex">
  {[...Array(5)].map((_, i) =>
    i < Math.floor(hotel.rating) ? (
      <MdOutlineStarPurple500 key={i} className="text-blue-500" />
    ) : (
      <MdOutlineStarPurple500 key={i} className="text-gray-300" />
    )
  )}
</div>
      </div>

      <div className="text-blue-500 text-sm">{hotel.location}</div>
      <div className="flex gap-2">
  {hotel.extras.map((extra, index) => (
    <span key={index} className="text-sm border border-[#aeb9c43a] bg-[#d3dce248] ml-2">{extra}</span>
  ))}
</div>


<div className="flex flex-wrap gap-3 text-xs">
  {hotel.amenities.map((item, i) => (
    <div key={i} className="flex items-center gap-1">
      <div className="h-1 w-1 bg-black rounded-full"></div>
      <span>{item}</span>
    </div>
  ))}
</div>
    </div>
    <div>
      {/* Review */}
        <div className="flex flex-col justify-between h-full mt-4">
           <div className="flex  gap-2 items-center">
        <div className="border bg-green-600 text-white rounded-tr-md rounded-bl-md p-1">{hotel.review}</div>

        <div >
          <div className="text-sm font-semibold">{reviewInfo.label}</div>
           <div className="text-xs text-gray-700">{hotel.nofReview} reviews</div>
        </div>
       
      </div>
        <div className="flex flex-col h-full p-4">
          <div className="flex">
            <div className="text-[14px] bg-red-500 text-white p-1">-{hotel.discount}%</div>
          <div className="line-through text-red-500 text-[14px] p-1">₹{hotel.price}</div>
          </div>
          <div> +{hotel.tax} taxes & fees/night </div>
          <div>₹{(hotel.price - (hotel.price * hotel.discount) / 100) + hotel.tax}</div>
             <button>View Rooms</button>
        </div>
       
        </div>
    </div>
  </div>
    );
  })}
        
        </div>
      </div>
    </div>
    )
}
export default HotelResult;