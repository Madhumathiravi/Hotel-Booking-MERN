// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import spree from "../../assets/hotelschoice/spree.jpg";
// import avianna from "../../assets/hotelschoice/avianna.jpg";
// import sonar from "../../assets/hotelschoice/sonar.jpg";
// import amritara from "../../assets/hotelschoice/amritara.avif";
// import spreelogo from "../../assets/hotelschoice/spreeicon.png";
// import aviannalogo from "../../assets/hotelschoice/aviannaicon.png";
// import sonarlogo from "../../assets/hotelschoice/sonaricon.webp";
// import amritaralogo from "../../assets/hotelschoice/amritaraicon.png";
// import { FaArrowRight } from "react-icons/fa";
// export default function HotelsChoice() {
//   return (
//     <div className="font-poppins ">
//      <h1 className="text-4xl font-bold m-4 text-center">Hotels Of Choice</h1>

//      <div className="flex justify-center items-center h-screen">
       
//        <div c>
//         <img src={spreelogo} alt="" className="relative rounded-xl w-24 h-24  rounded-xl -top-4 -left-4"/>
        
//         <img src={spree} alt="" className=" relative rounded-xl w-64 h-80 mx-4"/>
//        <div className="bg-white p-4 rounded-xl border border-1 w-[250px]">
//          <p>Spree Hotels</p>
//         <p>Explore More </p>
        
//        </div>
//        </div>
//      </div>
//     </div>
//   );
// }

import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import spree from "../../assets/hotelschoice/spree.jpg";
import avianna from "../../assets/hotelschoice/avianna.jpg";
import sonar from "../../assets/hotelschoice/sonar.jpg";
import amritara from "../../assets/hotelschoice/amritara.avif";
import spreelogo from "../../assets/hotelschoice/spreeicon.png";
import aviannalogo from "../../assets/hotelschoice/aviannaicon.png";
import sonarlogo from "../../assets/hotelschoice/sonaricon.webp";
import amritaralogo from "../../assets/hotelschoice/amritaraicon.png";

const cards = [
  { img: spree, logo: spreelogo, title: "Spree Hotels" },
  { img: avianna, logo: aviannalogo, title: "Avianna Group" },
  { img: sonar, logo: sonarlogo, title: "Hotel Sonar Bangla" },
  { img: amritara, logo: amritaralogo, title: "Amritara Hotels" },
];

export default function HotelsChoice() {
  return (
    <div className="font-poppins">
      <h1 className="text-4xl font-bold mb-8 text-center">Hotels Of Choice</h1>

      <div className="relative flex items-center justify-center">
        
        {/* LEFT ARROW */}
        <button className="absolute left-6 z-10 text-3xl text-gray-600">
          <FaArrowCircleLeft />
        </button>

        {/* SLIDER VIEW */}
        <div className="overflow-hidden w-[900px]">
          <div className="flex gap-6 justify-center">
            
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative w-72 h-[420px] rounded-2xl overflow-hidden"
              >
                {/* MAIN IMAGE */}
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* LOGO TOP CENTER */}
                <img
                  src={card.logo}
                  alt=""
                  className="
                    absolute
                    top-4
                    left-1/2
                    -translate-x-1/2
                    w-20 h-20
                    bg-white
                    rounded-xl
                    p-2
                    shadow-lg
                  "
                />

                {/* TEXT CARD BOTTOM */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    bg-white
                    rounded-xl
                    p-4
                  "
                >
                  <p className="font-semibold">{card.title}</p>
                  <div className="flex items-center gap-2 text-orange-500">
                    <span>Explore More</span>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT ARROW */}
        <button className="absolute right-6 z-10 text-3xl text-gray-600">
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
}

