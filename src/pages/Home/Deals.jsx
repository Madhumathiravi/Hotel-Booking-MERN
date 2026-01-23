
import { useState } from "react";
import hotel from "../../assets/mobile/hotel.webp";

export default function Deals() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#F9FBFE] max-w-6xl mx-auto mt-12 rounded-xl font-poppins px-4 sm:px-6 py-6">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row items-center gap-8">

        {/* TEXT */}
        <div className="flex-1">
          <h2 className="font-semibold text-2xl sm:text-3xl mb-4">
            Cheapest Deals on Budget & Luxury Hotels are Available at EaseMyTrip
          </h2>

          <p className="text-[15px] text-gray-700">
            Due to the huge influx of tourists in India, EaseMyTrip offers a wide
            range of luxury, deluxe and budget hotels to them. Choose to stay in
            luxury and comfort with the greatest discounts available on hotel
            bookings.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={hotel}
            alt="Hotels"
            className="w-full max-w-sm h-64 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* EXPANDABLE CONTENT */}
      <div
        className={`mt-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="text-[15px] text-gray-700 space-y-4">
          <p>
            We list the classiest budget hotels on our site along with some of the
            prominent international hotel chains of India including Oberoi Group,
            ITC Group, Taj Group, Le Meridian Group and many others.
          </p>

          <p>
            Ranging from class hotels to luxury beach resorts, each hotel on our
            site gives you a memorable staying experience. Along with deluxe,
            budget and luxury hotels, EaseMyTrip also displays a number of
            heritage hotels that offer you a royal stay.
          </p>

          <h3 className="font-bold mt-4">
            Find Best Luxurious and Wallet-Friendly Hotels with EaseMyTrip
          </h3>

          <p>
            At EaseMyTrip, we take immense pride in providing premium services,
            including 24/7 customer support, dedicated assistance, personalised
            experiences and exclusive deals.
          </p>

          <p>
            Whether it's a vacation or business trip, book budget hotels online
            with EaseMyTrip and enjoy unforgettable stays at affordable prices.
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center lg:justify-start mt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border border-blue-500 text-blue-500 rounded-2xl px-6 py-[3px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 mb-10 hover:bg-blue-500 hover:text-white transition duration-200 "
        >
          {isOpen ? "Read Less" : "Read More"}
        </button>
      </div>

    </section>
  );
}
