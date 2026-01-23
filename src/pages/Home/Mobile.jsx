import mobile from "../../assets/mobile/mobile.webp";
import googleplay from "../../assets/mobile/google-play.png"
import applestore from "../../assets/mobile/apple-store.webp"
import qrcode from "../../assets/mobile/r-code.svg"
import { FaStar, FaStarHalfAlt,  } from "react-icons/fa";
import leafleft from "../../assets/mobile/leaf-left.png"
import leafright from "../../assets/mobile/leaf-right.png"
import { MdPerson } from "react-icons/md";

export default function Mobile(){
    return(
        <div className=" w-full bg-stone-100 font-poppins py-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
                      <div className="flex flex-row gap-6">
                 <div className="w-80 h-80 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full flex items-center justify-center">
                       <img src={mobile} alt="Mobile" className="w-64 " />
                </div>
                
            

            <div className="pt-10">
                <h4 className="font-bold">Highest-rated mobile app</h4>
                <div className="flex flex-row mt-4 border-r border-black pr-4">
                    <div className="flex flex-col gap-4 mr-2">
                        <p className="text-4xl font-bold">4.6</p>
                        <div className="flex gap-1 text-gray-600">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <div className="flex flex-row">
                        <MdPerson />
                        <p>4,83,456</p>
                       </div>

                    </div>
                    <div>
                        <div className="flex flex-row gap-2">
                            <span>5</span>
                            <div className="bg-green-600 w-24 h-4"></div>
                        </div>
                         <div className="flex flex-row gap-2">
                            <span>4</span>
                            <div className=" bg-green-400 w-12 h-4"></div>
                        </div>
                         <div className="flex flex-row gap-2">
                            <span>3</span>
                            <div className=" bg-yellow-300 w-8 h-4"></div>
                        </div>
                         <div className="flex flex-row gap-2">
                            <span>2</span>
                            <div className="bg-red-600 w-4 h-4"></div>
                        </div>
                         <div className="flex flex-row gap-2">
                            <span>1</span>
                            <div className="bg-red-400 w-2 h-4"></div>
                        </div>
                    </div>
                       
                </div>
            </div>
            <div className="w-72 pt-10">
                <h4 className="font-bold text-center ml-2">Trusted By</h4>
                <div className="flex flex-row">
                    <img src={leafleft} alt="" />
                    <p className="font-bold text-xl pt-6 w-32">30 million+ Customers</p>
                    <img src={leafright} alt="" />
                </div>
            </div>

            <div className="flex flex-col">
               <div>
                 <h4 className="font-bold pb-2">Download EaseMyTrip App</h4>
                <div className="w-72 border-dashed border-2 border-green-300 rounded-lg bg-green-200 pb-2">
                    <p className="text-xs px-2">Save Up to Rs.5000 OFF on your first hotel booking: EMTGREET</p>
                </div>
               </div>
               <div>
                <p className="mt-2">For Hassle-Free Hotel Booking</p>
                <div className="flex flex-row">
                   <div>
                     <img src={googleplay} className="w-36 py-2" />
                    <img src={applestore}  className="w-36" />
                   </div>
                    <div>
                        <img src={qrcode} className="w-28" />
                    </div>
                </div>
               </div>
            </div>
            </div>
            </div>
        </div>
    )
}