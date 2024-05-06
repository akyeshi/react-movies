import { Link } from 'react-router-dom';


export default function NavBar({ user }) {
  return (
    <nav>
      <p>Welcome, {user}</p>
      <Link>Movies</Link>
      &nbsp; | &nbsp;
      <Link>Actors</Link>
    </nav>
  )
}