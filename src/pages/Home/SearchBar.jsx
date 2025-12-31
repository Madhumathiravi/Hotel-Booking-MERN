import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
export default function Searchbar(){
  return(
    <>
    <div className="bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] w-100 p-20">
      <h1>Same hotel, Cheapest price. Guaranteed!</h1>
      {/* search place */}
      <div className="">
        <div>
           <div className="flex flex-column bg-yellow-100">
            <div className="flex flex-row">
              <span><HiOutlineBuildingOffice2 /></span>
              <p>Enter City Name, Location, or Specific hotel</p>
            </div>
            <div>
              <input type="text" />
            </div>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}