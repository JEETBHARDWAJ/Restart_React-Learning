import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Food.module.css";
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
          <li key={item} className="list-group-item">
            {item}{" "}
            <button
              type="button"
              className={`${style.butt} btn btn-primary`}
              onClick={console.log(`${item}"buy button clicked"`)}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Food;
