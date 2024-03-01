import FoodItemsList from "./FoodItemsList";
import "bootstrap/dist/css/bootstrap.min.css";

function Food(props) {

  if (props.Fooditems.length === 0) {
    return <h1>I am still hungary</h1>;
  }

  return (
    <>
      <ul className="list-group">
        {props.Fooditems.map((item) => (
          <FoodItemsList key = {item} healthyFood = {item} />
        ))}
      </ul>
    </>
  );
}

export default Food;
