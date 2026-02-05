import SearchBar from "./SearchBar";
import ImageSlider from "./ImageSlider";
import Exclusive from "./Exclusive.jsx";
import HotelsChoice from "./HotelsChoice.jsx";
import EveryMood from "./EveryMood.jsx";
import Popular from "./Popular.jsx";
import HotelChain from "./HotelChain.jsx";
import Mobile from "./Mobile.jsx"
import Deals from "./Deals.jsx"
import WhyBook from "./WhyBook.jsx";
import Faq from "./Faq.jsx";
export default function Home(props){
    return(
      <div>
         <div >
         <SearchBar
           location={props.location}
           setLocation={props.setLocation}
           rooms={props.rooms}
           setRooms={props.setRooms}
           checkInDate={props.checkInDate}
           setCheckInDate={props.setCheckInDate}
           checkOutDate={props.checkOutDate}
           setCheckOutDate={props.setCheckOutDate}
         />
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

       <div>
        <Deals/>
       </div>
       <div>
        <WhyBook/>
       </div>
       <div>
        <Faq/>
       </div>
      </div>

    )
}