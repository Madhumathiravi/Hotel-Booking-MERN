import card1 from "../../assets/exclusive/card1.webp";
import card2 from "../../assets/exclusive/card2.webp";
import ExclusiveCard from "./ExclusiveCard";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Exclusive() {
  const cards = [
    {
      id: 1,
      title: "Get Up to",
      span:"40% OFF",
      subtitle: "on Treehouse Hotels",
      description: "Enjoy special discount of up to 40% on Treehouse Hotels",
      validity: "Valid till: 31st Jan 2026",
      image: card1,
      bg: "bg-gradient-to-r from-teal-800 to-teal-300",
    },
    {
      id: 2,
      title: "Introducing",
      span:"Lowest Price Guarantee",
      subtitle: "On Hotel",
      description:
        "Find better hotel price anywhere else & get double refund",
      validity: "Book Now",
      image: card2,
      bg: "bg-gradient-to-r from-orange-600 to-orange-300",
    },
     {
      id: 3,
      title: "Save Huge",
      span:"Using DigiBank",
      subtitle: "On Hotel",
      codespan:"use Code:",
      code:"DBSEMT",
      description:
        "Apply for digibank saving account and save huge on travel",
      validity: "Book Now",
      image: card2,
      bg: "bg-gradient-to-r from-fuchsia-600 to-fuchsia-300",
    },
     {
      id: 2,
      title: "Introducing",
      span:"Lowest Price Guarantee",
      subtitle: "On Hotel",
      description:
        "Find better hotel price anywhere else & get double refund",
      validity: "Book Now",
      image: card2,
      bg: "bg-gradient-to-r from-orange-600 to-orange-300",
    },
     {
      id: 2,
      title: "Introducing",
      span:"Lowest Price Guarantee",
      subtitle: "On Hotel",
      description:
        "Find better hotel price anywhere else & get double refund",
      validity: "Book Now",
      image: card2,
      bg: "bg-gradient-to-r from-orange-600 to-orange-300",
    },
  ];

  return (
   <div>
    <h1 >Exclusive Offers</h1>
    <span><FaArrowCircleLeft className="text-blue-400 text-xl" /></span>
     <div className="flex gap-4 overflow-hidden  px-4">
      {cards.map((card) => (
        <ExclusiveCard key={card.id} card={card} />
      ))}
    </div>
    <span><FaArrowCircleRight  className="text-blue-400 text-xl"  /></span>
   </div>
  );
}
