import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
// import image1 from "../assets/spree-pune.png"

const Hotelcard =  ({ hotels }) => {
    const [Result, setResult] = useState("Popularity");
    const [showdropdown, setshowdropdown] = useState(false)
    const locationData = useLocation();

const params = new URLSearchParams(locationData.search);

const city = params.get("city");
  return (
   <div className="max-w-7xl m-auto">
      <div className="flex flex-row gap-6">
        <div className="w-72 shrink-0">
        <div>
            <input type="text" />
            <span>Filters</span>
            <div>Reset</div>
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
      </div>
      
      <div>
        <div className="flex flex-row">
          <span>476 Properties found in {city}</span>
          <div  className="flex justify-between mt-4">
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
      </div>
      </div>
    </div>
  );
};

export default Hotelcard;
