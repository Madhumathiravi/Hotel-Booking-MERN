import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import card1 from "../../assets/exclusive/card1.webp";
import card2 from "../../assets/exclusive/card2.webp";
import card3 from "../../assets/exclusive/card3.webp";
import card4 from "../../assets/exclusive/card4.webp";
import card5 from "../../assets/exclusive/card5.webp";
import card6 from "../../assets/exclusive/card6.webp";
import card7 from "../../assets/exclusive/card7.webp";
import ExclusiveCard from "./ExclusiveCard";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Exclusive() {
  const sliderRef = useRef(null);

  const CARD_WIDTH = 370;
  const CLONE_COUNT = 3;

  const cards = [
    {
      id: 1,
      title: "Get Up to",
      span: "40% OFF",
      subtitle: "on Treehouse Hotels",
      description: "Enjoy special discount of up to 40% on Treehouse Hotels",
      validity: "Valid till: 31st Jan 2026",
      image: card1,
      bg: "bg-gradient-to-r from-teal-800 to-teal-300",
    },
    {
      id: 2,
      title: "Introducing",
      span: "Lowest Price Guarantee",
      subtitle: "On Hotel",
      description:
        "Find better hotel price anywhere else & get double refund",
      validity: "Book Now",
      image: card2,
      bg: "bg-gradient-to-r from-orange-600 to-orange-300",
    },
    {
      id: 3,
      title: "No Joining Fee on",
      span: "Hotel Booking",
      subtitle: "On Hotel",
      codespan: "Use Code:",
      code: "EMTSCB",
      description:
        "No Joining fee & Get Annual Benefits worth INR 3200* with your Credit Card",
      image: card3,
      bg: "bg-gradient-to-r from-teal-800 to-teal-300",
    },
    {
      id: 4,
      title: "Save Huge",
      span: "Using DigiBank",
      subtitle: "On Hotel",
      codespan: "Use Code:",
      code: "DBSEMT",
      description:
        "Apply for digibank saving account and save huge on travel",
      validity: "Book Now",
      image: card4,
      bg: "bg-gradient-to-r from-blue-600 to-blue-300",
    },
    {
      id: 5,
      title: "Based Deal on",
      span: "Using DigiBank",
      codespan: "Use Code:",
      code: "Go Green",
      description:
        "Best Deal on Eco-Friendly Hotels & Resorts booking using digibank EMT Green Debit Card",
      validity: "31st Jan 2026",
      image: card5,
      bg: "bg-gradient-to-r from-teal-600 to-teal-300",
    },
    {
      id: 6,
      title: "Hotel Offer",
      span: "Upto 20%",
      codespan: "Use Code:",
      code: "GRAB20",
      description:
        "Get Upto 20% Discount on Selected Hotels Booking",
      validity: "31st Jan 2026",
      image: card6,
      bg: "bg-gradient-to-r from-orange-600 to-orange-300",
    },
    {
      id: 7,
      title: "New User Offer on",
      span: "Hotel Booking",
      codespan: "Use Code:",
      code: "EMTEIRST",
      description:
        "Register & Enjoy Great Discount on First Hotel Booking",
      validity: "31st Jan 2026",
      image: card7,
      bg: "bg-gradient-to-r from-blue-600 to-blue-300",
    },
  ];

  // 👇 CLONE CARDS FOR INFINITE LOOP
  const infiniteCards = [
    ...cards.slice(-CLONE_COUNT),
    ...cards,
    ...cards.slice(0, CLONE_COUNT),
  ];

  // 👇 START IN MIDDLE (REAL CONTENT)
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = CARD_WIDTH * CLONE_COUNT;
    }
  }, []);

  const handleInfiniteScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll =
      CARD_WIDTH * (cards.length + CLONE_COUNT);

    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = CARD_WIDTH * cards.length;
    }

    if (slider.scrollLeft >= maxScroll) {
      slider.scrollLeft = CARD_WIDTH * CLONE_COUNT;
    }

    const currentIndex = Math.round(
  slider.scrollLeft / CARD_WIDTH
);
setActiveIndex(currentIndex);

  };


  const scroll = (direction) => {
  const slider = sliderRef.current;
  if (!slider) return;

  slider.scrollBy({
    left: direction === "left" ? CARD_WIDTH + 16 : -CARD_WIDTH,
    behavior: "smooth",
  });

  setTimeout(handleInfiniteScroll, 300);
};

  const [activeIndex, setActiveIndex] = useState(CLONE_COUNT);

const navigate = useNavigate();

  return (
    <div className="relative w-full mx-auto font-poppins">
      <h1 className="font-poppins text-3xl font-bold mb-6 text-center">
        Exclusive Offers
      </h1>

      <button
        onClick={() => scroll("left")}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-10 text-white"
      >
        <FaArrowCircleLeft className="text-3xl" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute 
        right-10 top-1/2 -translate-y-1/2 z-10 text-white"
      >
        <FaArrowCircleRight className="text-3xl" />
      </button>

<div className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-28 lg:w-36 
bg-gradient-to-r from-white to-transparent z-10" />

<div className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-28 lg:w-36 
bg-gradient-to-l from-white to-transparent z-10" />



      <div
        ref={sliderRef}
        onScroll={handleInfiniteScroll}
        className="flex gap-4 overflow-x-hidden  scroll-smooth w-full px-[calc(50vw-571px)] "
      >
       {infiniteCards.map((card, index) => {
  const isCenter =
    index === activeIndex ||
    index === activeIndex + 1 ||
    index === activeIndex - 1;

  return (
    <div
      key={index}
    >
      <ExclusiveCard card={card} />
    </div>
  );
})}

      </div>
     <div className="text-center mt-4 ">
       <button className="text-sm border rounded-3xl px-4 py-2 text-white bg-blue-500" 
       onClick={() => navigate("/offers")}
       >View All</button>
     </div>
    </div>
  );
}

