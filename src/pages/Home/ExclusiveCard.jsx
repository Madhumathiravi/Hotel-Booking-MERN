

// // export default function ExclusiveCard({ card }) {
// //   return (
// //     <div className="p-2 rounded-xl font-poppins">
// //       <div className="w-full sm:w-[320px] lg:w-[360px] bg-white rounded-2xl shadow-md overflow-hidden p-2">
        
// //         <div className={`h-[120px] ${card.bg} text-white flex rounded-xl`}>
// //           <div className="w-1/2 p-4 flex flex-col justify-center">
// //             <h3 className="text-lg font-semibold">{card.title}</h3>

// //             {card.span && (
// //               <span className="text-xl font-bold">{card.span}</span>
// //             )}

// //             <p className="text-sm opacity-90">{card.subtitle}</p>

// //             {card.code && (
// //               <div className="border-2 border-dashed rounded-md mt-2 px-2 py-1">
// //                 <span className="text-xs">{card.codespan}</span>
// //                 <span className="text-sm font-semibold ml-1">
// //                   {card.code}
// //                 </span>
// //               </div>
// //             )}
// //           </div>

// //           <div className="w-1/2">
// //             <img
// //               src={card.image}
// //               alt={card.title}
// //               className="w-full h-full object-cover rounded-tl-2xl rounded-r-xl"
// //             />
// //           </div>
// //         </div>

// //         <div className="p-4">
// //           <p className="text-sm text-gray-700 font-semibold">
// //             {card.description}
// //           </p>
// //           <p className="text-xs text-gray-500 mt-2">{card.validity}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import card1 from "../../assets/exclusive/card1.webp";
// import card2 from "../../assets/exclusive/card2.webp";
// import ExclusiveCard from "./ExclusiveCard";
// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// export default function Exclusive() {
//   const cards = [
//     {
//       id: 1,
//       title: "Get Up to",
//       span: "40% OFF",
//       subtitle: "on Treehouse Hotels",
//       description: "Enjoy special discount of up to 40% on Treehouse Hotels",
//       validity: "Valid till: 31st Jan 2026",
//       image: card1,
//       bg: "bg-gradient-to-r from-teal-800 to-teal-300",
//     },
//     {
//       id: 2,
//       title: "Introducing",
//       span: "Lowest Price Guarantee",
//       subtitle: "On Hotel",
//       description: "Find better hotel price anywhere else & get double refund",
//       validity: "Book Now",
//       image: card2,
//       bg: "bg-gradient-to-r from-orange-600 to-orange-300",
//     },
//     {
//       id: 3,
//       title: "Save Huge",
//       span: "Using DigiBank",
//       subtitle: "On Hotel",
//       codespan: "Use Code:",
//       code: "DBSEMT",
//       description: "Apply for digibank saving account and save huge on travel",
//       validity: "Book Now",
//       image: card2,
//       bg: "bg-gradient-to-r from-fuchsia-600 to-fuchsia-300",
//     },
//     {
//       id: 4,
//       title: "Introducing",
//       span: "Lowest Price Guarantee",
//       subtitle: "On Hotel",
//       description: "Find better hotel price anywhere else & get double refund",
//       validity: "Book Now",
//       image: card2,
//       bg: "bg-gradient-to-r from-orange-600 to-orange-300",
//     },
//     {
//       id: 5,
//       title: "Introducing",
//       span: "Lowest Price Guarantee",
//       subtitle: "On Hotel",
//       description: "Find better hotel price anywhere else & get double refund",
//       validity: "Book Now",
//       image: card2,
//       bg: "bg-gradient-to-r from-orange-600 to-orange-300",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(3);

//   /* Detect screen size */
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCards(1);
//       } else if (window.innerWidth < 1024) {
//         setVisibleCards(2);
//       } else {
//         setVisibleCards(3);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const maxIndex = cards.length - visibleCards;

//   const slideLeft = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const slideRight = () => {
//     setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
//   };

//   return (
//     <div className="relative max-w-7xl mx-auto px-4">
//       <h1 className="font-poppins text-3xl font-bold mb-6 text-center">
//         Exclusive Offers
//       </h1>

//       {/* Left Arrow */}
//       <button
//         onClick={slideLeft}
//         disabled={currentIndex === 0}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-gray-600 disabled:opacity-30"
//       >
//         <FaArrowCircleLeft />
//       </button>

//       {/* Slider */}
//       <div className="overflow-hidden">
//         <div
//           className="flex gap-4 transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * 360}px)`,
//           }}
//         >
//           {cards.map((card) => (
//             <ExclusiveCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={slideRight}
//         disabled={currentIndex === maxIndex}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-gray-600 disabled:opacity-30"
//       >
//         <FaArrowCircleRight />
//       </button>
//     </div>
//   );
// }

export default function ExclusiveCard({ card }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[360px] font-poppins">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden p-2">
        <div className={`h-[120px] ${card.bg} text-white flex rounded-xl`}>
          <div className="w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-lg font-semibold">{card.title}</h3>

            {card.span && (
              <span className="text-xl font-bold">{card.span}</span>
            )}

            <p className="text-sm opacity-90">{card.subtitle}</p>

            {card.code && (
              <div className="border-2 border-dashed rounded-md mt-2 px-2 py-1">
                <span className="text-xs">{card.codespan}</span>
                <span className="text-sm font-semibold ml-1">
                  {card.code}
                </span>
              </div>
            )}
          </div>

          <div className="w-1/2">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-tl-2xl rounded-r-xl"
            />
          </div>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-700 font-semibold">
            {card.description}
          </p>
          <p className="text-xs text-gray-500 mt-2">{card.validity}</p>
        </div>
      </div>
    </div>
  );
}
