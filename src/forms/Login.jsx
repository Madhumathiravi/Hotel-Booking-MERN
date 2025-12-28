import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { X } from "lucide-react";
import Rupee from "../assets/rupee.png";
import Hotel from "../assets/hotel.png";

export default function Login({ close, onLoginSuccess }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");


  const slides = [
    {
      title: "Invite & Earn!",
      desc: "Invite Your Friends & Get Up To INR 2000* In Your EMT Wallet.",
      image: Rupee,
      bg: "bg-green-100"
    },
    {
      title: "Check-in to Savings!",
      desc: "Book Your Favorite Hotel Now At Exclusive Prices.",
      image: Hotel,
      bg: "bg-yellow-100"
    }
  ];
   useEffect(() => {
  const interval = setInterval(() => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, [slides.length]);

 const slide = slides[slideIndex];

  const handleLogin = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: value,
        password: password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }
    localStorage.setItem("user", JSON.stringify(data.user));
    onLoginSuccess(data.user);
    close(); // close modal after login
  } catch (error) {
    console.error("Login error", error);
  }
 };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:items-center bg-black/50">
      <div className="relative w-[90%]
                      sm:w-[400px]
                      md:w-[420px]
                      lg:w-[440px]
                      mt-6 mb-6 sm:mt-8 sm:mb-8
                      max-h-[90vh]
                      bg-white
                      rounded-2xl
                      shadow-xl
                      overflow-hidden
                      flex flex-col">

        {/* CLOSE BUTTON */}
        <button
          onClick={close}
          className="absolute top-0 right-3 z-10 text-gray-700 hover:text-black border-1"
        >
          <X />
        </button>

 {/* SLIDER SECTION */}
<div className={`p-4 ${slide.bg} flex-shrink-0`}>
  <div className="flex items-center gap-4">
    
    {/* TEXT */}
    <div className="flex-1">
      <h3 className="font-semibold text-sm sm:text-base">
        {slide.title}
      </h3>
      <p className="text-xs sm:text-sm font-medium">
        {slide.desc}
      </p>
    </div>

    {/* IMAGE */}
    <div className="w-16 h-16 sm:w-28 sm:h-28 flex-shrink-0">
      <img
        src={slide.image}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>

  </div>

  {/* DOTS */}
  <div className="flex justify-center gap-2 mt-3">
    {slides.map((_, i) => (
      <span
        key={i}
        className={`w-2 h-2 rounded-full ${
          i === slideIndex ? "bg-blue-500" : "bg-gray-400"
        }`}
      />
    ))}
  </div>
</div>


        {/* LOGIN FORM */}
        <div className="p-5 sm:p-6 ">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 ">
            Login
          </h2>

          {/* INPUT */}
          <div className="relative w-full">
            {/* EMAIL INPUT */}
            <div className="relative w-full">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 text-sm outline-none"
              />
              <label
                className={`pointer-events-none absolute left-4 top-3 text-gray-400 text-sm transition-all
                  peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1
                  ${value ? "-top-2 text-xs bg-white px-1" : ""}
                `}
              >
                Email ID
              </label>
            </div>

          {/* PASSWORD INPUT */}
            <div className="relative w-full mt-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 text-sm outline-none"
              />
              <label
                className={`pointer-events-none absolute left-4 top-3 text-gray-400 text-sm transition-all
                  peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1
                  ${password ? "-top-2 text-xs bg-white px-1" : ""}
                `}
              >
                Password
              </label>
            </div>
           </div>
        <button
          disabled={!value || !password}
          onClick={handleLogin}
          className={`mt-6 w-full py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base text-white
          ${value && password ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300"}
          `}
        >
          Continue
        </button>



          {/* SOCIAL LOGIN */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-500">Or Login Via</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

        <div className="flex justify-center gap-8">
          {/* GOOGLE */}
          <div className="flex flex-col items-center cursor-pointer">
            <div className="w-11 h-11 flex items-center justify-center border rounded-full">
              <FcGoogle size={24} />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-gray-700 border rounded-lg px-2">Google</span>
          </div>

          {/* FACEBOOK */}
          <div className="flex flex-col items-center cursor-pointer">
            <div className="w-11 h-11 flex items-center justify-center border rounded-full">
              <MdOutlineFacebook size={26} className="text-blue-600" />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-gray-700 border rounded-lg px-2">Facebook</span>
          </div>
        </div>


          <p className="text-xs text-center text-gray-500 mt-6">
            By logging in, I understand & agree to EaseMyTrip{" "}
            <span className="text-blue-600">terms of use</span> and{" "}
            <span className="text-blue-600">privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
