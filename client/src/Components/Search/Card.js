import { Link } from "react-router-dom";

const Card = ({CityName, image}) => {
  return (
    <div className="card">
      <img src={image} alt={CityName} />
      <Link style={{margin: '6px', color: 'black'}} to={`/room/${CityName}`}>{CityName}</Link>
    </div>
  );
};

export default Card;
