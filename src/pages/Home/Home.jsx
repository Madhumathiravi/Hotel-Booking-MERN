import SearchBar from "./SearchBar";
import ImageSlider from "./ImageSlider";
import Exclusive from "./Exclusive";
export default function Home(){
    return(
      <div>
         <div>
         <SearchBar />
       </div>

       <div  className="py-10">
        <ImageSlider />
       </div>

       <div>
        <Exclusive/>
       </div>
      </div>

    )
}