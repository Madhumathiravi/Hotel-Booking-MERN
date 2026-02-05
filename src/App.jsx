import './App.css'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'

import Home from './pages/Home/Home.jsx'
import Hotels from './pages/Hotels/Hotels.jsx'
import About from './pages/About.jsx'
import Offers from './pages/Offers.jsx'

import Profile from './account/Profile.jsx'
import Bookings from './account/Booking.jsx'
import ProtectedRoute from "./components/ProtectedRoute"
import Footer from "./footer/Footer.jsx";

function App() {
  const user = JSON.parse(localStorage.getItem("user"))
   
  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  };

  const getDayAfterTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d;
  };

  const [location, setLocation] = useState("Bangalore");
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const [checkInDate, setCheckInDate] = useState(getTomorrow());
  const [checkOutDate, setCheckOutDate] = useState(getDayAfterTomorrow());
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home 
            location={location}
            setLocation={setLocation}
            rooms={rooms}
            setRooms={setRooms}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
        />} />
        <Route path='/hotels' element={<Hotels 
            location={location}
            setLocation={setLocation}
            rooms={rooms}
            setRooms={setRooms}
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
        />} />
        <Route path='/about' element={<About />} />
        <Route path='/offers' element={<Offers />} />

        <Route
          path="/account/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/account/bookings"
          element={
            <ProtectedRoute user={user}>
              <Bookings />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

