import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import Burgers from './pages/Burgers'
import Pizzas from './pages/Pizzas'
import IceCreams from './pages/IceCreams'
import Drinks from './pages/Drinks'
import MyCart from './pages/MyCart'
import Payment from './pages/Payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<Burgers />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/ice-creams' element={<IceCreams />} />
      </Route>
      <Route path='cart' element={<MyCart />} />
      <Route path='payment' element={<Payment />} />
    </Routes>
  )
}
