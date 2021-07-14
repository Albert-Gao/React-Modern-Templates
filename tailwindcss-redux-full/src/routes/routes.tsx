import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PATHS } from './routes.constants'
import { Home } from '../pages/home/Home'
import { Quotes } from '../pages/quotes/Quotes'
import { NavBar } from '~/components/NavBar'

export const AppRoutes = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path={PATHS.Home} element={<Home />} />
      <Route path={PATHS.QUOTES} element={<Quotes />} />
    </Routes>
  </BrowserRouter>
)
