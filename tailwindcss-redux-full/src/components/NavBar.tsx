import { Link } from 'react-router-dom'
import { PATHS } from '../routes'

export const NavBar = () => {
  return (
    <nav>
      <Link className="p-3" to={PATHS.Home}>
        Home
      </Link>
      <Link className="p-3" to={PATHS.QUOTES}>
        Quotes
      </Link>
    </nav>
  )
}
