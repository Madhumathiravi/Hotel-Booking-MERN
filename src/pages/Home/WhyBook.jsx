import { FaStar } from "react-icons/fa";
import hotel from "../../assets/mobile/hotel-icn.svg";
import wallet from "../../assets/mobile/wallet-icn.svg";
import rating from "../../assets/mobile/rating-icn.svg";
import beach from "../../assets/mobile/beach-icn.svg";
export default function WhyBook(){
    return(
        <div>
            <div>
                <h2>Why Book Hotels with EaseMyTrip.com</h2>
                <div>
                    <span>Great</span>
                    <div className="w-4 h-4 bg-green-500 flex items-center justify-center rounded-sm">
                        <FaStar className="text-white text-sm w-4" />
                        </div>

                </div>
            </div>
        </div>
    )
}