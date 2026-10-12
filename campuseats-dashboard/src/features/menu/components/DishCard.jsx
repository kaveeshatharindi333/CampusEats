import { Link } from "react-router-dom";
import "./DishCard.css";

function DishCard({ dish }) {
  return (
    <div className="dish-card">

      <img
        src={dish.image}
        alt={dish.name}
        className="dish-image"
      />

      <h3>{dish.name}</h3>

      <p className="price">
        Rs. {dish.price.toFixed(2)}
      </p>

      <p className="category">
        {dish.category}
      </p>

      {!dish.available && (
        <span className="sold">
          Sold Out
        </span>
      )}

      <br />

      <Link to={`/dish/${dish.id}`}>
        View Details
      </Link>

    </div>
  );
}

export default DishCard;