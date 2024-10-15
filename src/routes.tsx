import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import Burgers from './pages/Burgers'
import Pizzas from './pages/Pizzas'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<Burgers />} />
        <Route path='/pizzas' element={<Pizzas />} />
      </Route>
    </Routes>
  )
}
