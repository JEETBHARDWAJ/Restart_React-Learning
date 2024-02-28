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
      <h1 id={style.Titel}>Food items</h1>
      <ul className="list-group">
        {Fooditems.map((item) => (
          <li key={item} className="list-group-item">
            {item}{" "}
            <button type="button" className={`${style.butt} btn btn-primary`} onClick={() => {console.log("buy button clicked")} }>
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Food;
