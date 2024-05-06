import { Link } from 'react-router-dom';


export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <p>Welcome, {user}</p>
      <Link to="/movies">Movies</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors</Link>
      &nbsp; | &nbsp;
      <Link to="/logout">Log Out</Link>
    </nav>
  )
}