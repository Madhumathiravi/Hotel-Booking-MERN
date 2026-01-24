
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import hotel from "../../assets/mobile/hotel-icn.svg";
import wallet from "../../assets/mobile/wallet-icn.svg";
import rating from "../../assets/mobile/rating-icn.svg";
import beach from "../../assets/mobile/beach-icn.svg";
const cards = [
    {img:hotel, title:"Extensive Hotel Options", text:"Best hotels available for different destinations to offer you the stay of a lifetime."},
    {img:wallet, title:"Savings on Hotel Booking",text:" All our hotels have good ratings on Trip Advisor and are recommended by users."},
    {img:rating, title:"Hotel Ratings",text:"All our hotels have good ratings on Trip Advisor and are recommended by users."},
    {img:beach, title:"Best Price",text:"Get excellent hotels/resorts at the best prices to pamper your desires."}
]
const reviews =[
    {title:"Best plan and cheap tickets", text:"Best plan and cheap tickets",name:"Krisan dhab",days:"3days ago"},
    {title:"Great service overall", text:"Great service overall",name:"Shehnaz ansari",days:"3days ago"},
    {title:"Good User Experience", text:"Good User Experience",name:"Diya",days:"3days ago"},
    {title:"Genuine user opinions", text:"Genuine user opinions",name:"Nishar",days:"3days ago"},
    {title:"I had a great experience..", text:"I had a great experience in Booking hotels from easemytrip",name:"Abdul Jamil",days:"January 13"},
    {title:"Booking a Hotel is easy..", text:"Booking a Hotel is easy and can choose best and cheap Hotels",name:"Mohit",days:"January 11"},
    {title:"Amazing customer service...", text:"Amazing customer service and customer care ",name:"Ramya",days:"January 10"},
    {title:"Best Booking service...", text:"Best Booking service and good customer service",name:"Ravi",days:"January 7"}
]
export default function WhyBook() {
  return (
    <div className="font-poppins max-w-6xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-center md:text-left">
          Why Book Hotels with EaseMyTrip.com
        </h2>

        <div className="flex flex-wrap gap-3 items-center justify-center border border-green-300 px-4 py-2 rounded-xl">
          <span className="font-semibold">Great</span>

          <div className="flex gap-1">
            {[1,2,3,4].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-green-500 flex items-center justify-center">
                <FaStar className="text-white text-xs" />
              </div>
            ))}
            <div className="w-4 h-4 border border-gray-300 flex items-center justify-center">
              <FaStar className="text-gray-300 text-xs" />
            </div>
          </div>

          <p className="text-xs underline">15,398 reviews on</p>

          <div className="flex items-center gap-1">
            <FaStar className="text-green-700 text-sm"/>
            <p className="text-xs font-semibold">Trustpilot</p>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {cards.map((card, index) => (
          <div key={index} className="relative text-center">

            {/* ICON */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center shadow">
                <img src={card.img} alt={card.title} className="w-10 h-10" />
              </div>
            </div>

            {/* CARD BODY */}
            <div className="border rounded-xl pt-14 pb-6 px-4 h-full">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.text}</p>
            </div>

          </div>
        ))}
      </div>

       <div>
        <div>
          
            {/* <div className="bg-[#f8f9fa] mt-12 p-6 rounded-xl">
  <div className="flex gap-4 overflow-x-auto">
    {reviews.map((review, index) => (
      <div
        key={index}
        className="bg-white min-w-[250px] p-4 rounded-lg shadow flex flex-col gap-2"
      >
        {/* STARS */}
        {/* <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-green-500 flex items-center justify-center"
            >
              <FaStar className="text-white text-xs" />
            </div>
          ))}
        </div> */}

        {/* CONTENT */}
        {/* <h5 className="font-semibold text-sm">{review.title}</h5>
        <p className="text-sm text-gray-600">{review.text}</p> */}

        {/* FOOTER */}
        {/* <div className="flex justify-between text-xs text-gray-500 mt-auto">
          <span>{review.name}</span>
          <span>{review.days}</span>
        </div>
      </div>
    ))}
  </div>
</div> */} 

       <div className=" mt-12 py-8">
  <div className="max-w-6xl mx-auto px-4">

    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#f8f9fa] p-5 rounded-xl shadow h-full flex flex-col gap-3">

            {/* STARS */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-green-500 flex items-center justify-center"
                >
                  <FaStar className="text-white text-xs" />
                </div>
              ))}
            </div>

            {/* CONTENT */}
            <h5 className="font-semibold text-sm">{review.title}</h5>
            <p className="text-sm text-gray-600">{review.text}</p>

            {/* FOOTER */}
            <div className="flex justify-between text-xs text-gray-500 mt-auto">
              <span>{review.name}</span>
              <span>{review.days}</span>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</div>

            
        </div>
       </div>

    </div>
  );
}
