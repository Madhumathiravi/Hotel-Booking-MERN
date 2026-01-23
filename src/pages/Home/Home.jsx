import SearchBar from "./SearchBar";
import ImageSlider from "./ImageSlider";
import Exclusive from "./Exclusive.jsx";
import HotelsChoice from "./HotelsChoice.jsx";
import EveryMood from "./EveryMood.jsx";
import Popular from "./Popular.jsx";
import HotelChain from "./HotelChain.jsx";
import Mobile from "./Mobile.jsx"
export default function Home(){
    return(
      <div>
         <div >
         <SearchBar />
       </div>

       <div  className="py-10">
        <ImageSlider />
       </div>

       <div>
        <Exclusive/>
       </div>
       <div>
        <HotelsChoice/>
       </div>

       <div>
        <EveryMood/>
       </div>

       <div>
        <Popular/>
       </div>
       
       <div>
        <HotelChain/>
       </div>

       <div>
        <Mobile/>
       </div>
      </div>

    )
}