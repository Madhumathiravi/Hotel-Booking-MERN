// import card1 from "../../assets/exclusive/card1.webp";
// export default function ExclusiveOffers(){
//     const offers = [
//         {id:1, bg:"bg-gradient-to-r from-orange-600 to-orange-300",
//             img: card1, smtext:"Hotel Offer", bgtext:"Upto 20%",
//             code:"GRAB20", divtext:"Get UPto 20% Discount on Selected Hotels Booking",
//             valid:"Valid till: 31st Jan 2026" , image:card1
//          },
//          {id:2, bg:"bg-gradient-to-r from-orange-600 to-orange-300",
//             img: card1, smtext:"Hotel Offer", bgtext:"Upto 20%",
//             code:"GRAB20", divtext:"Get UPto 20% Discount on Selected Hotels Booking",
//             valid:"Valid till: 31st Jan 2026" , image:card1
//          },
//          {id:3, bg:"bg-gradient-to-r from-orange-600 to-orange-300",
//             img: card1, smtext:"Hotel Offer", bgtext:"Upto 20%",
//             code:"GRAB20", divtext:"Get UPto 20% Discount on Selected Hotels Booking",
//             valid:"Valid till: 31st Jan 2026" , image:card1
//          }
        
//     ]
//     return(
//        <>
//        <div className=" font-poppins text-3xl font-bold mb-4 text-center "> Exclusive Offers</div>
//         <div className="w-[300px] md:w-[360px] lg:w-[460px] max-w-[1200px] mx-auto border-1 rounded-md p-3 border-black bg-gray-100 flex flex-row overflow-hidden">
//            {offers.map((d) =>(
//             <div >
//                  <div className={`${d.bg} flex flex-row rounded-xl p-4`}>
//                 <div>
//                     <p>
//                     {d.smtext}
//                 </p>
//                 <p>
//                     {d.bgtext}
//                 </p>
//                 <div className="border border-dashed border-white">
//                      <p>Use Code:</p>
//                      <p>{d.code}</p>
//                 </div>
//             </div>
//             <img src={d.image} alt=""  className="rounded-lg shadow-md bg-white w-[110px] h-[110px] object-cover "/>
//             </div>
//             <p>{d.divtext}</p>
//             <p>{d.valid}</p>
//             </div>
//            ))

//            }
//         </div>
//        </>
//     )
// }

import card1 from "../../assets/exclusive/card1.webp";

export default function ExclusiveOffers() {
  const offers = [
    {
      id: 1,
      bg: "bg-gradient-to-r from-orange-600 to-orange-300",
      smtext: "Hotel Offer",
      bgtext: "Upto 20%",
      code: "GRAB20",
      divtext: "Get Upto 20% Discount on Selected Hotels Booking",
      valid: "Valid till: 31st Jan 2026",
      image: card1,
    },
    {
      id: 2,
      bg: "bg-gradient-to-r from-orange-600 to-orange-300",
      smtext: "Hotel Offer",
      bgtext: "Upto 20%",
      code: "GRAB20",
      divtext: "Get Upto 20% Discount on Selected Hotels Booking",
      valid: "Valid till: 31st Jan 2026",
      image: card1,
    },
    {
      id: 3,
      bg: "bg-gradient-to-r from-orange-600 to-orange-300",
      smtext: "Hotel Offer",
      bgtext: "Upto 20%",
      code: "GRAB20",
      divtext: "Get Upto 20% Discount on Selected Hotels Booking",
      valid: "Valid till: 31st Jan 2026",
      image: card1,
    },
  ];

  return (
    <>
      <h2 className="font-poppins text-3xl font-bold mb-6 text-center">
        Exclusive Offers
      </h2>

      {/* Wrapper (slider container later) */}
      <div className="max-w-[1200px] mx-auto flex gap-4 overflow-x-auto overflow-x-auto scrollbar-hide">
        {offers.map((d) => (
          /* CARD (width MUST be here) */
          <div
            key={d.id}
            className="w-[300px] sm:w-[360px] lg:w-[440px] flex-shrink-0 bg-white rounded-2xl shadow-md"
          >
            {/* Gradient header */}
            <div
              className={`${d.bg} flex items-center justify-between h-[120px] rounded-xl p-4 overflow-hidden`}
            >
              {/* Text block */}
              <div className="flex-1 pr-3 text-white">
                <p className="text-sm">{d.smtext}</p>
                <p className="text-2xl font-bold">{d.bgtext}</p>

                <div className="mt-2 border border-dashed border-white rounded px-2 py-1 inline-block text-xs">
                  <p>Use Code</p>
                  <p className="font-semibold">{d.code}</p>
                </div>
              </div>

              {/* Image */}
              <img
                src={d.image}
                alt=""
                className="w-[110px] h-[110px] object-cover rounded-lg flex-shrink-0"
              />
            </div>

            {/* Footer */}
            <div className="p-4">
              <p className="text-sm font-medium">{d.divtext}</p>
              <p className="text-xs text-gray-500 mt-1">{d.valid}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
