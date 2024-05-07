import MovieCard from "../../components/MovieCard/MovieCard";


export default function MoviesListPage({ movies }) {
  // console.log(movies);
  return (

    <div className="container">

      {movies.map((movie, idx) => (
        <MovieCard movie={movie} key={idx} />
      ))}

      {/* {movies.map((movie, idx) => 
        <MovieCard movie={movie} key={idx} />
      )} */}

      {/* {movies.map((movie, idx) => {
        return <MovieCard movie={movie} key={idx} />
      })} */}

    </div>

  )
}