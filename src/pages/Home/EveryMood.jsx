

// // // // import resort from "../../assets/everymood/resort.jpg";
// // // // import wildlife from "../../assets/everymood/wildlife.jpg";
// // // // import mountain from "../../assets/everymood/mountain.jpg";
// // // // import monsoon from "../../assets/everymood/monsoon.jpg";
// // // // import pilgrimage from "../../assets/everymood/pilgrimage.jpg";
// // // // import beach from "../../assets/everymood/beach.jpeg";
// // // // import desert from "../../assets/everymood/desert.jpg";
// // // // import { FaArrowRight } from "react-icons/fa";

// // // // export default function EveryMood() {
// // // //   const moodCards = [
// // // //     { img: wildlife, title: "Wildlife Adventure" },
// // // //     { img: monsoon, title: "Monsoon Magic" },
// // // //     { img: mountain, title: "Mountain Calling" },
// // // //     { img: beach, title: "Beach Vacations" },
// // // //     { img: desert, title: "Mystic Deserts" },
// // // //     { img: pilgrimage, title: "Pilgrimage Peace" },
// // // //   ];

// // // //   return (
// // // //     <div
// // // //       className="mt-5 py-10 bg-cover bg-center bg-no-repeat"
// // // //       style={{ backgroundImage: `url(${resort})` }}
// // // //     >
// // // //       <div className="max-w-7xl mx-auto px-4 text-center">
// // // //         <h2 className="text-3xl font-bold">
// // // //           Book Hotels For Every Mood
// // // //         </h2>
// // // //         <p className="mt-2 text-lg font-semibold">
// // // //           Curated Escapes for Your Curious Soul!
// // // //         </p>

// // // //         {/* SLIDER */}
// // // //         <div
// // // //           className="
// // // //             mt-8
// // // //             flex gap-4
// // // //             overflow-x-auto
// // // //             scroll-smooth
// // // //             snap-x snap-mandatory
// // // //             scrollbar-hide
// // // //           "
// // // //         >
// // // //           {moodCards.map((card, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="
// // // //                 snap-start
// // // //                 flex-shrink-0
// // // //                 w-full
// // // //                 sm:w-1/2
// // // //                 lg:w-1/3
// // // //               "
// // // //             >
// // // //               <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
// // // //                 <img
// // // //                   src={card.img}
// // // //                   alt={card.title}
// // // //                   className="w-full h-full object-cover"
// // // //                 />

// // // //                 {/* Overlay */}
// // // //                 <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
// // // //                   <h5 className="text-white text-lg font-semibold">
// // // //                     {card.title}
// // // //                   </h5>
// // // //                   <span className="flex items-center gap-2 text-white text-sm mt-1">
// // // //                     Explore Now <FaArrowRight />
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import resort from "../../assets/everymood/resort.jpg";
// // // import wildlife from "../../assets/everymood/wildlife.jpg";
// // // import mountain from "../../assets/everymood/mountain.jpg";
// // // import monsoon from "../../assets/everymood/monsoon.jpg";
// // // import pilgrimage from "../../assets/everymood/pilgrimage.jpg";
// // // import beach from "../../assets/everymood/beach.jpeg";
// // // import desert from "../../assets/everymood/desert.jpg";
// // // import { FaArrowRight } from "react-icons/fa";
// // // import { useRef } from "react";

// // // export default function EveryMood() {
// // //   const sliderRef = useRef(null);

// // //   const moodCards = [
// // //     { img: wildlife, title: "Wildlife Adventure" },
// // //     { img: monsoon, title: "Monsoon Magic" },
// // //     { img: mountain, title: "Mountain Calling" },
// // //     { img: beach, title: "Beach Vacations" },
// // //     { img: desert, title: "Mystic Deserts" },
// // //     { img: pilgrimage, title: "Pilgrimage Peace" },
// // //   ];

// // //   const scroll = (dir) => {
// // //     sliderRef.current.scrollBy({
// // //       left: dir === "left" ? -260 : 260, // slide ONE card
// // //       behavior: "smooth",
// // //     });
// // //   };

// // //   return (
// // //     <div
// // //       className="relative mt-5 py-10 bg-cover bg-center bg-no-repeat opacity-50"
// // //       style={{ backgroundImage: `url(${resort})` }}
// // //     >
// // //       {/* BACKGROUND TRANSPARENCY */}
// // //       <div className="absolute inset-0 bg-black/40"></div>

// // //       <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
// // //         <h2 className="text-3xl font-bold">
// // //           Book Hotels For Every Mood
// // //         </h2>
// // //         <p className="mt-2 text-lg font-semibold">
// // //           Curated Escapes for Your Curious Soul!
// // //         </p>

// // //         {/* SLIDER */}
// // //         <div className="relative mt-8 ">
// // //           <div
// // //             ref={sliderRef}
// // //             className="
// // //               flex gap-4
// // //               overflow-x-auto
// // //               scroll-smooth
// // //               snap-x snap-mandatory
// // //               scrollbar-hide
              
// // //             "
// // //           >
// // //             {moodCards.map((card, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="
// // //                   snap-start
// // //                   flex-shrink-0
// // //                   w-[240px]
                  
// // //                 "
// // //               >
// // //                 <div className="relative h-[240px] rounded-xl overflow-hidden shadow-lg bg-white ">

// // //                   <img
// // //                     src={card.img}
// // //                     alt={card.title}
// // //                     className="w-full h-full object-cover opacity-100"
// // //                   />

// // //                   {/* CARD OVERLAY */}
// // //                   <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
// // //                     <h5 className="text-white text-base font-semibold">
// // //                       {card.title}
// // //                     </h5>
// // //                     <span className="flex items-center gap-2 text-white text-sm mt-1">
// // //                       Explore Now <FaArrowRight />
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* ARROWS */}
// // //           <button
// // //             onClick={() => scroll("left")}
// // //             className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 text-3xl text-white"
// // //           >
// // //             ❮
// // //           </button>

// // //           <button
// // //             onClick={() => scroll("right")}
// // //             className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 text-3xl text-white"
// // //           >
// // //             ❯
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import resort from "../../assets/everymood/resort.jpg";
// // import wildlife from "../../assets/everymood/wildlife.jpg";
// // import mountain from "../../assets/everymood/mountain.jpg";
// // import monsoon from "../../assets/everymood/monsoon.jpg";
// // import pilgrimage from "../../assets/everymood/pilgrimage.jpg";
// // import beach from "../../assets/everymood/beach.jpeg";
// // import desert from "../../assets/everymood/desert.jpg";
// // import { FaArrowRight } from "react-icons/fa";

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation } from "swiper";
// // import "swiper/css";
// // import "swiper/css/navigation";

// // export default function EveryMood() {
// //   const moodCards = [
// //     { img: wildlife, title: "Wildlife Adventure" },
// //     { img: monsoon, title: "Monsoon Magic" },
// //     { img: mountain, title: "Mountain Calling" },
// //     { img: beach, title: "Beach Vacations" },
// //     { img: desert, title: "Mystic Deserts" },
// //     { img: pilgrimage, title: "Pilgrimage Peace" },
// //   ];

// //   return (
// //     <div
// //       className="relative mt-5 py-10 bg-cover bg-center bg-no-repeat"
// //       style={{ backgroundImage: `url(${resort})` }}
// //     >
// //       {/* Transparent overlay */}
// //       <div className="absolute inset-0 bg-black/40"></div>

// //       <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
// //         <h2 className="text-3xl font-bold">
// //           Book Hotels For Every Mood
// //         </h2>
// //         <p className="mt-2 text-lg font-semibold">
// //           Curated Escapes for Your Curious Soul!
// //         </p>

// //         {/* Swiper carousel */}
// //         <div className="mt-8 relative">
// //           <Swiper
// //             modules={[Navigation]}
// //             navigation
// //             loop={true}
// //             spaceBetween={16}
// //             breakpoints={{
// //               320: { slidesPerView: 1 },
// //               640: { slidesPerView: 2 },
// //               1024: { slidesPerView: 3 },
// //               1280: { slidesPerView: 4 },
// //             }}
// //           >
// //             {moodCards.map((card, index) => (
// //               <SwiperSlide key={index}>
// //                 <div className="relative h-[220px] rounded-xl overflow-hidden shadow-lg bg-white">
// //                   <img
// //                     src={card.img}
// //                     alt={card.title}
// //                     className="w-full h-full object-cover"
// //                   />
// //                   <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
// //                     <h5 className="text-white text-base font-semibold">
// //                       {card.title}
// //                     </h5>
// //                     <span className="flex items-center gap-2 text-white text-sm mt-1">
// //                       Explore Now <FaArrowRight />
// //                     </span>
// //                   </div>
// //                 </div>
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import resort from "../../assets/everymood/resort.jpg";
// import wildlife from "../../assets/everymood/wildlife.jpg";
// import mountain from "../../assets/everymood/mountain.jpg";
// import monsoon from "../../assets/everymood/monsoon.jpg";
// import pilgrimage from "../../assets/everymood/pilgrimage.jpg";
// import beach from "../../assets/everymood/beach.jpeg";
// import desert from "../../assets/everymood/desert.jpg";
// import { FaArrowRight } from "react-icons/fa";

// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper"; // ✅ use SwiperCore
// import "swiper/css";
// import "swiper/css/navigation";

// // install modules
// SwiperCore.use([Navigation]);

// export default function EveryMood() {
//   const moodCards = [
//     { img: wildlife, title: "Wildlife Adventure" },
//     { img: monsoon, title: "Monsoon Magic" },
//     { img: mountain, title: "Mountain Calling" },
//     { img: beach, title: "Beach Vacations" },
//     { img: desert, title: "Mystic Deserts" },
//     { img: pilgrimage, title: "Pilgrimage Peace" },
//   ];

//   return (
//     <div
//       className="relative mt-5 py-10 bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${resort})` }}
//     >
//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
//         <h2 className="text-3xl font-bold">
//           Book Hotels For Every Mood
//         </h2>
//         <p className="mt-2 text-lg font-semibold">
//           Curated Escapes for Your Curious Soul!
//         </p>

//         <div className="mt-8 relative">
//           <Swiper
//             navigation
//             loop={true}
//             spaceBetween={16}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 4 },
//             }}
//           >
//             {moodCards.map((card, index) => (
//               <SwiperSlide key={index}>
//                 <div className="relative h-[220px] rounded-xl overflow-hidden shadow-lg bg-white">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
//                     <h5 className="text-white text-base font-semibold">
//                       {card.title}
//                     </h5>
//                     <span className="flex items-center gap-2 text-white text-sm mt-1">
//                       Explore Now <FaArrowRight />
//                     </span>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

import resort from "../../assets/everymood/resort.jpg";
import wildlife from "../../assets/everymood/wildlife.jpg";
import mountain from "../../assets/everymood/mountain.jpg";
import monsoon from "../../assets/everymood/monsoon.jpg";
import pilgrimage from "../../assets/everymood/pilgrimage.jpg";
import beach from "../../assets/everymood/beach.jpeg";
import desert from "../../assets/everymood/desert.jpg";
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // ✅ correct import for v10+
import "swiper/css";
import "swiper/css/navigation";

export default function EveryMood() {
  const moodCards = [
    { img: wildlife, title: "Wildlife Adventure" },
    { img: monsoon, title: "Monsoon Magic" },
    { img: mountain, title: "Mountain Calling" },
    { img: beach, title: "Beach Vacations" },
    { img: desert, title: "Mystic Deserts" },
    { img: pilgrimage, title: "Pilgrimage Peace" },
  ];

  return (
    <div className="relative mt-5 py-10 font-poppins">
  {/* Background Image with Opacity */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${resort})`, opacity: 0.5 }}
        ></div>
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold">
          Book Hotels For Every Mood
        </h2>
        <p className="mt-2 text-lg font-semibold">
          Curated Escapes for Your Curious Soul!
        </p>

        <div className="mt-8 relative">
          <Swiper
            modules={[Navigation]} // ✅ here
            navigation
            loop={true}
            spaceBetween={16}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {moodCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[220px] rounded-xl overflow-hidden shadow-lg bg-white">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                 
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-3">
                    <div className="flex flex-col items-start"> {/* items-start aligns to left */}
                        <h5 className="text-white text-base font-semibold">
                        {card.title}
                        </h5>
                        <span className="flex items-center gap-2 text-white text-sm mt-1">
                        Explore Now <FaArrowRight />
                        </span>
                    </div>
                    </div>
                    </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
