import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import image1 from "../../assets/spree-pune.png";

const Hotelcard =  ({ hotels }) => {
    const [Result, setResult] = useState("Popularity");
    const [showdropdown, setshowdropdown] = useState(false)
    const locationData = useLocation();
    const hotelsData = [
      {
      img:image1,
      name:"Zip by Spree Hotels",
      location:"pune",
      price:2000,
      review:4.8,
      nofReview:245,
      star:4,
      amenities:["Restaurant", "Free Wifi", "24-hour Room Service"],
      discount:20,
      tax:182,
      extras:["couple friendly", "Local ID's accepted"]
    },
    {
      img:image1,
      name:"Zip by Spree Hotels",
      location:"pune",
      price:2000,
      review:4.8,
      nofReview:245,
      star:3,
      amenities:["Restaurant", "Free Wifi", "24-hour Room Service"],
      discount:20,
      tax:150,
      extras:["couple friendly", "Local ID's accepted"]
    },
    {
      img:image1,
      name:"Zip by Spree Hotels",
      location:"pune",
      price:2000,
      discount:20,
      review:4.8,
      nofReview:245,
      star:4,
      amenities:["Restaurant", "Free Wifi", "24-hour Room Service"],
      tax:175,
      extras:["kids friendly","Local ID's accepted"]
    }
    ]
const params = new URLSearchParams(locationData.search);

const city = params.get("city");
const getReviewInfo = (review) => {
  if (review >= 4.2) return { label: "Excellent", color: "bg-green-600" };
  if (review >= 3.5) return { label: "Very Good", color: "bg-green-500" };
  if (review >= 3) return { label: "Good", color: "bg-yellow-500" };
  return { label: "Average", color: "bg-gray-400" };
};
  return (
   <div className="max-w-7xl m-auto flex flex-row gap-8">
    <div>
      <div>
        map
      </div>
      <div>
        <input type="text" />
      </div>
      <div className="flex flex-row">
        <span>Filters</span>
        <span>Reset</span>
      </div>
      <div>
        <span>Price</span>
        <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <input type="checkbox" id="price-one" name="price" />
              <label htmlFor="price-one">₹ 1 - ₹ 2,000</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="price-two" name="price" />
              <label htmlFor="price-two">₹ 2,001 - ₹ 4,000</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="price-three" name="price" />
              <label htmlFor="price-three">₹ 4,001 - ₹ 8,000</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="price-four" name="price" />
              <label htmlFor="price-four">₹ 8,001 - ₹ 20,000</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="price-five" name="price" />
              <label htmlFor="price-five">₹ 20,001 - ₹ 30,000</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="price-six" name="price" />
              <label htmlFor="price-six">Above ₹ 30,000</label>
            </li>
          </ul>
      </div>
      <div>
        <span>Star Rating</span>
        <ul>
          <li className="flex items-center gap-2">
              <input type="checkbox" id="five-star" name="rating" />
              <label htmlFor="five-star">5 Star</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="four-star" name="rating" />
              <label htmlFor="four-star">4 Star</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="three-star" name="rating" />
              <label htmlFor="three-star">3 Star</label>
            </li>
        </ul>
      </div>
       <div>
        <span>User Rating</span>
        <ul>
          <li className="flex items-center gap-2">
              <input type="checkbox" id="excellent" name="user-rating" />
              <label htmlFor="excellent">Excellent(4.2+)</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="very-good" name="user-rating" />
              <label htmlFor="very-good">Very Good(3.5+)</label>
            </li>

            <li className="flex items-center gap-2">
              <input type="checkbox" id="good" name="user-rating" />
              <label htmlFor="good">Good(3+)</label>
            </li>
        </ul>
      </div>
    </div>
    {/*Hotel card*/}
    <div>
      <div className="flex flex-col justify-between item-center w-full">
       <div className="flex justify-between ">
        <div >476 Properties found in {city}</div>
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
        {hotelsData.map((hotel, index) => {
         const reviewInfo = getReviewInfo(hotel.review);

  return (
    <div key={index} className="flex flex-row">
     <div>
       <img src={hotel.img} alt={hotel.name} className="w-full h-48 rounded-l-xl" />
     </div>

    <div className="p-4">
      <div >
        <h3 className="text-lg font-semibold ">{hotel.name}</h3>

        {/* Stars */}
        <div className="flex">
          {[...Array(5)].map((_, i) =>
            i < hotel.star ? (
              <MdOutlineStarPurple500 key={i} className="text-blue-500" />
            ) : (
              <MdOutlineStarPurple500 key={i} className="text-gray-300" />
            )
          )}
        </div>
      </div>

      <div>{hotel.location}</div>
      <div className="flex gap-2">
  {hotel.extras.map((extra, index) => (
    <span key={index}>{extra}</span>
  ))}
</div>

      {/* Amenities */}
      <ul>
        {hotel.amenities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
    <div>
      {/* Review */}
      <div className="flex gap-2 items-center">
        <div>{hotel.review}</div>

        <div >
          {reviewInfo.label}
        </div>
        <div>{hotel.nofReview} reviews</div>
      </div>
        <div>
          <div>{hotel.discount}%</div>
          <div className="line-through text-red-500">₹{hotel.price}</div>
          <div> +{hotel.tax} taxes & fees/night </div>
          <div>₹{(hotel.price - (hotel.price * hotel.discount) / 100) + hotel.tax}</div>
        </div>
        <button>View Rooms</button>
    </div>
      
        </div>
    );
  })}
        
        </div>
      </div>
    </div>
   </div>
  );
};

export default Hotelcard;
