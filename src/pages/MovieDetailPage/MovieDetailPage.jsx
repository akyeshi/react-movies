import { useParams } from 'react-router-dom';

// Use the useParams hook from React Router to access the movieName route parameter defined in the <Route>

export default function MovieDetailPage({ movies }) {

  let { movieName } = useParams();
  let movie = movies.find(movie => movie.title === movieName);

  return (
    <div>
      <h1>{MovieDetailPage}</h1>
      <p>Released: {movie.releasedDate}</p>
      <img src={movie.posterPath} alt="image" />
      <p>Cast: {movie.cast.join(', ')}</p>
    </div>
  )
}