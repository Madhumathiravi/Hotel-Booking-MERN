import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import HoverDropdown from "./components/HoverDropdown";
import Signup from './forms/Signup.jsx'
import Login from './forms/Login.jsx'
import logo from "./assets/logo.svg";

import { HiMenu, HiX, HiOutlineHome } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import {
  IoInformationCircleOutline,
  IoMailOpenOutline,
  IoPersonSharp,
} from "react-icons/io5";
import {
  RiDiscountPercentLine,
  RiCustomerService2Line,
  RiArrowDropDownLine,
} from "react-icons/ri";
import { VscCallIncoming } from "react-icons/vsc";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { LuTickets } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";



export default function Navbar() {
  const NavlinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";
  
  const navLinks = [
    {to:"/", label:"Home", Icon:HiOutlineHome},
    {to:"/hotels", label:"Hotels", Icon:HiOutlineBuildingOffice2},
    {to:"/offers", label:"Offers", Icon: RiDiscountPercentLine },
    {to:"/about", label:"About", Icon:IoInformationCircleOutline}
  ]    

  const [menubarOpen, setMenubarOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false); // mobile only

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const countryCurrency = {
    India: "INR",
    UAE: "AED",
    UK: "GBP",
    Thailand: "THB",
  };

  const languages = [
    "English",
    "Hindi",
    "Assamese",
    "Bengali",
    "Gujarati",
    "Marathi",
  ];

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedCurrency(countryCurrency[country]);
  };

const [showLogin, setShowLogin] = useState(false);
const [showSignup, setShowSignup] = useState(false);
const [user, setUser] = useState(null);

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);


    useEffect(() => {
      if (showLogin || showSignup) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [showLogin, showSignup]);

    const AuthTrigger = ({ isMobile = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 ${
        isMobile
          ? "w-full py-2 bg-blue-600 text-white rounded-md"
          : "px-2 py-2 text-xs bg-blue-600 text-white rounded-full font-bold"
      }`}
    >
      {user ? (
        <>
          <FaRegCircleUser className="text-lg" />
          <span>{user.name}</span>
          <RiArrowDropDownLine />
        </>
      ) : (
        "Login or Signup"
      )}
    </button>
  );
};


    return (
     <>
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* TOP BAR */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14" />
          <div className="hidden md:flex flex-1 justify-center gap-12 text-sm font-medium">
           
            {navLinks.map(({to, label, Icon}) =>(
              <NavLink
              key={to}
              to ={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
             <Icon className="text-2xl" />
             <span>{label}</span>
            </NavLink>
            ))}
      </div>

{/* DESKTOP RIGHT */}
          <div className="hidden md:flex flex-col items-end ml-auto text-sm relative">
            {/* ROW: Customer Service | Country | Dark Mode */}
            <div className="flex items-center gap-6">
              {/* CUSTOMER SERVICE */}
                 <HoverDropdown
                    trigger={
                      <div className="flex items-center gap-1 cursor-pointer">
                        <RiCustomerService2Line />
                        Customer Service
                        <RiArrowDropDownLine />
                      </div>
                    }
                  >
                    <div className="w-56">
                      <div className="flex gap-3 p-3 hover:bg-gray-100">
                        <span className="text-blue-600 text-lg mt-1">
                          <VscCallIncoming />
                        </span>
                        <div>
                          <p className="font-medium">Call Support</p>
                          <p className="text-blue-600 text-xs font-medium">
                            Tel : 011 - 43131313, 43030303
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 p-3 hover:bg-gray-100">
                        <span className="text-blue-600 text-lg mt-1">
                          <IoMailOpenOutline />
                        </span>
                        <div>
                          <p className="font-medium">Mail Support</p>
                          <a
                            href="mailto:care@easemytrip.com"
                            className="text-blue-600 text-sm font-medium"
                          >
                            care@easemytrip.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </HoverDropdown>

              {/* COUNTRY */}
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setShowPanel(!showPanel)}
              >
                <span>{selectedCountry}</span>
                <RiArrowDropDownLine />
              </div>

              {/* DARK MODE */}
              <FaCircleHalfStroke className="cursor-pointer text-lg" />
            </div>
            <div className="mt-2 hidden md:block">
            

            <HoverDropdown
            trigger={
              !user ? (
                <button className="px-2 py-2 text-xs bg-blue-600 text-white rounded-full font-bold">
                  Login or signup
                </button>
              ) : (
                <div className="flex items-center gap-2 cursor-pointer">
                  <FaRegCircleUser className="text-xl" />
                  <span className="font-medium">{user.name}</span>
                  <RiArrowDropDownLine />
                </div>
              )
            }
          >

                <div className="w-64">
                  <DropdownContent
                    user={user}
                    onLogin={() => setShowLogin(true)}
                    onSignup={() => setShowSignup(true)}
                    onLogout={() => {
                      localStorage.removeItem("user");
                      setUser(null);
                    }}
                  />

                </div>
              </HoverDropdown>
            </div>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-auto text-3xl"
            onClick={() => setMenubarOpen(!menubarOpen)}
          >
            {menubarOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menubarOpen && (
          <div className="md:hidden border-t mt-3 pt-4">
            <div className="flex flex-col gap-4 mb-5">
             {navLinks.map(({to, label, Icon}) =>(
               <NavLink key={to} to={to}  className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-2 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`
             }>
                 <Icon className="text-xl" />
                {label}
              </NavLink>
             ))}
            </div>

            {/* LOGIN — MOBILE (CLICK) */}
            {/* <button
              className="w-full py-2 bg-blue-600 text-white rounded-md"
              onClick={() => setLoginDropdown(!loginDropdown)}
            >
              Login or Signup
            </button> */}

            <AuthTrigger
  isMobile
  onClick={() => setLoginDropdown(!loginDropdown)}
/>

{loginDropdown && (
  <div className="mt-2 bg-white border rounded-md shadow-md overflow-hidden">
    <DropdownContent
      user={user}
      onLogin={() => {
        setLoginDropdown(false);
        setShowLogin(true);
      }}
      onSignup={() => {
        setLoginDropdown(false);
        setShowSignup(true);
      }}
      onLogout={() => {
        localStorage.removeItem("user");
        setUser(null);
        setLoginDropdown(false);
      }}
    />
  </div>
)}


            {loginDropdown && (
              <div className="mt-2 bg-white border rounded-md shadow-md overflow-hidden">
                <DropdownContent
               onLogin={() => {
                  setLoginDropdown(false);
                  setShowLogin(true);
                }}
                onSignup={() => {
                  setLoginDropdown(false);
                  setShowSignup(true);
                }}
                />
              </div>
            )}
          </div>
        )}

        {/* COUNTRY PANEL */}
        {showPanel && (
          <div className="absolute right-4 top-20 w-[420px] bg-white border shadow-xl rounded-xl z-50">
            <div className="p-4 grid grid-cols-2 gap-4">
              <select
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="border px-3 py-2 rounded-md"
              >
                {Object.keys(countryCurrency).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="border px-3 py-2 rounded-md"
              >
                {Object.values(countryCurrency).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="border-t p-4">
              <p className="text-sm mb-3">Choose Language</p>
              <div className="grid grid-cols-3 gap-3">
                {languages.map((lang) => (
                  <label
                    key={lang}
                    className="flex items-center gap-2 border px-3 py-2 rounded-md"
                  >
                    <input
                      type="radio"
                      checked={selectedLanguage === lang}
                      onChange={() => setSelectedLanguage(lang)}
                    />
                    {lang}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

{showLogin && (
  <Login
    close={() => setShowLogin(false)}
    onLoginSuccess={(userData) => {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    }}
  />
)}



  {showSignup && (
    <Signup close={() => setShowSignup(false)} />
  )}
  </>
  );
}

/* LOGIN DROPDOWN CONTENT */
function DropdownContent({  user, onLogin, onSignup, onLogout }) {
  return (
      <>
    {!user ? (
      <>
        {/* LOGIN */}
        <div
          onClick={onLogin}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <IoPersonSharp className="text-blue-600 text-lg" />
          <div>
            <p className="text-sm font-semibold">Customer Login</p>
            <p className="text-xs text-gray-500">Login & check bookings</p>
          </div>
        </div>

        <hr />

        {/* SIGNUP */}
        <div
          onClick={onSignup}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <MdPersonAddAlt1 className="text-blue-600 text-lg" />
          <div>
            <p className="text-sm font-semibold">Sign Up</p>
            <p className="text-xs text-gray-500">Create your account</p>
          </div>
        </div>
      </>
    ) : (
      <>
        {/* MY PROFILE */}
        <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
          <FaRegCircleUser className="text-blue-600 text-lg" />
          <div >
          <p className="text-sm font-semibold">My Profile</p>
          <p>Manage Your Profile and more</p>
          </div>
        </div>

        <hr />

        {/* MY BOOKINGS */}
        <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
          <LuTickets className="text-blue-600 text-lg" />
          <div>
            <p className="text-sm font-semibold text-black-600">My Bookings</p>
            <p>Manage Your bookings here</p>
          </div>
        </div>

        <hr />

        {/* LOGOUT */}
        <div
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-blue-600"
        >
          <TbLogout className="text-lg" />
          <p className="text-sm font-semibold text-black-600">Logout</p>
        </div>
      </>
    )}
  </>
  );
}


