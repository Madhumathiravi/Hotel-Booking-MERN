import { IoMdSearch } from "react-icons/io";
export default function Searchbar(){
   return(
     <>
    <div className="w-full h-24 bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] ">
       <div className="max-w-7xl mx-auto pt-4">
            <div className="bg-white flex flex-row justify-between rounded-sm  ">
            <div className="flex flex-col">
                <span>City name, Location or Specfic hotels</span>
                <input type="text" className="outline-none rounded-md" />
            </div>
            <span className="text-center ">
                <IoMdSearch />
            </span>
            </div>
        </div>
    </div>
    </>
   )
}