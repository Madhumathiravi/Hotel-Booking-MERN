import mobile from "../../assets/mobile/mobile.webp";
import googleplay from "../../assets/mobile/google-play.png";
import applestore from "../../assets/mobile/apple-store.webp";
import qrcode from "../../assets/mobile/r-code.svg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import leafleft from "../../assets/mobile/leaf-left.png";
import leafright from "../../assets/mobile/leaf-right.png";

import { MdPerson } from "react-icons/md";

export default function Mobile() {
  return (
    <section className="w-full bg-stone-100 font-poppins py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT – Mobile Image */}
        <div className="flex justify-center">
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full flex items-center justify-center">
            <img
              src={mobile}
              alt="EaseMyTrip Mobile App"
              className="w-48 sm:w-56 lg:w-64"
            />
          </div>
        </div>

        {/* MIDDLE – Ratings & Trust */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

          {/* Rating */}
          <div>
            <h4 className="font-bold">Highest-rated mobile app</h4>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <p className="text-4xl font-bold">4.6</p>
                <div className="flex gap-1 text-gray-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <MdPerson />
                  <span>4,83,456</span>
                </div>
              </div>

              {/* Rating bars (muted for UX) */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span>5</span>
                  <div className="bg-green-500 h-3 w-24 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span>4</span>
                  <div className="bg-green-400 h-3 w-16 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span>3</span>
                  <div className="bg-yellow-400 h-3 w-10 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span>2</span>
                  <div className="bg-red-500 h-3 w-6 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span>1</span>
                  <div className="bg-red-400 h-3 w-4 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="flex items-center gap-2">
            <img src={leafleft} alt="" className="opacity-70" />
            <p className="font-bold text-lg">30 million+ Customers</p>
            <img src={leafright} alt="" className="opacity-70" />
          </div>
        </div>

        {/* RIGHT – Download CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 w-full sm:w-auto">

          <h4 className="font-bold">Download EaseMyTrip App</h4>

          <div className="border-2 border-dashed border-green-300 bg-green-200 rounded-lg px-3 py-2 max-w-xs">
            <p className="text-xs">
              Save up to ₹5000 OFF on your first hotel booking: <b>EMTGREET</b>
            </p>
          </div>

          <p className="text-sm">For hassle-free hotel booking</p>

          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <img src={googleplay} alt="Google Play" className="w-40 py-1" />
              <img src={applestore} alt="App Store" className="w-40" />
            </div>
            <img src={qrcode} alt="QR Code" className="w-28" />
          </div>
        </div>

      </div>
    </section>
  );
}
