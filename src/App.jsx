import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'

import Home from './pages/Home/Home.jsx'
import Hotels from './pages/Hotels.jsx'
import About from './pages/About.jsx'
import Offers from './pages/Offers.jsx'

import Profile from './account/Profile.jsx'
import Bookings from './account/Booking.jsx'
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
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
    </div>
  )
}

export default App

