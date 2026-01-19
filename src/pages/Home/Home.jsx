import SearchBar from "./SearchBar";
import ImageSlider from "./ImageSlider";
import ExclusiveOffers from "./ExclusiveOffers.jsx";
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
        <ExclusiveOffers/>
       </div>
      </div>

    )
}