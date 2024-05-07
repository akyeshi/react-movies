import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {

  return (
    <>
      <Link to={`/movies/${movie.title}`}>
        {/* <img src={movie.posterPath} alt="" /> */}
        <div
          className="item-card"
          style={{
            backgroundImage: `url(${movie.posterPath})`,
            backgroundSize: 'cover',
            height: '20rem',
            width: '20rem'
          }}
          >
          <div className="movie-card-title">
            <h1>{movie.title}</h1>
            <h4>Released: {movie.releaseDate}</h4>
          </div>
        </div>
      </Link>
    </>
  )
}