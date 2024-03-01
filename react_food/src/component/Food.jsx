import FoodItemsList from "./FoodItemsList";
import "bootstrap/dist/css/bootstrap.min.css";

function Food() {
  let Fooditems = [
    "Fruit",
    "Eggs",
    "Meat",
    "Nuts",
    "Veggies",
    "Seafood",
    "Grains",
    "Bread",
  ];

  if (Fooditems.length === 0) {
    return <h1>I am still hungary</h1>;
  }

  return (
    <>
      <ul className="list-group">
        {Fooditems.map((item) => (
          <FoodItemsList key = {item} healthyFood = {item} />
        ))}
      </ul>
    </>
  );
}

export default Food;
