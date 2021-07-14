import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PATHS } from './routes.constants'
import { Home } from '../pages/home/Home'
import { Users } from '../pages/users/Users'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATHS.Home} element={<Home />} />
      <Route path={PATHS.USERS} element={<Users />} />
    </Routes>
  </BrowserRouter>
)
