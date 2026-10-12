import DishCard from "./DishCard";
import "./MenuList.css";

function MenuList({ dishes }) {

  if (!dishes.length)
    return <h2>No dishes found.</h2>;

  return (
    <div className="menu-grid">

      {dishes.map((dish)=>(
        <DishCard
          key={dish.id}
          dish={dish}
        />
      ))}

    </div>
  );
}

export default MenuList;