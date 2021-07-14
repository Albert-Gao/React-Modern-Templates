import { Link } from 'react-router-dom'
import { PATHS } from '~/routes'

export const NavBar = () => {
  return (
    <nav>
      <Link style={{ padding: '8px' }} to={PATHS.Home}>
        Home
      </Link>
      <Link style={{ padding: '8px' }} to={PATHS.USERS}>
        Users
      </Link>
    </nav>
  )
}
