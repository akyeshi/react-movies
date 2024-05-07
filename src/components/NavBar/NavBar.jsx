import { Link } from 'react-router-dom';


export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <p>Welcome, {user}</p>
      <div className="nav-links">
        <Link to="/movies">Movies</Link>

        <Link to="/actors">Actors</Link>

        <Link to="/logout">Log Out</Link>
      </div>
    </nav>
  )
}