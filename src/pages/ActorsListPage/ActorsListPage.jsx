import ActorCard from "../../components/ActorCard/ActorCard";


export default function ActorsListPage({ movies }) {

  /*
  let obj = {}; 
  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      obj[actor] = 1; 
    })
  }); 

  let actorList = Object.keys(obj); 
  */

  let allActorsList = [];
  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      allActorsList.push(actor);
    })
  });
  // new Set returns {1, 2, 3} => Array.from(new Set) => [1, 2, 3]
  console.log(new Set(allActorsList));
  const uniqueActorList = Array.from(new Set(allActorsList));

  return (
    <div className="container">
      {uniqueActorList.map(actor => {
        return <ActorCard key={actor} actor={actor} />
      })}
    </div>
  )
}