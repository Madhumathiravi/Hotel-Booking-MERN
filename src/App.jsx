import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar.jsx'
import Home from './pages/Home/Home.jsx';
import Hotels from './pages/Hotels.jsx'
import About from './pages/About.jsx'
import Offers from './pages/Offers.jsx'

function App() {
  

  return (
   <div>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<Hotels/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/offers' element={<Offers/>}/>
    </Routes>
     
     {/* <Login/>
     <Signup/> */}
  </div>
  )
}

export default App
