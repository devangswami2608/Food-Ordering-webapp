import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import StoreContextProvider from './components/Context/StoreContext'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import SearchResult from './pages/SearchResult/Searchresult'


const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/search' element={<SearchResult />} /> 
        </Routes>

      </div>
      <Footer />

    </>

  )
}

export default App