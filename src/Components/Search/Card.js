import { hover } from "@testing-library/user-event/dist/hover";
import { Link } from "react-router-dom";

const Card = ({title, image}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <Link style={{textDecoration: 'none', margin: '6px', color: 'black', fontWeight: 'bold'}} to={`/${title}`}>{title}</Link>
    </div>
  );
};

export default Card;
