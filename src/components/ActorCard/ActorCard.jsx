


export default function ActorCard({ actor }) {

  const generateRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
  let num = generateRandomNumber(180, 500);
  return (
    <div className="item-card"
      style={{
        background: `url(https://picsum.photos/${num}) no-repeat center center`,
        WebkitBackgroundSize: "cover"
      }}>
      <div className="title">
        <h1>{actor}</h1>
      </div>
    </div>
  )
}