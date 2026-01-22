import { useState } from "react";
import delhi from '../../assets/popular/delhi-sm.webp';
import goa from '../../assets/popular/goa-sm.webp';
import mumbai from '../../assets/popular/mumbai-sm.webp';
import shimla from '../../assets/popular/shimla-sm.webp';
import manali from '../../assets/popular/manali-sm.webp';
import hyderabad from '../../assets/popular/hyd-sm.webp';
import chennai from '../../assets/popular/chennai-sm.webp';
import kolkata from '../../assets/popular/kolkata-sm.webp';
import jaipur from '../../assets/popular/jaipur-sm.webp';
import pune from '../../assets/popular/pune-sm.webp';
import gurgram from '../../assets/popular/gurgrm-sm.webp';
import ahmedbad from '../../assets/popular/ahmd-sm.webp';
import varanasi from '../../assets/popular/varn-sm.webp';
import chandigarh from '../../assets/popular/chnd-sm.webp';
import lucknow from '../../assets/popular/lucknow-sm.webp';
import udaipur from '../../assets/popular/udaipur-sm.webp';
import agra from '../../assets/popular/agra-sm.webp';

export default function Popular() {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    { id: 1, title: 'Delhi', img: delhi },
    { id: 2, title: 'Goa', img: goa },
    { id: 3, title: 'Mumbai', img: mumbai },
    { id: 4, title: 'Shimla', img: shimla },
    { id: 5, title: 'Manali', img: manali },
    { id: 6, title: 'Hyderabad', img: hyderabad },
    { id: 7, title: 'Chennai', img: chennai },
    { id: 8, title: 'Kolkata', img: kolkata },
    { id: 9, title: 'Jaipur', img: jaipur },
    { id: 10, title: 'Pune', img: pune },
    { id: 11, title: 'Gurgram', img: gurgram },
    { id: 12, title: 'Ahmedabad', img: ahmedbad },
    { id: 13, title: 'Varanasi', img: varanasi },
    { id: 14, title: 'Chandigarh', img: chandigarh },
    { id: 15, title: 'Lucknow', img: lucknow },
    { id: 16, title: 'Udaipur', img: udaipur },
    { id: 17, title: 'Agra', img: agra },
  ];

  const visibleCards = showAll ? cards : cards.slice(0, 12);

  return (
    <div className="font-poppins mt-9 px-6 mb-5 max-w-6xl mx-auto">
      <h1 className="text-center font-bold text-2xl mb-8">
        Book Hotels at Popular Destinations
      </h1>

      {/* 3 Cards Per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 justify-items-center">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="flex border border-blue-500 rounded-xl px-4 py-3 gap-3 w-full sm:w-[360px] bg-white shadow-md bg-[#F6FBFF]"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <p className="font-bold">{card.title}</p>
              <p className="text-sm text-gray-600">
                Hotels, Budget Hotels, 3 Star Hotels, 4 Star Hotels, 5 Star Hotels
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      <div className="flex justify-center mt-6">
        <button
          className="text-white text-sm border border-1 rounded-2xl px-4 py-2 bg-blue-600 hover:bg-blue-700 transition"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}
