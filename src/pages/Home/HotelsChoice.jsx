import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import spree from "../../assets/hotelschoice/spree.jpg";
import avianna from "../../assets/hotelschoice/avianna.jpg";
import sonar from "../../assets/hotelschoice/sonar.jpg";
import amritara from "../../assets/hotelschoice/amritara.avif";
import spreelogo from "../../assets/hotelschoice/spreeicon.png";
import aviannalogo from "../../assets/hotelschoice/aviannaicon.png";
import sonarlogo from "../../assets/hotelschoice/sonaricon.webp";
import amritaralogo from "../../assets/hotelschoice/amritaraicon.png";

export default function HotelsChoice() {
  const cards = [
    { img: spree, logo: spreelogo, title: "Spree Hotels" },
    { img: avianna, logo: aviannalogo, title: "Avianna Group" },
    { img: sonar, logo: sonarlogo, title: "Hotel Sonar Bangla" },
    { img: amritara, logo: amritaralogo, title: "Amritara Hotels" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, cards.length - 1));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="font-poppins px-4 mt-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Hotels Of Choice
      </h1>

      <div className="relative overflow-hidden">

        {/* SLIDER */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 280}px)` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="
                flex-shrink-0
                w-[260px]
                sm:m-4
                lg:ml-24
              "
            >
              <div className="relative h-[300px] max-w-[260px] mx-auto ">

                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={card.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4">
                    <p className="font-semibold">{card.title}</p>
                    <div className="flex items-center gap-2 text-orange-500">
                      <span>Explore More</span>
                      <FaArrowRight />
                    </div>
                  </div>
                </div>

                <img
                  src={card.logo}
                  alt=""
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-xl p-2 border shadow-xl z-30"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="hidden sm:block absolute left-2 top-1/2 -translate-y-1/2 z-20 text-3xl text-gray-600"
        >
          <FaArrowCircleLeft />
        </button>

        <button
          onClick={next}
          className="hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 z-20 text-3xl text-gray-600"
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
}
