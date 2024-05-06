import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  console.log(movie); 
  return (
    <>
      <Link to={`/movies/${movie.title}`}>{movie.title}</Link>
      {/* <img src={movie.posterPath} alt="" /> */}
      <div
        className="movie-card"
        style={{
          backgroundImage: `url(${movie.posterPath})`,
          backgroundSize: 'cover',
          height: '20rem',
          width: '20rem'
        }}
      ></div>
    </>
  )
}